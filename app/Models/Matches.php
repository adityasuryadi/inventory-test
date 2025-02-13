<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Matches extends Model
{
    protected $fillable = ['sport_type', 'team_home', 'team_away'];
    protected $table = 'matches';

    public function scores()
    {
        return $this->hasMany(Score::class, 'match_id', 'id');
    }
}
