<?php

use Illuminate\Support\Facades\Route;
use App\Api\Http\Controllers\AuthController;
use App\Api\Http\Controllers\ChatController;
use App\Api\Http\Controllers\MessageController;

Route::prefix('api')->group(function () {

    // Auth endpoints
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

    // Protected API endpoints
    Route::middleware('auth:sanctum')->group(function () {

        // Chats
        Route::get('/chats', [ChatController::class, 'index']);
        Route::post('/chats', [ChatController::class, 'store']);
        Route::get('/chats/{id}', [ChatController::class, 'show']);
        Route::put('/chats/{id}', [ChatController::class, 'update']);
        Route::delete('/chats/{id}', [ChatController::class, 'destroy']);
        Route::post('/chats/{id}/invite', [ChatController::class, 'inviteUser']);
        Route::post('/chats/{id}/leave', [ChatController::class, 'leaveChat']);

        // Messages
        Route::get('/chats/{id}/messages', [MessageController::class, 'index']);
        Route::post('/chats/{id}/messages', [MessageController::class, 'store']);
        Route::get('/messages/{id}', [MessageController::class, 'show']);
        Route::delete('/messages/{id}', [MessageController::class, 'destroy']);
    });
});
