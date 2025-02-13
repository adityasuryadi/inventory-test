import { useState,useEffect } from "react"
const ScoreBoardOperator = ({ match }) => {
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
    return (
          <div className="text-center">
        <h2 className="text-xl font-bold">{match.sport_type}</h2>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p>{match.team_home}</p>
            <p className="text-3xl font-bold">{homeScore}</p>
          </div>
          <div className="text-xl">VS</div>
          <div>
            <p>{match.team_away}</p>
            <p className="text-3xl font-bold">{awayScore}</p>
          </div>
        </div>
      </div>
    );
}

export default ScoreBoardOperator