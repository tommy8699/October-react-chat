<?php namespace App\Api\Models;

use Model;

/**
 * Message Model
 *
 * @link https://docs.octobercms.com/3.x/extend/system/models.html
 */
class Message extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string table name
     */
    public $table = 'app_api_messages';

    /**
     * @var array rules for validation
     */
    public $rules = [];
}
