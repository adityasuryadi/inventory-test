"use client"

import React from "react"
const ScoreboardNeon = ({match:{teamHome, teamAway, scoreHome, scoreAway,sportType}}) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 text-white overflow-hidden rounded-lg shadow-lg">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400 animate-pulse">{sportType}</div>
          <div className="text-3xl font-bold text-blue-400">Q4 2:45</div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <TeamDisplayNeon
            name={teamHome}
            score={scoreHome}
            logo="/placeholder.svg?height=100&width=100"
            color="text-red-500"
          />
          <div className="text-4xl font-bold mx-4 text-yellow-400">VS</div>
          <TeamDisplayNeon
            name={teamAway}
            score={scoreHome}
            logo="/placeholder.svg?height=100&width=100"
            color="text-blue-500"
          />
        </div>
      </div>
    </div>
  )
}

const TeamDisplayNeon = ({
  name,
  score,
  logo,
  color,
}) => (
  <div className="flex flex-col items-center space-y-4">
    <img src={logo || "/placeholder.svg"} alt={`${name} logo`} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
    <div className={`text-3xl md:text-4xl font-bold ${color}`}>{name}</div>
    <div className={`text-6xl md:text-7xl font-bold ${color} neon-glow`}>{score}</div>
  </div>
)

export default ScoreboardNeon

