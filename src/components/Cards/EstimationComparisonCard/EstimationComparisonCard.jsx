import React from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import PieChart from '../../Graphs/PieChart/PieChart'

const data = [
    {
     name: 'On Time',
     value: 10
    },
    {
      name: 'Over Estimate',
      value: 5,
    },
    {
      name: 'UnderEstimate',
      value: 10,
    }
  ]

export default function EstimationComparisonCard() {
  return (
    <CardPrimary heading='Estimation Comparison'>
        <PieChart data={data} seriesName='Estimation' />
    </CardPrimary>
  )
}
