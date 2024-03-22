import React, { useEffect, useState } from 'react'
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

export default function EstimationComparisonCard({data}) {
    const [sanitizedData, setSanitizedData] = useState([])

    useEffect(() => {
        if(data){
            setSanitizedData([
                {
                    name: 'On Time',
                    value: data?.ontime
                },
                {
                    name: 'Over Estimate',
                    value: data?.overestimate
                },
                {
                    name: 'Under Estimate',
                    value: data?.underestimate
                },
                {
                    name: 'No Estimation',
                    value: data?.withoutEstimateSrtories
                }
            ])
        }
    },[data])

    console.log(sanitizedData);
  return (
    <CardPrimary heading='Estimation Comparison'>
        <PieChart data={sanitizedData} color={["#66FF66", "#FF6347", "#99CCFF", "#808080"]} seriesName='Estimation' />
    </CardPrimary>
  )
}
