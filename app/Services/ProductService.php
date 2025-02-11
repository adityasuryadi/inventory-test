<?php

namespace App\Services;

use App\Http\Requests\ProductCreateRequest;
use App\Models\Product;
use Illuminate\Http\Request;

interface ProductService
{
    public function getAllProducts();
    public function getProduct(int $id);
    public function createProduct(ProductCreateRequest $request): Product;
    public function updateProduct(int $id, Request $request): bool;
    public function deleteProduct(int $id): bool;
}
