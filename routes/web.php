<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::post('/contact', ContactController::class)->middleware('throttle:5,1');

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
