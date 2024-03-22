import React from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import CustomTable from '../../Table/CustomTable'
import BarchartWithNegativeValue from '../../Graphs/BarchartWithNegativeValue/BarchartWithNegativeValue'

const formatEstimationSummary = (data) => {
    let underest = []
    let overest = []
    let sprints = []
    if(data != undefined  && data?.data?.EstimationSummary){
        const estData = data?.data?.EstimationSummary
        console.log("est: ", data?.data?.EstimationSummary)

        // console.log("over est")
        estData?.overestimate.forEach(item => {
            sprints.push(item.sprintName)
            let value = item.deviation ? item.deviation.toFixed(2) : 0 
            overest.push(value)
        })

        // console.log("under est")
        estData?.underestimate.forEach(item => {
            // console.log(item)
            let value = item.deviation ?  0 - item.deviation.toFixed(2) : 0
            underest.push(value);
        })

        return {sprints, underest, overest};
    }else{
        return null
    }
    
}


export default function EstimationSummaryCard({data}) {

        const formattedData = formatEstimationSummary(data)
        console.log({formattedData})

        const options = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['Under Estimate', 'Over Estimate']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'value'
              }
            ],
            yAxis: [
              {
                type: 'category',
                axisTick: {
                  show: false
                },
                data: formattedData != null ? formattedData.sprints : []
              }
            ],
            series: [
                {
                  name: 'Over estimate',
                  type: 'bar',
                  stack: 'Total',
                  label: {
                    show: true
                  },
                  emphasis: {
                    focus: 'series'
                  },
                  data:  formattedData != null ? formattedData.overest :  []
                },
                {
                  name: 'Under estimate',
                  type: 'bar',
                  stack: 'Total',
                  label: {
                    show: true,
                    position: 'left'
                  },
                  emphasis: {
                    focus: 'series'
                  },
                  data: formattedData != null ? formattedData.underest : []
                }
              ]
        };

    return (
        <CardPrimary heading={"Estimation Summary"}>
            <BarchartWithNegativeValue options={options} /> 
        </CardPrimary>
    )
}
