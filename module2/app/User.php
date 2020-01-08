<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    use Notifiable;

    protected $hidden = [
        'password', 'token',
    ];

    protected $guarded = [];


    public function generateToken()
    {
        $this->token = Str::random(60);
        $this->save();
        return $this->token;
    }

    public static function getByToken($token)
    {
        $found = User::where('token', $token)->first();
        if ($found->count() == 0)
            return null;
        else
            return $found;
    }

    public function photos()
    {
        return $this->hasMany(Photo::class, 'owner_id', 'id');
    }
}
