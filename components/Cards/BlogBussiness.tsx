import React from 'react'
import {Text, Box, Flex, Image, useBreakpointValue} from "@chakra-ui/react"
import Link from 'next/link'

export default function BlogCards() {
    return (
        <Link href='/blogs/ashu'>
        <Box w="300px" borderWidth="1px" bg="gray.100" my={5} mx={[2,2,3,3]}
        _hover={{transform:'scale(1.02)',
        transition:'all 0.5s ease', cursor:'pointer', 
        boxShadow:'4px 4px 5px 1px rgba(0,0,0,0.25)'}} >
            <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
            <Box px={5} mt={2}>
                    <Text
                    
                    textTransform="uppercase"
                    fontSize={{base:"sm",lg:"md"}}
                    className="blog-dates"
                    fontWeight="medium"
                    color="gray.400"
                    >
                    12 january, 2021
                    </Text>
                <Text mt={0.5} fontSize={{base:"xl",md:"2xl"}} fontWeight="bold" lineHeight="short">
                    Title for the blog displayed here
                </Text>
                
            </Box>
        </Box>
        </Link>
    )
}
