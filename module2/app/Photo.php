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
        return asset('photo/'.$this->file);
    }
}
