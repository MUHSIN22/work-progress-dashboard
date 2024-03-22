import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function BarchartWithNegativeValue({options}) {

   

    return (
    <ReactECharts option={options} opts={{theme: {textStyle: {fontFamily: 'Euclid'}}}} />
  )
}
