<?php

namespace App\Services;

use App\Http\Requests\TransactionCreateRequest;

interface TransactionService
{
    public function findById(int $id);
    public function findAll();
    public function save(TransactionCreateRequest $transaction);
    public function delete(int $id);
    public function generateTransactionCode();
}
