import { Circle, Icon, VStack, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function ExploreCategory() {
    return (
        <VStack
            spacing={4}
            p={4}
            w="244px"
            justify="space-between"
            h="328px"
            bg="red.200"
            borderRadius="15px"
            m={4}>
            <Text fontSize="2xl" fontWeight="bold" color="white">
                Trimming
            </Text>
            <Circle
                size="180px"
                bg="red.800"
                bgGradient="linear(to-r, teal.200, teal.400)"></Circle>
            <Flex w="100%" justify="flex-end">
                <Icon as={FaArrowRight} w={10} h={10} color="white" />
            </Flex>
        </VStack>
    );
}
