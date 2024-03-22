import { CircularProgress, Grid, HStack, Select, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SprintCard from '../../components/Cards/SprintCard/SprintCard'
import TimeCard from '../../components/Cards/TimeCard/TimeCard'
import SprintPredictionCard from '../../components/Cards/SprintPredictionCard/SprintPredictionCard'
import EstimationComparisonCard from '../../components/Cards/EstimationComparisonCard/EstimationComparisonCard'
import PerformanceCard from '../../components/Cards/PerformanceCard/PerformanceCard'
import useFetch from '../../hooks/useFetch/useFetch'
import { useParams } from 'react-router-dom'
import { usersNames } from '../../utils/contants/contants'
import PerformanceTable from '../../components/Cards/PerfomanceTable/PerfomanceTable'
import EstimationSummaryCard from '../../components/Cards/EstimationSummaryCard/EstimationSummaryCard'


export default function Individual() {
  const {id} = useParams();
  const [url, setUrl] = useState(`userdashboard/get?projectKey=${usersNames[id]}&userid=${id}`)
  const [filter,setFilter] = useState(null)

  const {data,loading,error} = useFetch(url)

  useEffect(() => {
    if(filter){
      setUrl(`userdashboard/get?projectKey=${usersNames[id]}&userid=${id}&filter=${filter}`)
    }
  },[filter])

  return (
    <VStack gap='1rem' w='100%'>
      {
        loading ? 
        <HStack>
          <CircularProgress isIndeterminate/>
          <Text />
        </HStack>
        :
        <>
          <HStack w='100%' justifyContent='flex-end'>
          <Select bg='white' w='max-content' onChange={e => setFilter(e.target.value)}>
              <option value={null}>Current Sprint</option>
              <option value={2}>Last 2 Sprints</option>
              <option value={3}>Last 3 Sprints</option>
              <option value={5}>Last 5 Sprints</option>
              <option value={10}>Last 10 Sprints</option>
            </Select>
          </HStack>
          <Grid templateColumns='repeat(4,1fr)' gap='1rem' w='100%'>
            <SprintCard title='Sprint Progress' data={data?.data?.sprint} />
            <SprintPredictionCard />
            <EstimationComparisonCard data={data?.data?.EstimateTotal} />
            <TimeCard  data={data?.data?.Estimation}/>
          </Grid>

          <Grid templateColumns='repeat(2,1fr)' gap='1rem' w='100%'>
            <EstimationSummaryCard/>
            <PerformanceCard />
          </Grid>

          <Grid gap='1rem' w='100%' h='20rem'>
            <PerformanceTable heading={'Perfomance Table'} data={data?.sprint} />
          </Grid>

        </>
      }
    </VStack>
  )
}
