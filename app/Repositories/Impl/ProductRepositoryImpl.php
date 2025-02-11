<?php

namespace App\Repositories\Impl;

use App\Models\Product;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;

class ProductRepositoryImpl implements ProductRepository
{
    public function findById(int $id): ?Product
    {
        $model = Product::find($id);
        return $model;
    }

    public function findAll(): array
    {
        $products = Product::all();
        return $products->toArray();
    }

    public function save(Product $product): Product
    {
        $product->save();
        return $product;
    }

    public function update(Product $product): bool
    {
        return $product->save();
    }

    public function delete(int $id): bool
    {
        $model = Product::find($id);
        return $model ? $model->delete() : false;
    }

    public function decrementStock(int $id, int $quantity): bool
    {
        $product = Product::find($id);
        // $product->stok -= $quantity;
        return $product->decrement('stok', $quantity);
    }
}
