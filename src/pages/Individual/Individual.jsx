import { Grid, VStack } from '@chakra-ui/react'
import React from 'react'
import SprintCard from '../../components/Cards/SprintCard/SprintCard'
import TimeCard from '../../components/Cards/TimeCard/TimeCard'
import SprintPredictionCard from '../../components/Cards/SprintPredictionCard/SprintPredictionCard'
import EstimationComparisonCard from '../../components/Cards/EstimationComparisonCard/EstimationComparisonCard'
import PerformanceCard from '../../components/Cards/PerformanceCard/PerformanceCard'
import useFetch from '../../hooks/useFetch/useFetch'
import PerformanceTable from '../../components/Cards/PerfomanceTable/PerfomanceTable'


export default function Individual() {
  const {data,loading,error} = useFetch('userdashboard/get')

  return (
    <VStack gap='1rem' w='100%'>
      <Grid templateColumns='repeat(4,1fr)' gap='1rem' w='100%'>
        <SprintCard title='Sprint Progress' data={data?.sprint} />
        <SprintPredictionCard />
        <EstimationComparisonCard />
        <TimeCard />
      </Grid>

      <Grid templateColumns='repeat(2,1fr)' gap='1rem' w='100%'>
        <PerformanceCard />
      </Grid>

      <Grid gap='1rem' w='100%' h='20rem'>
        <PerformanceTable heading={'Perfomance Table'} data={data?.sprint} />
      </Grid>
    </VStack>
  )
}
