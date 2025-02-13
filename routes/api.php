<?php

use App\Http\Controllers\MatchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ScoreController;

Route::put('/matches/{id}/score', [ScoreController::class, 'update']);
