import React from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import LineChart from '../../Graphs/LineChart/LineChart'

export default function PerformanceCard() {
  return (
    <CardPrimary heading='Performance'>
        <LineChart />
    </CardPrimary>
  )
}
