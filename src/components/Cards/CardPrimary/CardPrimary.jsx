import { Grid, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

export default function CardPrimary({heading,children}) {
  return (
    <VStack w='100%' h='15rem' bg='white' p='1rem' boxShadow='0px 0px 15px rgba(196, 200, 238, 0.5)' borderRadius='8px'>
        <Heading variant='cardHeading' w='100%'>{heading}</Heading>
        {/* <Grid w='90%' h='100%'>
            {children}
        </Grid> */}
        {children}

    </VStack>
  )
}
