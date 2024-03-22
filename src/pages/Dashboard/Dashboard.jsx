import React from 'react'
import CardPrimary from '../../components/Cards/CardPrimary/CardPrimary'
import { Grid, Heading, VStack } from '@chakra-ui/react'
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
import useFetch from '../../hooks/useFetch/useFetch'

export default function Dashboard() {


  // const {data, loading, error} = useFetch("/trackApp/dashboardDetails/get");
  // console.log({data})
  // console.log({loading})
  // console.log({error})



  const data = {
      activeSprint : [
        {
              projectname: "ide",
              name: "sprint 141",
              inprogress : 2,
              Backlog: 5,
              Done: 12
        },
        {
              projectname: "controller",
              name: "sprint 141",
              inprogress : 2,
              Backlog: 5,
              Done: 12
          }
      ],

      leaderBoard: [
        {name: "ashwin",point: 55},
        {name: "ashwin",point: 55},
        {name: "ashwin",point: 55},
        {name: "ashwin",point: 55},
        {name: "ashwin",point: 55},
        {name: "ashwin",point: 55},
        {name: "ashwin",point: 55}
    ]
  }


  return (
    <VStack width={'100%'} >

      {/* Team sprint status */}
      <Grid templateColumns='repeat(2, 1fr)' gap='3rem' w='80%'>
        {
          (data != undefined && data.activeSprint) ? (
            data.activeSprint.map((item,index) => (
              <CardPrimary heading={item.projectname.toUpperCase()} key={index}>
                <div>
                  <p>this is test</p>
                  <p>this is test</p>
                </div>
              </CardPrimary>
            ))
          )  : (
            <div>No data to show</div>
          )
          
        }
      </Grid>

      
      <Grid templateColumns='repeat(2, 1fr)' gap='3rem' w='80%' mt={'2rem'}>

          {/* team perfomance */}
          {/* <CardPrimary heading={"Team perfomance"} >
              <div>
                <p>this is test</p>
                <p>this is test</p>
              </div>
            </CardPrimary> */}


            {/* leader board */}
            <CardPrimary heading={"Leader board"}>
                <Grid  style={{width: '100%', height: '100%', overflowY: 'hidden'}}>
                  <TableContainer style={{width: '100%', height: '100%', overflowY: 'scroll'}}>
                      <Table variant='striped'>
                        <Thead>
                          <Tr >
                            <Th>Name</Th>
                            <Th style={{textAlign: 'left'}} isNumeric>Points</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                        {
                          (data != undefined &&  data.leaderBoard) ? (
                            data.leaderBoard.map(item => (
                              <Tr >
                                <Td  style={{paddingTop: '4px', paddingBottom: '4px' , textTransform: 'capitalize'}}>{item.name}</Td>
                                <Td  style={{paddingTop: '4px', paddingBottom: '4px'  }}>{item.point}</Td>
                              </Tr>
                            ))
                          ) : (
                                <Tr>
                                  No data to show
                                </Tr>
                              )
                        }
                        </Tbody>
                      </Table>
                  </TableContainer>
                </Grid>
            </CardPrimary>
      </Grid>
      
    </VStack>
  )
}
