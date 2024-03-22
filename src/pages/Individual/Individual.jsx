import { Box, Grid, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import CardPrimary from '../../components/Cards/CardPrimary/CardPrimary'
import DoughnutChart from '../../components/Graphs/DoughnutChart/DoughnutChart'
import { getPercentageValue, splitSecondIntoHrMins } from '../../utils/commonUtils/commonUtils'
import SprintCard from '../../components/Cards/SprintCard/SprintCard'
import TimeCard from '../../components/Cards/TimeCard/TimeCard'
import SprintPredictionCard from '../../components/Cards/SprintPredictionCard/SprintPredictionCard'


export default function Individual() {

  return (
    <Grid templateColumns='repeat(3,1fr)' gap='1rem' w='100%'>
      <SprintCard title='SprintProgress'/>

     <SprintPredictionCard />

      <TimeCard />
      
    </Grid>
  )
}
