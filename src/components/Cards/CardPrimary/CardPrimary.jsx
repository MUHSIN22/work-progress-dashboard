import { Box, Divider, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

export default function CardPrimary({heading,children,noDivider, bg='white',color="black"}) {
  return (
    <VStack w='100%' h='100%' bg={bg} color={color} p='1rem' boxShadow='0px 0px 15px rgba(196, 200, 238, 0.5)' borderRadius='8px'>
        <Heading variant='cardHeading' w='100%'>{heading}</Heading>
        {
          !noDivider &&
          <Divider orientation='horizontal' />
        }
        <Box w='100%' h='100%'>
            {children}
        </Box>
    </VStack>
  )
}
