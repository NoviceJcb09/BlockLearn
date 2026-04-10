<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\UnitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::apiResource('courses', CourseController::class);
Route::apiResource('units', UnitController::class);