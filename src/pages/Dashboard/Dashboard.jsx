import React from 'react'
import CardPrimary from '../../components/Cards/CardPrimary/CardPrimary'
import { Grid, Heading, VStack } from '@chakra-ui/react'
import useFetch from '../../hooks/useFetch/useFetch'

export default function Dashboard() {

  const {data, loading, error} = useFetch("/trackApp/dashboardDetails/get");
  console.log({data})
  console.log({loading})
  console.log({error})

  const testData = [
    {
      title: "team 1",
      
    }, 
    {
      title: "team 2"
    }
  ]

  const teamPerfomance = {}
  const leaderBoard = {}

  return (
    <VStack width={'100%'} >

      {/* Team sprint status */}
      <Grid templateColumns='repeat(2, 1fr)' gap='3rem' w='80%'>
        {
          testData.map((item,index) => (
            <CardPrimary heading={item.title} key={index}>
              <div>
                <p>this is test</p>
                <p>this is test</p>
              </div>
            </CardPrimary>
          ))
        }
      </Grid>

      
      <Grid templateColumns='repeat(2, 1fr)' gap='3rem' w='80%' mt={'2rem'}>

          {/* team perfomance */}
          <CardPrimary heading={"Team perfomance"} >
              <div>
                <p>this is test</p>
                <p>this is test</p>
              </div>
            </CardPrimary>


            {/* leader board */}
            <CardPrimary heading={"Leader board"} >
              <div>
                <p>this is test</p>
                <p>this is test</p>
              </div>
            </CardPrimary>
      </Grid>
      
    </VStack>
  )
}
