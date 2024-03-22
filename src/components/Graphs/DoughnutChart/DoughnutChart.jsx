import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function DoughnutChart({data, name, seriesName}) {
const option = {
    title:{
        text: 'Sprint 12',
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
        name: 'Access From',
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
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      },
    ],
  };
  return (
    <ReactECharts option={option} opts={{theme: {textStyle: {fontFamily: 'Euclid'}}}} />
  )
}
