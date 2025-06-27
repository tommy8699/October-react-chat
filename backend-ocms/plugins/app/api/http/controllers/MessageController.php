<?php

namespace App\Api\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Api\Models\Message;
use App\Api\Models\Chat;

class MessageController extends Controller
{
    public function index(Request $request, $chatId)
    {
        $chat = Chat::findOrFail($chatId);
        return $chat->messages()->with('user')->get();
    }

    public function store(Request $request, $chatId)
    {
        $request->validate([
            'content' => 'required|string',
        ]);

        $chat = Chat::findOrFail($chatId);

        $message = $chat->messages()->create([
            'user_id' => $request->user()->id,
            'content' => $request->content,
        ]);

        return response()->json($message, 201);
    }

    public function show($id)
    {
        return Message::with('user')->findOrFail($id);
    }

    public function destroy($id)
    {
        Message::destroy($id);
        return response()->json(['message' => 'Message deleted']);
    }
}
