<?php

namespace App\Api\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Api\Models\Chat;
use App\Api\Models\Message;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        return $request->user()->chats()->with('users')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $chat = Chat::create(['name' => $request->name]);
        $chat->users()->attach($request->user()->id);

        return response()->json($chat, 201);
    }

    public function show($id)
    {
        $chat = Chat::with('users')->findOrFail($id);
        return response()->json($chat);
    }

    public function update(Request $request, $id)
    {
        $chat = Chat::findOrFail($id);
        $chat->update($request->only('name'));
        return response()->json($chat);
    }

    public function destroy($id)
    {
        Chat::destroy($id);
        return response()->json(['message' => 'Chat deleted']);
    }

    public function inviteUser(Request $request, $id)
    {
        $chat = Chat::findOrFail($id);
        $request->validate(['user_id' => 'required|exists:users,id']);
        $chat->users()->attach($request->user_id);
        return response()->json(['message' => 'User invited']);
    }

    public function leaveChat(Request $request, $id)
    {
        $chat = Chat::findOrFail($id);
        $chat->users()->detach($request->user()->id);
        return response()->json(['message' => 'You left the chat']);
    }
}
