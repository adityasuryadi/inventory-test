<?php

namespace App\Providers;

use App\Models\Transaction;
use App\Repositories\ProductRepository;
use App\Repositories\TransactionRepository;
use App\Services\Impl\TransactionServiceImpl;
use App\Services\TransactionService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class TransactionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        // $this->app->singleton(TransactionService::class, TransactionServiceImpl::class);
        $this->app->bind(TransactionService::class, function (Application $app) {
            return new TransactionServiceImpl($app->make(TransactionRepository::class), $app->make(ProductRepository::class));
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
