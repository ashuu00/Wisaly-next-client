import React from 'react'
import {Box, StackDivider,Center, Heading,
    Tag,
    Flex,
    TagLabel,
    TagCloseButton,
    } from '@chakra-ui/react'
import FilterAcc from './FilterAccordion'
export default function FilterSideBar({...props}) {
    return (
        <Box bg="teal.50" display="static" {...props} my={0} minH="100vh">
             <Center pt={5}>
                <Heading as="h3" fontSize="3xl" color="black">Konoha Admin</Heading>
            </Center>
            <Flex  flexWrap="wrap">
            {["md", "md", "md", "md", "md"].map((size,idx) => (
                <Tag
                size={size}
                key={idx}
                m={1}
                borderRadius="full"
                variant="solid"
                colorScheme="green"
                >
                <TagLabel>Green </TagLabel>
                <TagCloseButton />
                </Tag>
            ))}
            </Flex>
            
            <StackDivider bg="white" mt={3} h="1px" width="80%" ml="10%"/>

            <FilterAcc/>
        </Box>
    )
}
