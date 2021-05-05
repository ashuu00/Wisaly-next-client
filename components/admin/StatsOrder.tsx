import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function OrderRightStats({title,number}) {
    return (
        <Box  mt={5} >
            <Text color="gray.500" fontSize="lg" mb={1} fontWeight="semi-bold">{title}</Text>
            <Heading as="h5" mt={1} color="black" size="lg" fontWeight="bold">{number}</Heading>
        </Box>
    )
}