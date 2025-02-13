<?php

namespace App\Listeners;

use App\Events\ScoreUpdated;
use App\Models\Score;
use App\Models\HistoryScore;
use Carbon\Carbon;

use Illuminate\Support\Facades\Log;

class updateScoreHistoryListener
{
    protected $matchId;
    protected $scoreAway;
    protected $scoreHome;
    protected $score;
    /**
     * Create the event listener.
     */
    public function __construct(Score $score)
    {
        $this->score = $score;
    }

    /**
     * Handle the event.
     */
    public function handle(ScoreUpdated $event): void
    {
        HistoryScore::create([
            'match_id' => $event->match->id,
            'home_score' => $event->match->scores()->latest()->first()->home_score,
            'away_score' => $event->match->scores()->latest()->first()->away_score,
        ]);
    }
}
