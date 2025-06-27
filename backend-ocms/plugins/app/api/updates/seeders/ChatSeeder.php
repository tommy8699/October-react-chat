<?php namespace App\Api\Updates\Seeders;

use App\Api\Models\Chat;
use App\Api\Models\Message;
use RainLab\User\Models\User;
use Seeder;

/**
 * ChatSeeder
 */
class ChatSeeder extends Seeder
{
    /**
     * run the database seeds.
     */
    public function run()
    {
        $users = User::all();

        $chat = Chat::create([
            'name' => 'Testovací chat',
        ]);

        $chat->users()->attach($users->pluck('id'));

        foreach ($users as $user) {
            Message::create([
                'chat_id' => $chat->id,
                'user_id' => $user->id,
                'content' => "Ahoj, ja som {$user->name}!",
            ]);
        }    }
}
