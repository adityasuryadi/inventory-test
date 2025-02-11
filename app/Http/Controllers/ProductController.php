<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductCreateRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Services\ProductService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Product;

class ProductController extends Controller
{
    protected $productService;
    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function index(): Response
    {
        $products = $this->productService->getAllProducts();
        return Inertia::render('Products/Index', ['products' => $products]);
    }

    public function create(): Response
    {
        return Inertia::render('Products/Create');
    }

    public function store(ProductCreateRequest $request)
    {
        $validated = $request->validated();
        $this->productService->createProduct($request);
        return to_route('product.index');
    }

    public function edit($id): Response
    {
        $product = $this->productService->getProduct($id);
        return Inertia::render('Products/Edit', ['product' => $product]);
    }

    public function update(ProductUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $this->productService->updateProduct($id, $request);
        return to_route('product.index');
    }

    public function destroy($id)
    {
        $this->productService->deleteProduct($id);
    }
}
