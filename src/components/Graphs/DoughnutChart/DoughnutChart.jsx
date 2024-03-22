import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function DoughnutChart({data=[], name='', seriesName=''}) {
const option = {
    title:{
        text: name,
        left: 'center',
        top: 'center'
    },
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
        radius: ['40%', '70%'],
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
        color: ['red','blue','green']
      },
    ],
  };
  return (
    <ReactECharts option={option} opts={{theme: {textStyle: {fontFamily: 'Euclid'}}}} />
  )
}
