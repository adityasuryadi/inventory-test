<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HistoryScore extends Model
{
    protected $table = 'history_scores';
    protected $fillable = ['home_score', 'away_score', 'match_id'];
}
