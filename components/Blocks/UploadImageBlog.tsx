import { Box, Circle, Heading } from '@chakra-ui/layout';
import {
    Button,
    Center,
    Img,
    Text,
    Icon,
    Flex,
    useToast,
    VStack,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    CloseButton
} from '@chakra-ui/react';
import axios from 'axios';
import { sendData } from 'next/dist/next-server/server/api-utils';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaDropbox, FaCamera } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addImages } from '@Api/media';
export default function UploadImage() {
    const [picUrl, setPicUrl] = useState('');
    const [reject, setReject] = useState(false);
    const toast = useToast();
    const dispatch = useDispatch();

    //called after image droppped
    const onDrop = useCallback(async (acceptedFiles) => {
        setReject(false);
        acceptedFiles.forEach((file) => {
            const myUrl = URL.createObjectURL(file);
            setPicUrl(myUrl);
            dispatch({ type: 'SEND_BLOG_IMAGE', payload: file });
        });
    }, []);
    const handleReject = () => setReject(true);

    ///adding all the config of drag here
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: 'image/*',
        maxSize: 1000000,
        onDropRejected: handleReject
    });
    return (
        <React.Fragment>
            {reject && (
                <Alert status="error" my={4}>
                    <AlertIcon />
                    <AlertTitle mr={2}>Please select only one image!</AlertTitle>
                    <CloseButton
                        position="absolute"
                        right="8px"
                        top="8px"
                        onClick={() => setReject(false)}
                    />
                </Alert>
            )}
            <Box w="100%" _hover={{ cursor: 'pointer' }}>
                <div {...getRootProps()} style={{ width: '100%' }}>
                    <input {...getInputProps()} />
                    <Flex
                        flexDir="column"
                        w="100%"
                        h="300px"
                        justify="center"
                        backgroundImage={`url(${picUrl})`}
                        bg={picUrl !== '' ? '' : 'teal.200'}
                        borderRadius="10px"
                        bgSize="cover"
                        align="center">
                        <Icon as={FaCamera} w={16} h={16} color="teal.700" />
                        {isDragActive ? (
                            <Text color="teal.700" fontSize="xl">
                                Release Mouse to save file
                            </Text>
                        ) : (
                            <Text color="teal.700" fontSize="xl">
                                Drag and Drop or Click to upload title Image
                            </Text>
                        )}
                    </Flex>
                </div>
            </Box>
        </React.Fragment>
    );
}
