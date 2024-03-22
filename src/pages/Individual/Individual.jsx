import { Grid } from '@chakra-ui/react'
import React from 'react'
import CardPrimary from '../../components/Cards/CardPrimary/CardPrimary'

export default function Individual() {
  return (
    <Grid templateColumns='repeat(4,1fr)' gap='1rem' w='100%'>
      {
        [...Array(10)].map((_,index) => (
          <CardPrimary heading='This is card'>
            <div>
              <p>this is p</p>
              <a href="#">Link</a>
            </div>
          </CardPrimary>
        ))
      }
    </Grid>
  )
}
