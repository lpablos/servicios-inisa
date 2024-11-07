<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CatalogosController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::prefix('catalogos')->group(function () {
    Route::controller(CatalogosController::class)->group(function () {
        Route::get('cotizacion', 'showCotizacion')->name('show.catalogos.cotizacion');
        Route::get('cliente', 'showCliente')->name('show.catalogos.cliente');
        Route::post('departamento', 'showDepartamento')->name('ashow.catalogos.departamento');
    });
});
