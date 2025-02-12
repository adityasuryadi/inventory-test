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

        return $model;
    }

    public function findAll(): array
    {
        return Transaction::with('details')->get()->toArray();
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

    public function delete(int $id): bool
    {
        $transaction = $this->findById($id);
        $transaction->details()->delete();
        return true;
    }
}
