import { Grid, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'

export default function CustomTable({tableData, tableHeadings, userClick}) {

  const handleUserClick = (item) => {
    if(userClick!= undefined) userClick(item)
  }

  return (
    <Grid  style={{width: '100%', height: '100%', overflowY: 'hidden'}}>
      <TableContainer style={{width: '100%', height: '100%', overflowY: 'scroll'}}>
          <Table variant='striped'>
            <Thead> 
              <Tr >
                {tableHeadings.map(item => (
                  <Th style={{textAlign: 'left'}}>{item}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
            {
              (tableData != undefined) ? (
                tableData.map(item => (
                  <Tr >
                    <Td onClick={() => handleUserClick(item)}  style={{cursor:'pointer', paddingTop: '4px', paddingBottom: '4px' , textTransform: 'capitalize'}}>{item.name}</Td>
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
  )
}
