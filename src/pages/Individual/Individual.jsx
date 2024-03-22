import { CircularProgress, Grid, HStack, Heading, Select, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SprintCard from '../../components/Cards/SprintCard/SprintCard'
import TimeCard from '../../components/Cards/TimeCard/TimeCard'
import SprintPredictionCard from '../../components/Cards/SprintPredictionCard/SprintPredictionCard'
import EstimationComparisonCard from '../../components/Cards/EstimationComparisonCard/EstimationComparisonCard'
import PerformanceCard from '../../components/Cards/PerformanceCard/PerformanceCard'
import useFetch from '../../hooks/useFetch/useFetch'
import { useParams } from 'react-router-dom'
import { names, usersNames } from '../../utils/contants/contants'
import PerformanceTable from '../../components/Cards/PerfomanceTable/PerfomanceTable'
import EstimationSummaryCard from '../../components/Cards/EstimationSummaryCard/EstimationSummaryCard'


export default function Individual() {
  const {id} = useParams();
  const [url, setUrl] = useState(`userdashboard/get?projectKey=${usersNames[id]}&userid=${id}`)
  console.log({url})
  const [filter,setFilter] = useState(null)

  const {data,loading,error} = useFetch(url)
  console.log({data})
  
  useEffect(() => {
    if(filter){
      setUrl(`userdashboard/get?projectKey=${usersNames[id]}&userid=${id}&filter=${filter}`)
    }
  },[filter])

  useEffect(() => {
    setUrl(`userdashboard/get?projectKey=${usersNames[id]}&userid=${id}`)
  },[id])


  return (
    <VStack gap='1rem' w='100%'>
      {
        loading ? 
        <HStack>
          <CircularProgress isIndeterminate/>
          <Text>
            Please wait a while, We are loading the data
          </Text>
        </HStack>
        :
        <>
          <HStack w='100%' justifyContent='space-between'>
            <Heading>{names?.[id]}'s View</Heading>
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
            <SprintPredictionCard data={data?.data?.sprintPrediction}/>
            <EstimationComparisonCard data={data?.data?.EstimateTotal} />
            <TimeCard  data={data?.data?.Estimation}/>
          </Grid>

          <Grid templateColumns='repeat(2,1fr)' gap='1rem' w='100%'>
            <EstimationSummaryCard data={data}/>
            <PerformanceCard data={data?.data?.performanceMatrix}/>
          </Grid>

          <Grid gap='1rem' w='100%' h='20rem'>
            <PerformanceTable heading={'Perfomance Table'} data={data?.sprint} />
          </Grid>

        </>
      }
    </VStack>
  )
}