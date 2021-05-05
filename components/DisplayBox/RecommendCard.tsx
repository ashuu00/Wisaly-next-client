import { Box,Button,Center,Text, Flex } from '@chakra-ui/react'

import React from 'react'
import Carousel from 'react-multi-carousel'
import CardDisplay from '../Cards/ProductCard'
import {RecommendResponsive} from '../../Lists/responsive'

export default function Recommend() {
    return (
        <Box p={[1,2,4]} my={{base:"1.5em",md:"2em"}}  w={{base:"100%",md:"95%"}} bg="teal.100" 
        borderRadius="3xl" boxShadow="lg" >
            < Flex flexDirection="row" p={2}>
                <Box w="30%">
                    <Text fontSize={["2xl","3xl","3xl","4xl"]} mt={{lg:"2em"}}mb={{base:"0.5em"}} color="gray.600">
                    "The quick brown fox jumps over the lazy dog"
                     </Text>
                    <Text fontSize={["lg","xl","2xl","3xl"]} mb={{base:"1em"}} color="gray.600">
                    "Have this lorwem ipsuim generator"
                    </Text>
                    <Center>
                        <Button fontSize={{base:"sm",md:"md",lg:"2xl"}} colorScheme="blue" _hover={{boxShadow:"2xl",transform:"scale(1.05)"}}>Shop Now</Button>
                    </Center>
                </Box>
                <Box  w="70%">
                   <Carousel responsive={RecommendResponsive}>
                       <CardDisplay/>
                       <CardDisplay/>
                       <CardDisplay/>
                       <CardDisplay/>
                       <CardDisplay/>
                       <CardDisplay/>
                       <CardDisplay/>
                   </Carousel>
                </Box>
            </Flex>
        </Box>
    )
}
