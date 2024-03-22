import React, { useEffect, useState } from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import { HStack, Progress, Text, VStack } from '@chakra-ui/react'
import { getPercentageValue } from '../../../utils/commonUtils/commonUtils'

const sprintPrediction = {
    total: 25,
    data: [
      {
        title: 'Completion',
        count: 15,
        color: 'green'
      },
      {
        title: 'In Progress',
        count: 7,
        color: 'orange'
      },
      {
        title: 'Backlog',
        count: 3,
        color: 'red'
      }
    ]
  }
  

export default function SprintPredictionCard(data) {
  const [sanitizedData,setSanitizedData] = useState({})

  useEffect(() => {
    if(data){
      setSanitizedData({
        total: data?.totalTasks,
        data: [
          {
            title: 'Completion',
            count: data?.done,
            color: 'green'
          },
          {
            title: 'In Progress',
            count: data?.others,
            color: 'orange'
          },
          {
            title: 'Backlog',
            count: data?.backlog,
            color: 'red'
          }
        ]
      }
      )
    }
  },[data])
  return (
    <CardPrimary heading='Sprint Prediction'>
        <VStack h='100%' justifyContent='space-around'>
          {
            sprintPrediction.data?.map(item => (
              <VStack w='100%' textAlign='left' alignItems='flex-start'>
                <Text variant='strong'>{item.title}</Text>
                <HStack w='100%'>
                  <Progress value={getPercentageValue(item.count, sprintPrediction.total)} colorScheme={item.color} w='100%' borderRadius='50px' />
                  <Text>{item.count}/{sprintPrediction.total}</Text>
                </HStack>
              </VStack>
            ))
          }
        </VStack>
    </CardPrimary>
  )
}
