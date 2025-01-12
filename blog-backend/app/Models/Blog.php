<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    //
    protected $fillable = [
        'title', 'content', 'picture', 'user_id', 'album_id'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function album(){
        return $this->belongsTo(Album::class, 'album_id');
    }

    protected static function boot()
    {
        parent::boot();
    
        static::deleting(function ($blog) {
            $blog->likes()->delete();
        });
    }
}
