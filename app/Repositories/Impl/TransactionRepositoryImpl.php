<?php

namespace App\Repositories\Impl;

use App\Models\Transaction;
use App\Repositories\TransactionRepository;

class TransactionRepositoryImpl implements TransactionRepository
{
    public function findById(int $id): ?Transaction
    {
        $model = Transaction::with('details')->find($id);
        if (!$model) {
            return null;
        }

        return $this->toEntity($model);
    }

    public function findAll(): array
    {
        return Transaction::with('details')->get()->map(function ($model) {
            return $this->toEntity($model);
        })->toArray();
    }

    public function save(Transaction $transaction): bool
    {
        return $transaction->save();
    }

    public function generateTransactionCode(): string
    {
        $lastId = Transaction::max('id') ?? 0;
        $nextId = $lastId + 1;
        return 'TRX' . date('Ymd') . str_pad($nextId, 4, '0', STR_PAD_LEFT);
    }

    private function toEntity(Transaction $model): Transaction
    {
        $transaction = new Transaction(
            $model->kode_transaksi,
            // new DateTime($model->tanggal)
        );

        // foreach ($model->details as $detail) {
        //     $transaction->addDetail(new TransactionDetail(
        //         $detail->id_transaksi,
        //         $detail->id_produk,
        //         $detail->quantity
        //     ));
        // }

        return $transaction;
    }
}
