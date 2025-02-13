<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kurs extends Model
{
    protected $table = 'kurs';
    protected $fillable = ['data_kurs'];
    protected $casts = [
        'data_kurs' => 'json'
    ];
}
