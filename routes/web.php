<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::post('/add-vehicle-type','VehicleTypeController@add_type');
Route::get('/category','VehicleTypeController@all_category');
Route::get('/{anypath}','HomeController@index')->where('path','.*');