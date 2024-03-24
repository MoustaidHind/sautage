<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StockController;

Route::get('/', function () {
    return view('welcome');
});

// routes/api.php

Route::get('/gestion-stocks', [StockController::class, 'index']); // Afficher tous les stocks
Route::post('/gestion-stocks', [StockController::class, 'store']); // Ajouter un nouveau stock
Route::get('/gestion-stocks/{id}', [StockController::class, 'show']); // Afficher un stock par son ID
Route::put('/gestion-stocks/{id}', [StockController::class, 'update']); // Mettre à jour un stock par son ID
Route::delete('/gestion-stocks/{id}', [StockController::class, 'destroy']); // Supprimer un stock par son ID

