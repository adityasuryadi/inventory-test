<?php

namespace App\Events;

use App\Models\Matches;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ScoreUpdated implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $match;

    public function __construct(Matches $match)
    {
        $this->match = $match;
    }

    public function broadcastOn(): Channel
    {
        // return new Channel('score-updates');
        return new Channel('score-updates.' . $this->match->id);
    }


    public function broadcastWith()
    {
        return [
            'match' => $this->match->load('scores'),
        ];
    }

    public function broadcastAs()
    {
        return 'update.score'; // Nama event yang dikirim ke frontend
    }
}
