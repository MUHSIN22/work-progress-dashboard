import React, { useEffect, useState } from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import DoughnutChart from '../../Graphs/DoughnutChart/DoughnutChart'
import { Box, HStack, Text } from '@chakra-ui/react'

export default function SprintCard({title, data}) {
    const [sanitizedData, setSanitizedData] = useState([]);
    
    useEffect(() => {

    },[data])
  return (
    <CardPrimary heading={title}>
        <Box pos='relative'>
          <DoughnutChart seriesName='Status' name='Sprint 12' data={[
            {
             name: 'In Progress',
             value: 10
            },
            {
              name: 'Backlog',
              value: 5,
            },
            {
              name: 'Done',
              value: 10,
            }
          ]} />
          <HStack justifyContent='flex-end' pos='absolute' bottom={0} right={0}>
            <Box w='0.5rem' h='0.5rem' borderRadius='50%' bg='semantic.success'></Box>
            <Text>Current Sprint</Text>
          </HStack>
        </Box>
    </CardPrimary>
  )
}
