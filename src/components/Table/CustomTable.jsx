import { Grid, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'

export default function CustomTable({tableData, tableHeadings, userClick}) {

  const handleUserClick = (item) => {
    if(userClick!= undefined) userClick(item)
  }

  const formatColumnContent = (item, itemKey) => {
    let style = {paddingTop: '4px', paddingBottom: '4px', fontSize:'14px'  }
    if(itemKey == "name"){
      style.textTransform = 'capitalize'
    } 

    if(itemKey == "status"){
        if(item[itemKey] == "Done"){
          style.color = "green"
        }
    }

    return  <Td style={style}>{item[itemKey]}</Td> 
  }

  return (
    <Grid  style={{width: '100%', height: '14rem', overflowY: 'hidden'}}>
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
                    {
                      Object.keys(item).map(itemKey => {
                        return formatColumnContent(item, itemKey)
                      })
                    }
                  </Tr>
                ))
              ) : (
                    <Tr>
                      <Td >No data to show</Td>
                    </Tr>
                  )
            }
            </Tbody>
          </Table>
      </TableContainer>
    </Grid>
  )
}
