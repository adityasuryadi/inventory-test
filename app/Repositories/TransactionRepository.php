<?php

namespace App\Repositories;

use App\Models\Transaction;

interface TransactionRepository
{
    public function findById(int $id): ?Transaction;
    public function findAll(): array;
    public function save(Transaction $transaction): bool;
    public function generateTransactionCode(): string;
}
