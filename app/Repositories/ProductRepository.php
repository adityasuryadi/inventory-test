<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Models\Product;

interface ProductRepository
{
    public function findById(int $id): ?Product;
    public function findAll(): array;
    public function save(Product $product): Product;
    public function update(Product $product): bool;
    public function delete(int $id): bool;
    public function decrementStock(int $id, int $quantity): bool;
}
