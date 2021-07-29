import { Box, Button, Center, Text, Flex } from '@chakra-ui/react';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardDisplay from '../Cards/ProductCard';
import { RecommendResponsive } from '../../Lists/responsive';
import Link from 'next/link';

export default function Recommend() {
    return (
        <Box
            p={[1, 2, 4]}
            my={{ base: '1.5em', md: '2em' }}
            w={{ base: '100%', md: '100%' }}
            bgGradient="linear(to-r, pink.50, purple.50)"
            borderRadius="3xl"
            boxShadow="lg">
            <Flex flexDirection="row" p={2}>
                <Box w="25%" my={5}>
                    <Text
                        fontSize={['2xl', '3xl', '3xl', '4xl']}
                        mb={{ base: '0.5em' }}
                        color="pink.500">
                        "The quick brown fox jumps over the lazy dog"
                    </Text>
                    <Text
                        fontSize={['lg', 'xl', '2xl', '3xl']}
                        mb={{ base: '1em' }}
                        color="pink.500">
                        "Have this lorwem ipsuim generator"
                    </Text>
                    <Center>
                        <Link href="/shop/ashu">
                            <Button
                                fontSize={{ base: 'sm', md: 'md', lg: '2xl' }}
                                colorScheme="blue"
                                _hover={{ boxShadow: '2xl', transform: 'scale(1.05)' }}>
                                Shop Now
                            </Button>
                        </Link>
                    </Center>
                </Box>
                <Box w="75%">
                    <Carousel ssr responsive={RecommendResponsive}>
                        <CardDisplay />
                        <CardDisplay />
                        <CardDisplay />
                        <CardDisplay />
                        <CardDisplay />
                        <CardDisplay />
                        <CardDisplay />
                    </Carousel>
                </Box>
            </Flex>
        </Box>
    );
}
