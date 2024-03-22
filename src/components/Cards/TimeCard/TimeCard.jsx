import React, { useEffect, useState } from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import { HStack, Text, VStack } from '@chakra-ui/react'
import { getPercentageValue, splitSecondIntoHrMins } from '../../../utils/commonUtils/commonUtils'

export default function TimeCard({data}) {
    const [sanitizedData,setSanitizedData] = useState([]);

    useEffect(() => {
        if(data){
            setSanitizedData([
                {
                  title: "Estimated Time",
                  time: splitSecondIntoHrMins(data?.estimatedTime),
                  bg: 'black',
                  color: 'white'
                },
                {
                  title: "Logged Time", 
                  time: splitSecondIntoHrMins(data?.loggedTime),
                  percentage: getPercentageValue(data?.loggedTime, data?.estimatedTime).toFixed(2),
                  bg: 'yellow',
                  color: 'black'
                },
                {
                  title: "Remaining Time",
                  time: splitSecondIntoHrMins(data?.remainingTime),
                  percentage: getPercentageValue(data?.remainingTime, data?.estimatedTime).toFixed(2),
                  bg: '#fbfaf5'
                }
              ])
        }
    },[data])

    992.
  return (
    <VStack>
        {
          sanitizedData?.map(data => (
            <CardPrimary heading={data.title} bg={data.bg} color={data.color} noDivider>
              <HStack h='100%' justifyContent='space-between'>
                <Text fontSize='1.5rem'>{data.time?.hours} <span style={{fontSize: '0.9rem'}}>Hours</span> {data.time?.minutes} <span style={{fontSize: '0.9rem'}}>Minutes</span></Text>    
                {
                  data.percentage && 
                  <Text>{data.percentage}%</Text>
                }
              </HStack>
            </CardPrimary>
          ))
        }
    </VStack>
  )
}
