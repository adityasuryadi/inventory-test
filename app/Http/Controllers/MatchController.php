<?php

namespace App\Http\Controllers;

use App\Models\Matches;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MatchController extends Controller
{
    public function index()
    {
        $matches = Matches::with('scores')->get();
        return Inertia::render('Matches/Index', ['matches' => $matches]);
    }

    public function create()
    {
        return Inertia::render('Matches/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'sport_type' => 'required|string',
            'team_home' => 'required|string',
            'team_away' => 'required|string',
        ]);

        $match = Matches::create($validated);
        $match->scores()->create(['home_score' => 0, 'away_score' => 0]);

        return redirect()->back();
    }

    public function show($id)
    {
        $match = Matches::with('scores')->find($id);
        return Inertia::render('Matches/Show', ['match' => $match]);
    }
}
