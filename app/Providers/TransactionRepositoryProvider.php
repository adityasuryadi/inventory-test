<?php

namespace App\Providers;

use App\Models\Transaction;
use App\Repositories\Impl\TransactionRepositoryImpl;
use App\Repositories\TransactionRepository;
use Illuminate\Support\ServiceProvider;

class TransactionRepositoryProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(TransactionRepository::class, TransactionRepositoryImpl::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
