import { Box, Flex, Heading, Divider, HStack, Img, Text, VStack, Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Sidebar from '../../components/Cards/Sidebar';
import FeaturedBox from '../../components/DisplayBox/BusinessFeature';

import Recommend from '../../components/DisplayBox/RecommendCard';
export default function index() {
    useEffect(() => {});
    return (
        <Box w="100%" p="2rem" display="flex" bg="gray.50" position="relative">
            <Box w="17.5%" h="100vh" bg="gray.100" pt="5%" position="sticky" top={0}>
                <Sidebar title="Hello" route="service" icon="hr" />
                <Sidebar title="Hello" route="service" icon="hr" />
                <Sidebar title="Hello" route="service" icon="hr" />
                <Sidebar title="Hello" route="service" icon="hr" />
            </Box>
            <Box w="32.5%" h="100vh" p="1rem">
                <Img
                    w="100%"
                    src="https://picsum.photos/id/237/800/1000"
                    borderRadius="20px"
                    alt="Company Title Image"
                />
                <Text fontSize="3xl" lineHeight={1} fontWeight="bold" my="1.5rem">
                    Name of the Company here
                </Text>
                <HStack spacing="0" justify="center" fontWeight="bold">
                    <Box
                        borderRadius="5px"
                        w="33%"
                        border="2px solid"
                        bg="gray.100"
                        borderColor="gray.500"
                        textAlign="center"
                        py="0.1rem">
                        <Text fontSize="md">Orders</Text>
                        <Text fontSize="md">1200</Text>
                    </Box>
                    <Box
                        borderRadius="5px"
                        w="33%"
                        bg="gray.100"
                        border="2px solid"
                        borderColor="gray.500"
                        textAlign="center"
                        py="0.1rem">
                        <Text fontSize="md">Orders</Text>
                        <Text fontSize="md">1200</Text>
                    </Box>
                    <Box
                        borderRadius="5px"
                        w="33%"
                        bg="gray.100"
                        border="2px solid"
                        borderColor="gray.500"
                        textAlign="center"
                        py="0.1rem">
                        <Text fontSize="md">Orders</Text>
                        <Text fontSize="md">1200</Text>
                    </Box>
                </HStack>
                <Flex justify="space-around" mt="2rem">
                    <Button colorScheme="teal" fontSize="xl" w="40%">
                        Book Now
                    </Button>
                    <Button colorScheme="pink" fontSize="xl" w="40%">
                        {' '}
                        Follow{' '}
                    </Button>
                </Flex>
                <Box w="100%" my="2rem" position="relative">
                    <Text fontSize="2xl" fontWeight="bold">
                        About
                    </Text>
                    <Divider orientation="horizontal" border="2px solid" borderColor="gray.800" />
                    <Text fontSize="md" mt="1rem" fontWeight="regular" color="gray.600">
                        Use this to style the whole container. For example add padding to allow the
                        "dots" or "arrows" to go to other places without being overflown.
                    </Text>
                </Box>
            </Box>
            <Box w="50%">
                <FeaturedBox />
                <FeaturedBox />
            </Box>
        </Box>
    );
}
