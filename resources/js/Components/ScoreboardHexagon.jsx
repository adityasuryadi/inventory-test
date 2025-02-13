import React from "react"
const ScoreboardHexagon = ({match:{teamHome, teamAway, scoreHome, scoreAway,sportType}}) => { 
return (
  <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 text-white overflow-hidden rounded-lg shadow-lg">
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg px-3 py-1 bg-white text-indigo-700 rounded-full font-semibold">{sportType}</span>
        <span className="text-lg px-3 py-1 bg-white text-purple-700 rounded-full font-semibold animate-pulse">
          LIVE
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <TeamDisplayHexagon name={teamHome} score={scoreHome} logo="/placeholder.svg?height=80&width=80" />
        <div className="hexagon bg-white text-indigo-700 text-2xl font-bold">VS</div>
        <TeamDisplayHexagon name={teamAway} score={scoreAway} logo="/placeholder.svg?height=80&width=80" />
      </div>
    </div>
  </div>
)
}

const TeamDisplayHexagon = ({ name, score, logo }) => (
<div className="flex flex-col items-center space-y-4">
  <div className="hexagon bg-white p-2">
    <img src={logo || "/placeholder.svg"} alt={`${name} logo`} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
  </div>
  <div className="text-2xl md:text-3xl font-semibold">{name}</div>
  <div className="hexagon bg-white text-indigo-700 text-4xl md:text-5xl font-bold">{score}</div>
</div>
)

export default ScoreboardHexagon

