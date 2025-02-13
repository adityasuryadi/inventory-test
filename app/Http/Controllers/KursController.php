<?php

namespace App\Http\Controllers;

use App\Models\Kurs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

class KursController extends Controller
{
    public function getKurs()
    {
        try {
            $response = Http::get('https://www.smartdeal.co.id/rates/dki_banten');

            $crawler = new Crawler($response->body());

            $exchangeRates = [];
            $currentCurrency = null;

            $crawler->filter('#tableExchange tr.body')->each(function (Crawler $row) use (&$exchangeRates, &$currentCurrency) {
                $currencyNode = $row->filter('td.kodenegara');
                if ($currencyNode->count() > 0 && trim($currencyNode->text())) {
                    $currentCurrency = trim($currencyNode->text());
                    if (!isset($exchangeRates[$currentCurrency])) {
                        $exchangeRates[$currentCurrency] = [];
                    }
                }

                if ($currentCurrency) {
                    $denomination = $row->filter('td')->eq(1)->text();
                    $buyingRate = $row->filter('td.textmerah')->text();
                    $sellingRate = $row->filter('td.texthijau')->text();

                    $exchangeRates[$currentCurrency][] = [
                        'denomination' => trim($denomination),
                        'buying_rate' => $this->formatRate($buyingRate),
                        'selling_rate' => $this->formatRate($sellingRate),
                        'last_updated' => now()->toDateTimeString()
                    ];
                }
            });

            Kurs::create([
                'data_kurs' => json_encode($exchangeRates)
            ]);

            return response()->json([
                'success' => true,
                'data' => $exchangeRates
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $e->getMessage()
            ], 500);
        }
    }

    private function formatRate($rate)
    {
        // Remove thousand separators and convert to float
        $rate = trim($rate);
        if ($rate === '-') {
            return null;
        }
        return floatval(str_replace(['.', ','], ['', '.'], $rate));
    }
}
