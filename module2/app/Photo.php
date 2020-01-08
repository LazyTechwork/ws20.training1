<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $guarded = [];

    public function author()
    {
        return $this->hasOne(User::class, 'id', 'owner_id');
    }

    public function url()
    {
        return asset('photo/' . $this->file);
    }

    public function shared()
    {
        return $this->belongsToMany(User::class, 'shared');
    }

    /*public function hasAccess($user_id)
    {
        return $this->author->id == $user_id || $this->shared()->where('user_id', '=', $user_id)->count();
    }*/
}
