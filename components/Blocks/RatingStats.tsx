import {
    Box,
    HStack,
    Progress,
    Stack,
    Text,
    VStack,
    Icon,
    Flex,
    Spacer,
    Image,
    Button,
    Link,
    Divider
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { colors } from 'react-select/src/theme';

export default function RatingStats({ isTablet }) {
    const colors = ['teal', 'green', 'yellow', 'orange', 'red'];
    const [rating, setRating] = useState(3);
    const RatingNum = () => (
        <React.Fragment>
            {' '}
            <Text fontSize="4xl" fontWeight="bold">
                4.7
            </Text>
            <Rating
                onChange={(e) => setRating(e)}
                initialRating={rating}
                fullSymbol={<Icon as={FaHeart} color="pink.400" w={6} h={6} mx={2} />}
                emptySymbol={<Icon as={FaHeart} color="gray.300" w={6} h={6} mx={2} />}
            />
            <Text fontSize="md" fontWeight="medium">
                1233 reviews
            </Text>
        </React.Fragment>
    );
    return (
        <Box w="100%" borderRadius={15} boxShadow="lg" p={4}>
            <Text fontSize="lg" fontWeight="bold" px={6}>
                Customer Reviews
            </Text>
            {!isTablet ? (
                <HStack spacing={4} align="center" px={6}>
                    <RatingNum />
                </HStack>
            ) : (
                <VStack spacing={1} align="center">
                    <RatingNum />
                </VStack>
            )}
            <VStack spacing={3} w="100%" px={6}>
                {colors.map((val, idx) => (
                    <Flex w="100%" justify="flex-start" align="center" key={val}>
                        <Progress
                            w={{ base: '72%', md: '85%' }}
                            colorScheme={val}
                            size="lg"
                            value={80}
                            borderRadius={7}
                        />
                        <Text fontSize="lg" ml={2} fontWeight="medium" color="gray.600">
                            5 <Icon as={FaStar} color="gray.600" w={4} h={4} mb={1} />
                        </Text>
                        <Text fontSize="md" ml={2} color="gray.600">
                            (24)
                        </Text>
                    </Flex>
                ))}
            </VStack>
            {/*reviews of customer start from here*/}
            <VStack w="100%" spacing={2} borderRadius="26px" borderColor="pink.300" p={6}>
                {Array(3)
                    .fill('')
                    .map((_, idx) => (
                        <React.Fragment>
                            <HStack w="100%" key={idx} justify="flex-start" align="flex-start">
                                <Image
                                    boxSize="50px"
                                    borderRadius="full"
                                    alt="comment author image"
                                    src="https://picsum.photos/300/300"
                                />

                                <Flex flexDir="column" w="90%" align="flex-start" ml={1}>
                                    <Text fontSize="md" fontWeight="bold">
                                        {/* {data.authorFullName} */} Ashutosh Anurag
                                    </Text>
                                    <Text fontSize="sm" fontWeight="normal" color="teal.600">
                                        {/* {data.autorBio} */} Certified Buyer
                                    </Text>
                                    {/**Comment text would be here */}
                                    <Text
                                        fontSize="sm"
                                        fontWeight="medium"
                                        color="gray.600"
                                        mt={1}
                                        mb={2}>
                                        {/* {data.autorBio} */} Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries,
                                        but also the leap into electronic typesetting, remaining
                                        essentially unchanged. It was popularised in the 1960s with
                                        the release of Letraset sheets containing Lorem Ipsum
                                        passages, and more
                                    </Text>
                                </Flex>
                            </HStack>
                            <Divider borderColor="gray.400" w="100%" />
                        </React.Fragment>
                    ))}
            </VStack>
        </Box>
    );
}
