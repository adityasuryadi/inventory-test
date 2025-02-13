import { usePage } from "@inertiajs/react"
import React,{useState} from "react";
import OperatorInterface from "@/Components/OperatorInterface"
import ScoreBoardOperator from "@/Components/ScoreBoardOperator"

export default function Index() {
  const { match } = usePage().props
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sport Scoreboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div key={match.id} className="border p-4 rounded">
            <ScoreBoardOperator match={match} />
            <OperatorInterface match={match} />
          </div>
      </div>
    </div>
  )
}

