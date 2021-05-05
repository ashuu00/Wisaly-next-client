import React from 'react'
import {Flex, Box, Text} from '@chakra-ui/react'

export default function CategoryList() {
    return (
        <Box w="100%" h="4rem" bg="teal.100" borderRadius="10px" mt="3rem">
            <Flex width="90%" h="100%" ml="5%" justifyContent="space-between" alignItems="center"
                 color="gray.600">
                   {Array(7).fill('').map((_,idx)=>(
                        <Box p="0.5rem 0.75rem"  key={idx} borderRadius="30px"
                        _hover={{cursor:'pointer',color:'white', 
                        fontWeight:'bold',
                        bgGradient:"linear(to-br,#F687B3,#FFC2D8)", 
                        transform:'scale(1.05)'}}>
                           <Text fontSize="lg" fontWeight="medium">My Product</Text>
                       </Box>
                   )) }
                    
            </Flex>
        </Box>
    )
}