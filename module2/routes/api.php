<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('signup', 'Auth\RegisterController@register');

Route::post('login', 'Auth\LoginController@login');

Route::middleware('apiauth')->group(function () {
    Route::post('logout', 'Auth\LoginController@logout');
    Route::post('photo', 'PhotoController@upload');

    Route::match(['post', 'patch'], 'photo/{id}', 'PhotoController@photoChange');
    Route::delete('photo/{id}', 'PhotoController@delete');
    Route::get('photo', 'PhotoController@getPhoto');
    Route::get('photo/{id}', 'PhotoController@getOne');

    Route::get('user', 'UserController@search');
    Route::post('user/{id}/share', 'PhotoController@share');
});
