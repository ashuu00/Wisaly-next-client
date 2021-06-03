import { Box, Circle, Heading } from '@chakra-ui/layout';
import { Button, Center, Img, VStack, Text, Icon, Flex } from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaDropbox } from 'react-icons/fa';

export default function UploadImage() {
    const pictures = [];
    const onDrop = useCallback(async (acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            pictures.push(file);
        });
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <Box p={5} w="100%">
            <Center flexDir="column">
                <VStack w="80%" alignItems="center" bg="gray.100">
                    <Heading as="h1" size="2xl">
                        My Profile
                    </Heading>
                    <Img
                        mt="1rem"
                        src="https://picsum.photos/id/237/300/300"
                        boxSize="12rem"
                        borderRadius="100%"
                    />
                    <Button colorScheme="pink">Change Photo</Button>
                    <Heading as="h2" size="lg">
                        Ashutosh Anurag
                    </Heading>
                    <Box w="50%" _hover={{ cursor: 'pointer' }}>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Flex
                                flexDir="column"
                                w="100%"
                                justify="center"
                                bg="teal.200"
                                borderRadius="10px"
                                align="center">
                                <Icon as={FaDropbox} w={32} h={48} color="teal.700" />
                                {isDragActive ? (
                                    <Text color="teal.700" fontSize="xl">
                                        Release Mouse to save file
                                    </Text>
                                ) : (
                                    <Text color="teal.700" fontSize="xl">
                                        Drop Your images here
                                    </Text>
                                )}
                            </Flex>
                        </div>
                    </Box>
                </VStack>
            </Center>
        </Box>
    );
}
