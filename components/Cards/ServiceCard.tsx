import {
    Box,
    Image,
    Flex,
    Badge,
    Text,
    Button,
    useBreakpointValue,
    Spacer,
    Icon
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Rating from 'react-rating';
import { FaHeart, FaStar } from 'react-icons/fa';

export default function Example() {
    const variant = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
    //const dispatch = useDispatch()

    return (
        <Link href="/shop/ashu/tosh">
            <Box
                p={{ base: '1', md: '3', lg: '5' }}
                mx={4}
                my={5}
                w="320px"
                _hover={{
                    transform: 'scale(1.02)',
                    transition: 'all 0.5s ease',
                    cursor: 'pointer',
                    boxShadow: '4px 4px 7px 1px rgba(0,0,0,0.25)'
                }}
                borderWidth="1px"
                bg="gray.50"
                borderRadius="md">
                <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                <Flex pt={['1', '2', '3']} pl={['1', '2', '3']} alignItems="baseline">
                    <Badge colorScheme="pink">30% Off</Badge>
                    <Text
                        ml={1}
                        textTransform="uppercase"
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontWeight="bold"
                        color="pink.800">
                        2 Days Left
                    </Text>
                </Flex>
                <Text mt={2} fontSize={['sm', 'lg', 'xl']} fontWeight="semibold" lineHeight="short">
                    Modern, High Variety Plants for your gardening needs!
                </Text>
                <Flex
                    mt={1}
                    align={{ base: 'center', lg: 'baseline' }}
                    justify="center"
                    direction={{ base: 'column', lg: 'row' }}>
                    <Text
                        mt={{ base: '1', md: '2', lg: '2.5' }}
                        fontSize={['sm', 'lg', 'xl', '2xl']}
                        color="green.400"
                        fontWeight="bold">
                        Rs 119.00
                    </Text>
                    <Text ml={1} fontSize={{ base: 'xs', md: 'sm' }} as="s" color="red.500">
                        Rs 300.00
                    </Text>
                </Flex>
                <Flex mt={1} align="flex-end" justify="center" w="100%">
                    <Rating
                        initialRating={4}
                        fullSymbol={<Icon as={FaStar} color="pink.400" w={5} h={5} mx={1} mb={1} />}
                        emptySymbol={
                            <Icon as={FaStar} color="gray.300" w={5} h={5} mx={1} mb={1} />
                        }
                    />
                    <Text fontSize="md" color="gray.400">
                        (232)
                    </Text>
                </Flex>
            </Box>
        </Link>
    );
}
