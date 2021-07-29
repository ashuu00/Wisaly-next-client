import { Box, Text } from '@chakra-ui/layout';
import { Alert, AlertIcon, Button, Flex, Heading, Icon, Input } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import UploadImage from '../../components/Blocks/UploadImage';
import DescribeEditor from '../../components/Blogs/DescribeEditor';
import { FaPlus } from 'react-icons/fa';
import ImageModal from '@Component/Explore/modals/ImageModal';

export default function create() {
    const [ytLinks, setytLinks] = useState<string[]>(['']);
    const [update, setUpdate] = useState<number>(0);
    const [openImageModal, setOpenImageModal] = useState(false);
    const addInput = () => {
        const newYtList = ytLinks;
        newYtList.push('');
        setytLinks(newYtList);
        setUpdate((prev) => prev + 1);
        console.log('Updated youtube video list', ytLinks);
    };

    useEffect(() => {
        setOpenImageModal(false);
    }, []);
    const changeVal = (event, idx: number) => {
        const updatedList = ytLinks;
        updatedList[idx] = event.target.value;
        setytLinks(updatedList);
    };
    let youtubeInputs = ytLinks.map((link, idx) => {
        return (
            <Box key={idx} w="100%">
                <Input
                    type="text"
                    w="90%"
                    bg="gray.50"
                    val={link}
                    onChange={(e) => changeVal(e, idx)}
                    placeholder="Title for the cover"
                />
                <Button w="5%" colorScheme="blue" ml="1rem" onClick={addInput}>
                    <Icon w={4} h={5} as={FaPlus} />
                </Button>
            </Box>
        );
    });

    return (
        <Box w="80%" ml="10%" p={8} bg="gray.50">
            <Heading as="h1" size="xl" my={6}>
                Where Magic Happens
            </Heading>
            <Alert status="warning">
                <AlertIcon />
                Show alert on user missing something
            </Alert>

            <Box borderRadius="20px" bg="pink.50" p={8}>
                <Flex justify="flex-start" align="baseline">
                    <Text fontSize="3xl" w="30%" fontWeight="bold">
                        Title:
                    </Text>
                    <Input type="text" w="70%" bg="gray.50" placeholder="Title for the cover" />
                </Flex>
                <Flex justify="flex-start" align="baseline">
                    <Text fontSize="3xl" w="30%" fontWeight="bold">
                        Description:
                    </Text>
                    <DescribeEditor w="70%" />
                </Flex>
                <Flex justify="flex-start" align="flex-start">
                    <Text fontSize="3xl" w="30%" fontWeight="bold">
                        Images:
                    </Text>
                    <Button
                        colorScheme="blue"
                        onClick={() => {
                            setOpenImageModal(true);
                            console.log('openmodal is ', openImageModal);
                            // setOpenImageModal(false);
                        }}>
                        Add Images
                    </Button>
                    <ImageModal openCommand={openImageModal} setOpen={setOpenImageModal} />
                    {/* <UploadImage /> */}
                </Flex>
                <Flex justify="flex-start" align="baseline">
                    <Text fontSize="3xl" w="30%" fontWeight="bold">
                        Videos:
                    </Text>
                    <Box w="70%">{youtubeInputs}</Box>
                </Flex>
                <Flex justify="flex-start" align="baseline">
                    <Text fontSize="3xl" w="30%" fontWeight="bold">
                        Title:
                    </Text>
                    <Input type="text" w="70%" bg="gray.50" placeholder="Title for the cover" />
                </Flex>
            </Box>
        </Box>
    );
}
