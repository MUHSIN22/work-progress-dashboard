import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Center, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo-main.png'
import { RxDashboard } from "react-icons/rx";
import { FaLayerGroup } from "react-icons/fa";
import { sidebarData } from './sidebar.data';
import useFetch from '../../hooks/useFetch/useFetch';


export default function Sidebar() {
  const {data,error,loading} = useFetch('projectTeam/get')

  const [sanitizedData, setSanitizedData] = useState({})

  useEffect(() => {
    console.log(data);
    if(data){
      const users = data.data.users.filter(item => item.active && item.accountType === 'atlassian' && !["Ziddik Kader","Sudhir Kunnath","Arun Alex"].includes(item.displayName));
      setSanitizedData({users})
    }
  },[data])

  console.log(sanitizedData);
  return (
    <VStack gap='3rem' bg='white' borderRight='1px solid' borderColor='fade.black'>
      <Center p='1rem'>
        <Image src={logo} w='100%' h='auto' />
      </Center>
      <VStack w='100%'>
        {
          sidebarData.map(item => (
            <>
              {
                item.type === 'button' ?
                  <HStack w='100%' p='1rem' cursor='pointer' transition='all 0.3s ease-in-out' _hover={{ bg: 'brand.50' }} py='0.5rem'>
                    <Icon as={item.icon} fontSize='1.5rem' />
                    <Text variant='strong' pointerEvents='none'>{item.title}</Text>
                  </HStack>
                  : item.type === 'accordion' ?
                    <Accordion allowToggle w='100%'>
                      <AccordionItem border='none' w='100%' pl={0}>
                        
                        <AccordionButton pl={0} py={0} _hover={{ bg: 'brand.50' }}>
                          <HStack w='100%' p='1rem' cursor='pointer' transition='all 0.3s ease-in-out' _hover={{ bg: 'brand.50' }} py='0.5rem'>
                            <Icon as={item.icon} fontSize='1.5rem' />
                            <Text variant='strong' pointerEvents='none'>{item.title}</Text>
                          </HStack>

                          <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel>
                          <VStack w='100%'>
                            {
                              sanitizedData?.[item.childKey]?.map((childItem) => (
                                <HStack w='100%' p='1rem' cursor='pointer' transition='all 0.3s ease-in-out' _hover={{ bg: 'brand.50' }} py='0.5rem'>
                                  {item.childIcon === 'img' ? 
                                    <Avatar src={childItem?.avatarUrl?.['16x16']} size='xs' name={childItem.displayName}/>
                                  :<RxDashboard fontSize='1.3rem' />}
                                  <Text variant='strong' fontSize='0.9rem' pointerEvents='none'>Dashboard</Text>
                                </HStack>
                              ))
                            }
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    : null
              }
            </>
          ))
        }



      </VStack>
    </VStack>
  )
}