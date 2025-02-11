<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransactionCreateRequest;
use App\Models\Product;
use App\Services\TransactionService;
use Illuminate\Http\Request;
use Inertia\Response;
use PDO;

class TransactionController extends Controller
{
    protected $transactionService;
    public function __construct(TransactionService $transactionService)
    {
        $this->transactionService = $transactionService;
    }

    public function index(): Response
    {
        $transactions = [];
        return inertia('Transactions/Index', ['transactions' => $transactions]);
    }

    public function create(): Response
    {
        $products = Product::all();
        return inertia('Transactions/Create', ['products' => $products]);
    }

    public function store(TransactionCreateRequest $request)
    {
        $this->transactionService->save($request);
    }
}
