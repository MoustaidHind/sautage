<?php

use App\Http\Controllers\StockController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/gestion-stocks', [StockController::class, 'index']); // Afficher tous les stocks
Route::post('/gestion-stocks', [StockController::class, 'store']); // Ajouter un nouveau stock
Route::get('/gestion-stocks/{id}', [StockController::class, 'show']); // Afficher un stock par son ID
Route::put('/gestion-stocks/{id}', [StockController::class, 'update']); // Mettre à jour un stock par son ID
Route::delete('/gestion-stocks/{id}', [StockController::class, 'destroy']); // Supprimer un stock par son ID
