import { Box } from '@chakra-ui/layout'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollTop from './ScrollTop'
export default function Complete({children}) {
    return (
       <Box>
           <Header/>
           <ScrollTop/>
           {children}

           <Footer/>
      </Box>
    )
}
