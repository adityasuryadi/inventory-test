import { useEffect, useState } from "react"
import ScoreboardGradient from "@/Components/ScoreboardGradient"
import ScoreboardHexagon from "@/Components/ScoreboardHexagon"
import ScoreboardMinimalist from "@/Components/ScoreboardMinimalist"
import ScoreboardNeon from "@/Components/ScoreboardNeon"

export default function ScoreBoard({ match }) {
    const latestScore = match.scores[match.scores.length - 1]
    const [homeScore, setHomeScore] = useState(match.scores[match.scores.length - 1].home_score)
    const [awayScore, setAwayScore] = useState(match.scores[match.scores.length - 1].away_score)
  const data = {
    scoreHome: homeScore,
    scoreAway: awayScore,
    teamHome: match.team_home,
    teamAway: match.team_away,
    sportType: match.sport_type
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

    if (match.sport_type === "soccer") {
      return (
        <div class="h-screen flex items-center justify-center">
          <ScoreboardGradient  match={data}/>
        </div>
      )
    }

    if (match.sport_type === "volley") {
      return (
        <div class="h-screen flex items-center justify-center">
          <ScoreboardHexagon  match={data}/>
        </div>
      )
    }

    if (match.sport_type === "badminton") {
      return (
        <div class="h-screen flex items-center justify-center">
          <ScoreboardMinimalist  match={data}/>
        </div>
      )
    }

    if (match.sport_type === "basket") {
      return (
        <div class="h-screen flex items-center justify-center">
          <ScoreboardNeon  match={data}/>
        </div>
      )
    }

  }
  
  