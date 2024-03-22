import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function LineChart({data}) {
const option = {
  series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 10
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 15,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        fontSize: 30,
        offsetCenter: [0, '70%']
      },
      data: [
        {
          value: data
        }
      ]
    }
  ]
};
  return (
    <ReactECharts option={option} opts={{theme: {textStyle: {fontFamily: 'Euclid'}}}} />
  )
}
