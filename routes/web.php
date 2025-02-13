<?php

use App\Http\Controllers\MatchController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScoreController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\KursController;
use App\Models\Transaction;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});
Route::resource('product', ProductController::class);
Route::resource('transaction', TransactionController::class);
Route::get('kurs', [KursController::class, 'getKurs']);
Route::get('match', [MatchController::class, 'index'])->name('match.index');
Route::get('match/create', [MatchController::class, 'create'])->name('match.create');
Route::get('match/{id}', [MatchController::class, 'show'])->name('match.show');
Route::post('match', [MatchController::class, 'store'])->name('match.store');
// Route::get('match/{id}', [ScoreController::class, 'show']);
Route::resource('score', ScoreController::class);
