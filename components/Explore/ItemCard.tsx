import React from 'react'
import {Box, Circle, Flex, SimpleGrid, Text} from '@chakra-ui/react'
import Link from 'next/link'

export default function ItemCard() {
    return ( 
        <Link href='shop/ashu/anu'>
        <Box w="45%" mb="1rem" _hover={{cursor:'pointer'}}>
            <Box w="100%" pt="56.25%" borderRadius="10px"  
            backgroundPosition='center'
            backgroundSize='cover'
            backgroundImage="url(https://picsum.photos/id/235/200/100)">
            </Box>
            <Text fontSize="lg" fontWeight="bold">Name of Item</Text>
            <Flex w="100%" alignItems="flex-start" >
                <Circle size="25px" bg="gray.800" mr="5px" />
                <Text fontSize="sm" pt="2px" fontWeight="medium" truncate>Name of Company</Text>
            </Flex>
        </Box>
        </Link>
    )
}
