"use client"

import { useState,useEffect } from "react"
import axios from "axios"

export default function OperatorInterface({ match }) {
  const [homeScore, setHomeScore] = useState(match.scores[match.scores.length - 1].home_score)
  const [awayScore, setAwayScore] = useState(match.scores[match.scores.length - 1].away_score)


  const updateScore = async () => {
    try {
      await axios.put(`/api/matches/${match.id}/score`, {
        home_score: homeScore,
        away_score: awayScore,
      })
    } catch (error) {
      console.error("Error updating score:", error)
    }
  }


useEffect(() => {
  window.Echo.channel(`score-updates.${match.id}`).listen(".update.score", (e) => {
    let awayScore = e.match.scores[0].away_score
    let homeScore = e.match.scores[0].home_score

    setAwayScore(awayScore)
    setHomeScore(homeScore)
  })
return () => {
  window.Echo.channel(`score-updates.${match.id}`).stopListening(".update.score")
}
},[]) 

  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <div>
          <label className="block">Home Score</label>
          <input
            type="number"
            value={homeScore}
            onChange={(e) => setHomeScore(e.target.value)}
            className="border p-1"
          />
        </div>
        <div>
          <label className="block">Away Score</label>
          <input
            type="number"
            value={awayScore}
            onChange={(e) => setAwayScore(e.target.value)}
            className="border p-1"
          />
        </div>
      </div>
      <button onClick={updateScore} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Update Score
      </button>
    </div>
  )
}

