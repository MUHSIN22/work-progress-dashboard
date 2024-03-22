import React, { useEffect, useState } from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import LineChart from '../../Graphs/LineChart/LineChart'
import { getPercentageValue } from '../../../utils/commonUtils/commonUtils'

export default function PerformanceCard({data}) {
  const [value,setValue] = useState(0)

  useEffect(() => {
    if(data){
      setValue(getPercentageValue(data?.calculated, data?.expected).toFixed(2))
    }
  },[data])
  return (
    <CardPrimary heading='Performance'>
        <LineChart data={value} />
    </CardPrimary>
  )
}
