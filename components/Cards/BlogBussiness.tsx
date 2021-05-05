import React from 'react'
import {Text, Box, Flex, Image, useBreakpointValue} from "@chakra-ui/react"

export default function BlogCards() {
    return (
        <Box w="200px" borderWidth="1px" bg="gray.100" my={5} mx={[2,2,3,3]} >
            <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
            <Box px={5} mt={2}>
                    <Text
                    
                    textTransform="uppercase"
                    fontSize={{base:"sm",md:"md",lg:"lg"}}
                    className="blog-dates"
                    fontWeight="bold"
                    color="gray.400"
                    >
                    12 january, 2021
                    </Text>
                <Text mt={0.5} fontSize={{base:"2xl",md:"3xl"}} fontWeight="bold" lineHeight="short">
                    Title for the Image
                </Text>
                
            </Box>
        </Box>
    )
}
