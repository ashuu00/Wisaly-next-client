import {
    Box,
    Input,
    SimpleGrid,
    Text,
    Tag,
    TagLabel,
    TagCloseButton,
    VStack,
    HStack,
    InputGroup,
    InputLeftElement,
    Icon,
    Flex
} from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchModal() {
    return (
        <Box w="95%">
            <InputGroup w="100%">
                <InputLeftElement
                    pointerEvents="none"
                    children={
                        <Box>
                            <Icon as={FaSearch} color="pink.300" w={6} h={6} />
                        </Box>
                    }
                />
                <Input
                    type="text"
                    borderRadius="20px"
                    placeholder="Search Here"
                    border="2px solid"
                    borderColor="pink.400"
                />
            </InputGroup>
            <Box my={3}>
                <Text fontSize="xl" fontWeight="bold">
                    Recent Searches
                </Text>
                <HStack spacing={3} my={1}>
                    {[...Array(8)].map((size, idx) => (
                        <Tag
                            size="lg"
                            key={idx}
                            borderRadius="full"
                            variant="solid"
                            colorScheme="gray">
                            <TagLabel>Green</TagLabel>
                            <TagCloseButton />
                        </Tag>
                    ))}
                </HStack>
            </Box>
            <VStack spacing={2} w="100%" mt={6}>
                <Box w="100%">
                    <Text fontSize="2xl" fontWeight="bold">
                        Trending on Wisaly
                    </Text>
                </Box>
                <HStack spacing={4} justifyContent="flex-start" w="100%">
                    {['Gardeing', 'Flowers', 'Potato', 'Wine Glass Designs'].map((val, idx) => (
                        <Box
                            key={val}
                            borderRadius="45px"
                            bgImage="url(https://picsum.photos/200/300)"
                            bgPosition="center"
                            bgSize="cover"
                            position="relative"
                            bgColor="red.300"
                            width="220px"
                            height="160px">
                            <Flex
                                align="center"
                                justify="center"
                                borderRadius="45px"
                                bgColor="rgba(0,0,0,0.5)"
                                w="100%"
                                h="100%">
                                <Text fontSize="xl" color="white" fontWeight="bold">
                                    {val}
                                </Text>
                            </Flex>
                        </Box>
                    ))}
                </HStack>
            </VStack>
            <VStack spacing={2} w="100%" mt={6}>
                <Box w="100%">
                    <Text fontSize="2xl" fontWeight="bold">
                        Categories you might be interested in
                    </Text>
                </Box>
                <HStack spacing={4} justifyContent="flex-start" w="100%">
                    {['Gardeing', 'Flowers', 'Potato', 'Wine Glass Designs'].map((val, idx) => (
                        <Box
                            key={val}
                            borderRadius="45px"
                            bgImage="url(https://picsum.photos/200/300)"
                            bgPosition="center"
                            bgSize="cover"
                            position="relative"
                            bgColor="red.300"
                            width="220px"
                            height="160px">
                            <Flex
                                align="center"
                                justify="center"
                                borderRadius="45px"
                                bgColor="rgba(0,0,0,0.5)"
                                w="100%"
                                h="100%">
                                <Text fontSize="xl" color="white" fontWeight="bold">
                                    {val}
                                </Text>
                            </Flex>
                        </Box>
                    ))}
                </HStack>
            </VStack>
        </Box>
    );
}
