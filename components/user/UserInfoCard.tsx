import { HStack, Img, Box, VStack, Link, Button, Text } from '@chakra-ui/react';
import React from 'react';

export default function UserInfoCard({ pic_url, name, bio, button }) {
    return (
        <HStack w="100%" borderRadius="26px" borderColor="pink.300" boxShadow="lg" p={6}>
            <Img
                w="30%"
                maxW="160px"
                borderRadius="100%"
                alt="author image"
                src="https://picsum.photos/300/300"
            />
            <Box>
                <VStack spacing={2} w="90%" align="flex-start" ml={4}>
                    <Text fontSize="xl" fontWeight="bold">
                        {/* {data.authorFullName} */} Ashutosh Anurag
                    </Text>
                    <Text fontSize="lg" fontWeight="normal" color="gray.600" mb={4}>
                        {/* {data.autorBio} */} Created beautiful that ouches the soulf of any being
                    </Text>
                    <Link href={`/profile/as`}>
                        <Button colorScheme="pink" borderRadius="15px">
                            Know More
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </HStack>
    );
}
