import {
    Box,
    Flex,
    Button,
    Spacer,
    Icon,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Text,
    Image,
    Divider,
    IconButton
} from '@chakra-ui/react';
import React from 'react';
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

export default function HeaderMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isProfileOpen,
        onOpen: onProfileOpen,
        onClose: onProfileClose
    } = useDisclosure();

    return (
        <Box w="100%">
            <Flex w="100%" bg="teal.100" align="center">
                <Icon as={HiMenu} w={8} h={8} onClick={onOpen} />
                <Spacer />
                <Icon
                    as={FaSearch}
                    w={8}
                    h={8}
                    color="pink.500"
                    p={1}
                    cursor="pointer"
                    // onClick={handleSearch}
                />
            </Flex>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                        <Flex align="center">
                            <Image
                                borderRadius="full"
                                boxSize="90px"
                                src="https://bit.ly/sage-adebayo"
                                alt="Profile picture"
                            />
                            <Box>
                                <Text fontSize="lg" fontWeight="bold">
                                    Hello, <br /> Ashutosh Anurag
                                </Text>
                                <Text fontSize="md" color="gray.400">
                                    Welcome back
                                </Text>
                            </Box>
                            <Spacer />

                            <IconButton
                                aria-label="profile-arrow"
                                bg="transparent"
                                icon={<FaArrowRight />}
                                cursor="pointer"
                                onClick={() => onProfileOpen()}
                                w={4}
                                h={4}
                            />
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                        <Text fontSize="3xl" fontWeight="bold" color="gray.500" my={2}>
                            Blogs
                        </Text>
                        <Divider w="100%" borderColor="gray.600" />
                        <Text fontSize="3xl" fontWeight="bold" color="gray.500" my={2}>
                            Explore
                        </Text>
                        <Divider w="100%" borderColor="gray.600" />
                        <Text fontSize="3xl" fontWeight="bold" color="gray.500" my={2}>
                            Blogs
                        </Text>
                        <Divider w="100%" borderColor="gray.600" />
                        <Text fontSize="3xl" fontWeight="bold" color="gray.500" my={2}>
                            Services
                        </Text>
                        <Divider w="100%" borderColor="gray.600" />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Drawer placement="left" onClose={onProfileClose} isOpen={isProfileOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <Text fontSize="3xl" fontWeight="bold" color="gray.500" my={2}>
                        Services
                    </Text>
                    <Divider w="100%" borderColor="gray.600" />
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
