import {
    Flex,
    Divider,
    Img,
    Text,
    VStack,
    Button,
    Heading,
    Box,
    useMediaQuery,
    Icon,
    HStack
} from '@chakra-ui/react';
import Myaccordion from '@Component/Blocks/Myaccordion';
import RatingStats from '@Component/Blocks/RatingStats';
import React, { useEffect } from 'react';
import { FaBookmark, FaHeart, FaTelegramPlane } from 'react-icons/fa';
import Rating from 'react-rating';
import Sidebar from '../../components/Cards/Sidebar';
import FeaturedBox from '../../components/DisplayBox/BusinessFeature';

import Recommend from '../../components/DisplayBox/RecommendCard';
export default function index() {
    useEffect(() => {});
    const [isTablet] = useMediaQuery(['(max-width:768px)']);
    return (
        <React.Fragment>
            <Box w="100%" position="relative">
                <Img
                    w="100%"
                    maxH="320px"
                    objectFit="cover"
                    src="https://picsum.photos/id/237/800/600"
                    alt="Company Title Image"
                />
                <Box position="absolute" left={8} color="white" bottom={4}>
                    <Heading as="h1" size="2xl" lineHeight={1} fontWeight="bold" my="1.5rem">
                        Name of the Company here
                    </Heading>
                    <HStack>
                        <Rating
                            onChange={(e) => console.log('Entered')}
                            initialRating={4}
                            fullSymbol={<Icon as={FaHeart} color="pink.400" w={6} h={6} mx={2} />}
                            emptySymbol={<Icon as={FaHeart} color="gray.300" w={6} h={6} mx={2} />}
                        />
                        <Text fontSize="4xl" fontWeight="bold">
                            4.7
                        </Text>
                        <Text fontSize="md" fontWeight="medium">
                            1233 reviews
                        </Text>
                    </HStack>
                </Box>
            </Box>
            <Box w="100%" p="2rem" display="flex" bg="gray.100" position="relative">
                <Box w="17.5%" h="100vh" bg="gray.100" pt="5%" position="sticky" top={0}>
                    <Sidebar title="About" route="service" icon="hr" />
                    <Sidebar title="Gallery" route="service" icon="hr" />
                    <Sidebar title="Posts" route="service" icon="hr" />
                    <Sidebar title="Blogs" route="service" icon="hr" />
                    <Sidebar title="Products" route="service" icon="hr" />
                    <Sidebar title="Services" route="service" icon="hr" />
                    <Sidebar title="Contact" route="service" icon="hr" />
                </Box>
                <Box w="80%" px={8}>
                    <HStack spacing={8} justify="center" fontWeight="bold">
                        <Button
                            borderRadius="5px"
                            w="25%"
                            colorScheme="blue"
                            textAlign="center"
                            py={6}>
                            <Icon as={FaBookmark} w={6} h={6} />
                            <Text fontSize="md">Subscribe</Text>
                        </Button>
                        <Button
                            borderRadius="5px"
                            w="25%"
                            colorScheme="pink"
                            textAlign="center"
                            py={6}>
                            <Icon as={FaTelegramPlane} w={6} h={6} />
                            <Text fontSize="md">Message Bussiness</Text>
                        </Button>
                        <Button
                            borderRadius="5px"
                            w="25%"
                            colorScheme="red"
                            textAlign="center"
                            py={6}>
                            <Icon as={FaTelegramPlane} w={6} h={6} />
                            <Text fontSize="md">Report </Text>
                        </Button>
                    </HStack>
                    <Box w="100%" my="2rem" position="relative">
                        <Text fontSize="2xl" fontWeight="bold">
                            About
                        </Text>
                        <Divider
                            orientation="horizontal"
                            border="2px solid"
                            borderColor="gray.800"
                        />
                        <Text fontSize="md" mt="1rem" fontWeight="regular" color="gray.600">
                            Use this to style the whole container. For example add padding to allow
                            the "dots" or "arrows" to go to other places without being overflown.
                        </Text>
                    </Box>

                    <FeaturedBox />
                    <FeaturedBox />
                    <Myaccordion borderRadius={4} boxShadow="lg" p={4} bg="gry.50" mb={4} />
                    <RatingStats isTablet={isTablet} />
                </Box>
            </Box>
            <Box></Box>
            {/* <Flex justify="space-around" mt="2rem">
                <Button colorScheme="teal" fontSize="xl" w="40%">
                    Book Now
                </Button>
                <Button colorScheme="pink" fontSize="xl" w="40%">
                    {' '}
                    Follow{' '}
                </Button>
            </Flex> */}
        </React.Fragment>
    );
}
