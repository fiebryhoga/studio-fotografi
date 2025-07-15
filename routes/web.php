<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicPageController; 
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Package;
use App\Models\Portfolio;
use App\Http\Controllers\BookingController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'packages' => Package::all(),
        'portfolios' => Portfolio::orderBy('position')->get(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
    
})->name('home');



Route::post('/bookings', [BookingController::class, 'store'])->name('bookings.store');
Route::post('/bookings/{booking}/upload', [BookingController::class, 'uploadProof'])->name('bookings.upload');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
