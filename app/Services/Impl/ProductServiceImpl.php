<?php

namespace App\Services\Impl;

use App\Models\Product;
use App\Services\ProductService;
use App\Http\Requests\ProductCreateRequest;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;

class ProductServiceImpl implements ProductService
{
    private $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function getAllProducts(): array
    {
        return $this->productRepository->findAll();
    }

    public function getProduct(int $id)
    {
        return $this->productRepository->findById($id);
    }

    public function createProduct(ProductCreateRequest $request): Product
    {
        $product = new Product();
        $product->produk = $request->produk;
        $product->stok = $request->stok;
        $product->harga = $request->harga;

        $this->productRepository->save($product);

        return $product;
    }

    public function updateProduct(int $id, Request $request): bool
    {
        $product = $this->productRepository->findById($id);

        if (!$product) {
            return false;
        }

        $product->produk = $request->produk;
        $product->stok = $request->stok;
        $product->harga = $request->harga;

        return $this->productRepository->update($product);
    }

    public function deleteProduct(int $id): bool
    {
        return $this->productRepository->delete($id);
    }
}
