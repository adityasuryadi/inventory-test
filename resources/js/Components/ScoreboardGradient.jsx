import React from "react"


const ScoreboardGradient = ({match:{teamHome, teamAway, scoreHome, scoreAway,sportType}}) => {
  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg px-3 py-1 bg-white text-purple-700 rounded-full font-semibold">
            {sportType}
          </span>
          <span className="text-lg px-3 py-1 bg-white text-pink-700 rounded-full font-semibold animate-pulse">
            LIVE
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <TeamDisplay name={teamHome} score={scoreHome} logo="/placeholder.svg?height=80&width=80" />
          <div className="text-5xl font-bold mx-4">VS</div>
          <TeamDisplay name={teamAway} score={scoreAway} logo="/placeholder.svg?height=80&width=80" />
        </div>
      </div>
    </div>
  )
}

const TeamDisplay = ({ name, score, logo }) => (
  <div className="flex flex-col items-center space-y-2">
    <img
      src={logo || "/placeholder.svg"}
      alt={`${name} logo`}
      className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white rounded-full p-2"
    />
    <div className="text-2xl md:text-3xl font-semibold">{name}</div>
    <div className="text-5xl md:text-6xl font-bold">{score}</div>
  </div>
)

export default ScoreboardGradient

