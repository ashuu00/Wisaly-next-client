import React from 'react'
import {Box, Heading, Spacer,Button,Flex, Divider} from '@chakra-ui/react'
import Card from '../Cards/ProductCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
//import { Divider } from '@material-ui/core'
import {RecommendResponsive} from '../../Lists/responsive'
import BlogBussiness from '../Cards/BlogBussiness'
export default function FeaturedBox({title}) {
    return (
        <Box px={[1,2,3]} pt={3} pb={[3,4,5]} 
        my={{base:"1.5em",md:"2em"}}  
        borderRadius="20px"
        boxShadow="lg"
        w={{base:"100%",md:"98%"}} bg="gray.100" >
            <Flex align="center" flexDir="row">
                <Heading fontSize={{base:"xl",md:"2xl",lg:"3xl"}} m={4}>{title}</Heading>
                <Spacer/>
                <Box as={Button} color="whitesmoke" bg="cyan.400" boxShadow="md" _hover={{bg:"cyan.600", color:"white"}}>See All Items</Box>
            </Flex>
            <Divider/> 
            <Carousel responsive={RecommendResponsive} showDots ssr={true}>
                {Array(4).fill('').map((_,idx)=>(<BlogBussiness key={idx}/>))}
            </Carousel>
        </Box>
    )
}

FeaturedBox.defaultProps={
    title:'This is our Product'
}