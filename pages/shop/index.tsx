import { Box } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import FeaturedBox from '../../components/DisplayBox/FeaturedBox';
import Recommend from '../../components/DisplayBox/RecommendCard';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header'

export default function index() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1 },
          items: 1
        }
    }

    const images=[
        'https://picsum.photos/id/237/1600/900',
        'https://picsum.photos/id/239/1600/900',
        'https://picsum.photos/id/242/1600/900',
        'https://picsum.photos/id/211/1600/900',
        'https://picsum.photos/id/203/1600/900',

    ]
    return (
       <Box>
               <Carousel responsive={responsive} infinite showDots ssr>
                    {Array(5).fill(' ').map((_, idx)=>(
                        <Box w="100%" pt="35%" backgroundImage={`url(${images[idx]})`}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat">
                        </Box>
                    ))}
               </Carousel>
               <Flex p="40px" flexDir="column" align="center">
               <FeaturedBox/>
               <Recommend/>
               </Flex>
            
       </Box>
    )
}
