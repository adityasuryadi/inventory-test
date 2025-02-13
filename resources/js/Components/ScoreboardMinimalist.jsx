import React from "react"
const ScoreboardMinimalist = ({match:{teamHome, teamAway, scoreHome, scoreAway,sportType}}) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center text-gray-600">
          <div className="text-sm font-semibold">{sportType}</div>
          <div className="text-sm font-semibold">Q4 2:45</div>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between items-center">
          <TeamDisplayMinimal name={teamHome} score={scoreHome} />
          <div className="text-2xl font-light text-gray-400 mx-4">VS</div>
          <TeamDisplayMinimal name={teamAway} score={scoreAway} />
        </div>
        <hr className="border-gray-200" />
        <div className="text-center text-sm text-gray-500">LIVE • ABC</div>
      </div>
    </div>
  )
}

const TeamDisplayMinimal= ({ name, score }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="text-2xl md:text-3xl font-bold">{name}</div>
    <div className="text-5xl md:text-6xl font-light">{score}</div>
  </div>
)

export default ScoreboardMinimalist