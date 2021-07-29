import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';
import { Flex, Box, Heading, Text } from '@chakra-ui/layout';
import { Circle, HStack, Spacer, Tag, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Jump from 'react-reveal/Jump';

export default function BlogCard({ ...props }) {
    return (
        <Link href="/blogs/ashu">
            <Flex
                flexDir="column-reverse"
                _hover={{
                    boxShadow: '2xl',
                    cursor: 'pointer',
                    transform: 'scale(1.02)',
                    transition: 'all 0.5s ease'
                }}
                mb="3rem"
                mx={4}
                borderRadius="20px">
                <Flex
                    w="280px"
                    h="200px"
                    bg="#F7FAFC"
                    p={4}
                    flexDir="column"
                    justify="center"
                    alignItems="flex-start"
                    borderRadius="0  0 20px 20px">
                    <Tag colorScheme="green" size="sm" mb={1}>
                        Technology
                    </Tag>
                    <Heading as="h3" size="md">
                        This is the blog Title
                    </Heading>
                    <Text
                        fontSize="md"
                        mt="1rem"
                        fontWeight="medium"
                        color="#666666"
                        lineHeight={1.4}>
                        {' '}
                        this is the subtitle fo blog, as it would help
                    </Text>

                    <Spacer />
                    <Jump>
                        {/* <Button
                            bgGradient="linear(to-b,#EF8721,#F687B3)"
                            color="white"
                            mt="1rem"
                            _hover={{ transform: 'scale(1.05)', content: '"hi"' }}>
                            Learn More{' '}
                        </Button> */}
                        <HStack spacing={4}>
                            <Circle size="44px" bg="green.200"></Circle>
                            <VStack spacing={0} align="flex-start">
                                <Text fontSize="md" fontWeight="bold">
                                    Ashutosh
                                </Text>
                                <Text fontSize="sm" fontWeight="bold">
                                    3w
                                </Text>
                            </VStack>
                        </HStack>
                    </Jump>
                </Flex>
                {/** Image block */}
                <Box
                    w="280px"
                    h="200px"
                    bgGradient="linear(to-b,#FBB6CE, #E6FFFA)"
                    borderRadius="20px 20px 0 0"></Box>
            </Flex>
        </Link>
    );
}
