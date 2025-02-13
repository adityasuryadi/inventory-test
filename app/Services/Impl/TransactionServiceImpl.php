<?php

namespace App\Services\Impl;

use App\Http\Requests\TransactionCreateRequest;
use App\Models\Product;
use App\Services\TransactionService;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use App\Repositories\ProductRepository;
use App\Repositories\TransactionRepository;
use DateTime;
use Illuminate\Support\Facades\DB;

class TransactionServiceImpl implements TransactionService
{
    protected $transactionRepository;
    protected $productRepository;
    public function __construct(TransactionRepository $transactionRepository, ProductRepository $productRepository)
    {
        $this->transactionRepository = $transactionRepository;
        $this->productRepository = $productRepository;
    }

    public function findById(int $id): ?Transaction
    {
        $model = Transaction::with('details.product')->find($id);
        if (!$model) {
            return null;
        }

        return $model;
    }

    public function findAll(): array
    {
        return Transaction::with('details')->get()->toArray();
    }

    public function save(TransactionCreateRequest $requests): Transaction
    {
        try {
            $model = DB::transaction(function () use ($requests) {
                $model = new Transaction();
                $model->kode_transaksi = $this->generateTransactionCode();
                $model->tanggal = now();
                $model->save();

                foreach ($requests->details as $request) {
                    $product = Product::find($request['id_produk']);
                    $detailModel = new TransactionDetail();
                    $detailModel->id_transaksi = $model->id;
                    $detailModel->id_produk = $request['id_produk'];
                    $detailModel->quantity = $request['quantity'];
                    $detailModel->harga = $product->harga;
                    $detailModel->save();

                    $this->productRepository->decrementStock($request['id_produk'], $request['quantity']);
                }

                $this->transactionRepository->save($model);
                return $model;
            });
            return $model;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function generateTransactionCode(): string
    {
        $lastId = Transaction::max('id') ?? 0;
        $nextId = $lastId + 1;
        return $nextId .  date('Ymd');
    }

    public function delete(int $id): bool
    {
        return $this->transactionRepository->delete($id);
    }
}
