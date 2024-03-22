import { Center, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/logo-main.png'


export default function Sidebar() {
  return (
    <VStack gap='3rem' bg='white' borderRight='1px solid' borderColor='fade.black'>
      <Center p='1rem'>
        <Image src={logo} w='100%' h='auto' />
      </Center>
    </VStack>
  )
}
