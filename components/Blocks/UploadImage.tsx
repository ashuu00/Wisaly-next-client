import { Box, Circle, Heading } from '@chakra-ui/layout';
import { Button, Center, Img, VStack, Text, Icon, Flex, useToast } from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaDropbox } from 'react-icons/fa';

export default function UploadImage() {
    const toast = useToast();
    const pictures = [];
    const onDrop = useCallback(async (acceptedFiles) => {
        if (acceptedFiles.length > 6) {
            toast({
                title: `${status} toast`,
                status: 'warning',
                isClosable: true
            });
            return;
        }
        acceptedFiles.forEach((file) => {
            pictures.push(file);
        });
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <Box w="70%">
            <Box w="100%" _hover={{ cursor: 'pointer' }}>
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
                                Drop Images Here (Max:6)
                                <br />
                                First Image would be the title image of the card
                            </Text>
                        )}
                    </Flex>
                </div>
            </Box>
        </Box>
    );
}
