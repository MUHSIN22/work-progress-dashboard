import { Box, Grid, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import CardPrimary from '../../components/Cards/CardPrimary/CardPrimary'
import DoughnutChart from '../../components/Graphs/DoughnutChart/DoughnutChart'
import { getPercentageValue, splitSecondIntoHrMins } from '../../utils/commonUtils/commonUtils'

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

export default function Individual() {

  return (
    <Grid templateColumns='repeat(3,1fr)' gap='1rem' w='100%'>
      <CardPrimary heading='Sprint Progress'>
        <Box pos='relative'>
          <DoughnutChart seriesName='Status' name='Sprint 12' data={[
            {
             name: 'In Progress',
             value: 10
            },
            {
              name: 'Backlog',
              value: 5,
            },
            {
              name: 'Done',
              value: 10,
            }
          ]} />
          <HStack justifyContent='flex-end' pos='absolute' bottom={0} right={0}>
            <Box w='0.5rem' h='0.5rem' borderRadius='50%' bg='semantic.success'></Box>
            <Text>Current Sprint</Text>
          </HStack>
        </Box>
      </CardPrimary>

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
    </Grid>
  )
}
