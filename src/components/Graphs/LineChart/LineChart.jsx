import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function LineChart({data=[], seriesName=''}) {
const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      show: true
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        symbol: '',
        symbolSize: '8',
        itemStyle: {
          color: 'red'
        },
        lineStyle: {
          color: '#5470C6',
          width: 3
        },
      }
    ]
  };
  return (
    <ReactECharts option={option} opts={{theme: {textStyle: {fontFamily: 'Euclid'}}}} />
  )
}
