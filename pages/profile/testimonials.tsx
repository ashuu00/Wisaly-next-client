import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';

export default function testimonials() {
    return (
        <Box>
            <Flex w="100%" h={['300px', '300px', '300px', '300px']} bg="red.700" align="center">
                <Box color="white" ml="10%">
                    <Heading as="h1" size="2xl" mb={4}>
                        Testimonials
                    </Heading>
                    <Heading as="h2" size="md">
                        Find out what the cutomers love about us!
                    </Heading>
                </Box>
            </Flex>
            <Box mt="-3rem" px={12}>
                <Box w="30%" bg="cyan.100" position="relative" borderRadius="30px" p={4}>
                    <Text fontSize="lg" fontWeight="medium" color="cyan.700">
                        Most handsome boy in the universe lies within our soul
                    </Text>
                    <Box
                        w="0"
                        h="0"
                        position="absolute"
                        bottom="-38px"
                        left={9}
                        border="20px solid"
                        //borderColor="transparent"

                        borderLeftColor="transparent"
                        borderRightColor="transparent"
                        borderBottomColor="transparent"
                        borderRadius="5px"
                        borderTopColor="cyan.100"></Box>
                </Box>
                <Flex mt={7} pl={5}>
                    <Image
                        borderRadius="full"
                        boxSize="75px"
                        src="https://bit.ly/sage-adebayo"
                        alt="My profile"
                    />
                    <Box ml={3}>
                        <Text fontSize="lg" fontWeight="bold">
                            Ashutosh Anurag
                        </Text>
                        <Text fontSize="md" fontWeight="medium" color="gray.400">
                            Delhi, India
                        </Text>
                        <Text fontSize="md" fontWeight="medium" color="cyan.400">
                            Verified Customer
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
