import React from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import CustomTable from '../../Table/CustomTable'
import BarchartWithNegativeValue from '../../Graphs/BarchartWithNegativeValue/BarchartWithNegativeValue'

const data = []


export default function EstimationSummaryCard() {
  return (
    <CardPrimary heading={"Estimation Summary"}>
        <BarchartWithNegativeValue data={data} /> 
    </CardPrimary>
  )
}
