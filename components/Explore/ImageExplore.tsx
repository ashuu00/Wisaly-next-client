import { Img } from '@chakra-ui/image';
import {
    Box,
    Flex,
    Button,
    Spacer,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Heading,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.scss';
import ItemCard from './ItemCard';
export default function ImageExplore() {
    const toast = useToast();
    const [active, setActive] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    let clickHoldTimer = null;

    const handleMouseDown = () => {
        setActive(true);
        clickHoldTimer = setTimeout(() => {
            setActive(false);
        }, 500); //Change 1000 to number of milliseconds required for mouse hold
    };

    const handleMouseUp = () => {
        clearTimeout(clickHoldTimer);
    };

    return (
        <Box
            w="320px"
            boxShadow="xl"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            h="auto"
            position="relative"
            className={styles.main}
            _hover={{ boxShadow: '2xl', transform: 'scale(1.02)', transition: 'all 0.5s ease' }}
            mb="3rem"
            borderRadius="20px"
            _active={{ transform: 'rotateY(180deg)' }}
            onClick={() => (active ? onOpen() : '')}>
            {/** Image that would be shown */}
            <Img
                src="homepage/BlogsPage.webp"
                zIndex={0}
                className={styles.front}
                w="100%"
                h="auto"
                alt="Explore Image"
                borderRadius="20px"
            />

            {/** Overlay for the buttons */}
            <Flex
                pos="absolute"
                zIndex={1}
                justify="flex-start"
                alignItems="flex-end"
                p="1.5rem"
                className={styles.front}
                width="100%"
                h="100%"
                borderRadius="20px"
                bg="rgba(0,0,0,0.5)"
                opacity={0}
                top={0}
                left={0}
                transition="0.75s ease"
                _hover={{ cursor: 'pointer', opacity: '1' }}>
                <Button colorScheme="orange">Show Details </Button>
                <Spacer />
                <Button colorScheme="pink">Know More</Button>
            </Flex>

            {/** This is the flip side */}
            <Flex
                pos="absolute"
                zIndex={0}
                className={styles.back}
                justify="flex-start"
                alignItems="flex-start"
                p="1.5rem"
                top={0}
                left={0}
                width="100%"
                h="100%"
                borderRadius="20px">
                <h1>This is the card</h1>
            </Flex>

            {/** Modal contructed at last */}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                scrollBehavior={'outside'}
                size={'4xl'}>
                <ModalOverlay />
                <ModalContent>
                    <Flex
                        w="100%"
                        p="1rem"
                        h="25rem"
                        position="relative"
                        borderRadius="5px"
                        bg="gray.50"
                        minH="100%">
                        <Box w="50%" position="sticky" top="0">
                            <Img src="https://picsum.photos/id/235/400/200" w="100%" />
                            <Heading as="h2" my="0.5rem" size="lg">
                                Title or something of picture
                            </Heading>
                            <Text fontSize="lg" mb="0.25rem" fontWeight="bold">
                                Description
                            </Text>
                            <Text fontSize="lg" mb="0.25rem">
                                Description
                            </Text>
                            <Text fontSize="lg" mb="0.25rem">
                                Description
                            </Text>
                        </Box>
                        <Box width="50%" overflow="scroll">
                            {/** Tabs here */}
                            <Tabs colorScheme="orange" isFitted variant="soft-rounded">
                                <TabList position="sticky" top="0" pt="3px" px="3px" bg="gray.50">
                                    <Tab>Items Shown</Tab>
                                    <Tab>Related Items</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel>
                                        <Flex w="100%" wrap="wrap" justify="space-between">
                                            <ItemCard />
                                            <ItemCard />
                                            <ItemCard />
                                            <ItemCard />
                                        </Flex>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </Flex>
                </ModalContent>
            </Modal>
        </Box>
    );
}
