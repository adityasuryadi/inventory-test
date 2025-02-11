<?php

namespace App\Providers;

use App\Repositories\Impl\ProductRepositoryImpl;
use App\Repositories\ProductRepository;
use Illuminate\Support\ServiceProvider;

class ProductRepositoryProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(ProductRepository::class, ProductRepositoryImpl::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
