<?php

namespace App\Http\Controllers;

use App\Models\Match;
use App\Models\Score;
use Illuminate\Http\Request;
use App\Events\ScoreUpdated;
use App\Models\Matches;
use Inertia\Inertia;

class ScoreController extends Controller
{
    public function Index()
    {
        $matches = Matches::all();
        return view('score.index', compact('matches'));
    }

    public function show(int $id)
    {
        $match = Matches::with('scores')->find($id);
        // $score = $match->scores()->latest()->first();
        return Inertia::render('Scores/View', ['match' => $match]);
    }

    public function update(Request $request, int $id)
    {
        $validated = $request->validate([
            'home_score' => 'required|integer|min:0',
            'away_score' => 'required|integer|min:0',
        ]);

        $match = Matches::find($id);
        $score = $match->scores()->latest()->first();
        $score->update($validated);

        broadcast(new ScoreUpdated($match))->toOthers();

        return response()->json($score);
    }
}
