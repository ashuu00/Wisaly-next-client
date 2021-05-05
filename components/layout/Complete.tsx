import { Box } from '@chakra-ui/layout'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Complete({children}) {
    return (
       <Box>
           <Header/>
           {children}
           <Footer/>
      </Box>
    )
}
