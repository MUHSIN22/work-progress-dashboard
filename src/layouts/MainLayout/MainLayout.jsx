import { Center, Grid } from '@chakra-ui/react'
import React from 'react'
import { customTheme } from '../../theme/theme'
import Sidebar from '../../components/Navigations/Sidebar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <Grid bg='fade.white' minH='100vh' templateColumns='15rem auto'>
      <Sidebar />
      <Center alignItems='flex-start' p='5rem'>
        <Outlet />
      </Center>
    </Grid>
  )
}
