<?php

namespace App\Api\Controllers;

use App\Api\Models\Chat;
use BackendMenu;
use Backend\Classes\Controller;
use Illuminate\Http\Request;

/**
 * Chat Controller Backend Controller
 *
 * @link https://docs.octobercms.com/3.x/extend/system/controllers.html
 */
class ChatController extends Controller
{
    public $implement = [
        \Backend\Behaviors\FormController::class,
        \Backend\Behaviors\ListController::class,
    ];

    /**
     * @var string formConfig file
     */
    public $formConfig = 'config_form.yaml';

    /**
     * @var string listConfig file
     */
    public $listConfig = 'config_list.yaml';

    /**
     * @var array required permissions
     */
    public $requiredPermissions = ['app.api.chatcontroller'];

    /**
     * __construct the controller
     */
    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('App.Api', 'api', 'chatcontroller');
    }

    public function index(Request $request)
    {
        $user = Auth::getUser();

        $chats = $user->chats()->with('users', 'messages')->get();

        return response()->json($chats);
    }

    /**
     * POST /api/chats – Vytvorenie nového chatu
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'nullable|string|max:255',
        ]);

        $user = Auth::getUser();

        $chat = new Chat();
        $chat->name = $request->input('name', 'Nový chat');
        $chat->save();

        // pridať zakladateľa ako člena
        $chat->users()->attach($user->id);

        return response()->json($chat);
    }

    /**
     * PUT /api/chats/{id}/invite – Pozvanie používateľov
     */
    public function invite(Request $request, $id)
    {
        $request->validate([
            'user_ids' => 'required|array',
            'user_ids.*' => 'integer|exists:users,id',
        ]);

        $chat = Chat::findOrFail($id);
        $chat->users()->syncWithoutDetaching($request->user_ids);

        return response()->json(['message' => 'Používatelia pozvaní']);
    }

    /**
     * PUT /api/chats/{id}/leave – Opustenie chatu
     */
    public function leave(Request $request, $id)
    {
        $user = Auth::getUser();
        $chat = Chat::findOrFail($id);

        $chat->users()->detach($user->id);

        // automatické mazanie ak posledný užívateľ odíde
        if ($chat->users()->count() === 0) {
            $chat->delete();
            return response()->json(['message' => 'Chat bol zmazaný']);
        }

        return response()->json(['message' => 'Opustil si chat']);
    }

    /**
     * PUT /api/chats/{id}/rename – Premenovanie chatu
     */
    public function rename(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $chat = Chat::findOrFail($id);
        $chat->name = $request->input('name');
        $chat->save();

        return response()->json($chat);
    }

    /**
     * GET /api/chats/{id} – Detail jedného chatu
     */
    public function show($id)
    {
        $chat = Chat::with('users', 'messages.user')->findOrFail($id);

        return response()->json($chat);
    }
}
