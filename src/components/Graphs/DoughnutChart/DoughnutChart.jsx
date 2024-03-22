import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function DoughnutChart({data=[], name='', seriesName='',color}) {
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
        color
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{maxHeight: '15rem'}} opts={{theme: {textStyle: {fontFamily: 'Euclid'}}}} />
  )
}
