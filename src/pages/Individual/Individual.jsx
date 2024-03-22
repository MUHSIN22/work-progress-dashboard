import { Grid } from '@chakra-ui/react'
import React from 'react'
import CardPrimary from '../../components/Cards/CardPrimary/CardPrimary'
import DoughnutChart from '../../components/Graphs/DoughnutChart/DoughnutChart'

export default function Individual() {
  return (
    <Grid templateColumns='repeat(3,1fr)' gap='1rem' w='100%'>
      <CardPrimary heading='Sprint Progress'>
        <DoughnutChart />
      </CardPrimary>
    </Grid>
  )
}
