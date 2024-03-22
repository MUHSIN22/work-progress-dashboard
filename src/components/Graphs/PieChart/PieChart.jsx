import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function PieChart({data=[], seriesName='', color}) {
const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false
    },
    series: [
      {
        name: seriesName,
        type: 'pie',
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 15,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data,
        color
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{maxHeight: '15rem'}} opts={{theme: {textStyle: {fontFamily: 'Euclid'}}}} />
  )
}
