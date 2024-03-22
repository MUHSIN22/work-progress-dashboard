import React, { useEffect, useState } from 'react'
import CardPrimary from '../CardPrimary/CardPrimary'
import DoughnutChart from '../../Graphs/DoughnutChart/DoughnutChart'
import { Box, HStack, Text } from '@chakra-ui/react'

export default function SprintCard({title, data}) {
    const [sanitizedData, setSanitizedData] = useState([]);

    useEffect(() => {
        if(data){
            setSanitizedData([
                {
                    name: 'Done',
                    value: data?.done
                },
                {
                    name: 'In Progress',
                    value: data?.inprogress
                },
                {
                    name: 'Backlog',
                    value: data?.backlog
                }
            ])
        }
    },[data])

    console.log(sanitizedData,data);
  return (
    <CardPrimary heading={title}>
        <Box pos='relative'>
          <DoughnutChart seriesName='Status' color={['#66FF66','#99CCFF',' #FFCC99']} name={data?.name} data={sanitizedData} />
          <HStack justifyContent='flex-end' pos='absolute' bottom={0} right={0}>
            <Box w='0.5rem' h='0.5rem' borderRadius='50%' bg='semantic.success'></Box>
            <Text>Current Sprint</Text>
          </HStack>
        </Box>
    </CardPrimary>
  )
}
