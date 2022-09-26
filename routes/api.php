<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::group(['namespace'=> 'User', 'prefix' => 'users'], function () {
    Route::post('/', 'StoreController');
});

Route::group(['namespace'=> 'Fruit', 'prefix' => 'fruits'], function () {
    Route::get('/', 'Fruit\IndexController@index');
});
