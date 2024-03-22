import React from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import { HStack, Text, VStack } from '@chakra-ui/react'
import { splitSecondIntoHrMins } from '../../../utils/commonUtils/commonUtils'

const timeData = [
    {
      title: "Estimated Time",
      time: splitSecondIntoHrMins(22789),
      bg: 'black',
      color: 'white'
    },
    {
      title: "Logged Time",
      time: splitSecondIntoHrMins(15789),
      percentage: '30',
      bg: 'yellow',
      color: 'black'
    },
    {
      title: "Remaining Time",
      time: splitSecondIntoHrMins(5000),
      percentage: '30',
      bg: '#fbfaf5'
    }
  ]

export default function TimeCard() {
  return (
    <VStack>
        {
          timeData.map(data => (
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
