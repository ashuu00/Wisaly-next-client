import React, { useEffect, useState } from 'react';
import {
    Box,
    HStack,
    Link as ChakraLink,
    Text,
    Button,
    Icon,
    Img,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Circle,
    useToast,
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useMediaQuery,
    Spacer,
    Flex
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiMoreVertical, FiShoppingCart } from 'react-icons/fi';
import { FaShoppingCart, FaChevronDown, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledLogin from 'react-firebaseui/StyledFirebaseAuth';
import cookieCutter from 'cookie-cutter';
import { getUserDetails, LoginUser, LogoutUser } from '@Api/users';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import actions from '../../redux/actions';
import SearchModal from '@Component/Explore/modals/SearchModal';
import { useRouter } from 'next/dist/client/router';
import HeaderMobile from './HeaderMobile';
/**
 * NOTE: Add a cookie to check if user already authenticated, then we can block the firebase api,
 * if user already authenticated, get details from getInitial Props
 */

const labels = [
    {
        label: 'About',
        link: `/`
    },
    {
        label: 'Explore',
        link: `/explore`
    },
    {
        label: 'Blogs',
        link: `/blogs`
    },
    {
        label: 'Services',
        link: `/services`
    },
    {
        label: 'Shop',
        link: `/shop`
    }
];

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyBOSj-mUJz56Z30gS4XM0uJAQEdNsDPc6U',
        authDomain: 'wisaly-ded1b.firebaseapp.com'
    });
} else {
    firebase.app();
}

let uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
};

export default function Header() {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const [isTablet] = useMediaQuery(['(max-width:768px)']);
    const router = useRouter();
    let jwtToken;
    //const [u, setUser] = useState({ login: false, name: '' });

    const [login, setLogin] = useState('');
    const [username, setUsername] = useState('');

    const AccountButton = () => (
        <Menu>
            <MenuButton as={Button} color="pink.500" rightIcon={<FaChevronDown />}>
                {login}
            </MenuButton>
            <MenuList>
                <Link href={`/profile/${username}`}>
                    <MenuItem>Profile</MenuItem>
                </Link>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
            </MenuList>
        </Menu>
    );

    const handleSearch = () => {
        onOpen();
    };

    return (
        <Box>
            {!isTablet ? (
                <Flex
                    h="80px"
                    w="100%"
                    px="2rem"
                    borderBottom="2px solid"
                    borderBottomColor="teal.50">
                    <HStack spacing={['0.25rem', '1rem', '1.5rem', '2rem']} h="80px" align="center">
                        <Img src="/homepage/WisalyLatestLogo.jpg" h="80%" alt="Wisaly Logo" />
                        {/** All the links would be here */}
                        {labels.map((val) => (
                            <Link key={val.label} href={val.link}>
                                <ChakraLink
                                    _hover={{ color: 'teal.400', cursor: 'pointer' }}
                                    color="pink.500">
                                    <Text fontSize="xl" fontWeight="medium">
                                        {' '}
                                        {val.label}
                                    </Text>
                                </ChakraLink>
                            </Link>
                        ))}
                    </HStack>
                    <Spacer />
                    <HStack
                        spacing="2.5rem"
                        h="80px"
                        fontSize="xl"
                        w="auto"
                        align="center"
                        justify="flex-end">
                        <Icon
                            as={FaSearch}
                            w={8}
                            h={8}
                            color="pink.500"
                            p={1}
                            bg="gray.50"
                            cursor="pointer"
                            onClick={handleSearch}
                        />
                        <Link href="/checkout">
                            <Icon
                                as={FaShoppingCart}
                                w={9}
                                h={9}
                                borderRadius="10%"
                                p={1}
                                bg="gray.50"
                                _hover={{
                                    transform: 'scale(1.02)',
                                    bg: 'gray.100',
                                    cursor: 'pointer'
                                }}
                                color="pink.500"
                            />
                        </Link>
                        <Icon as={FiMoreVertical} w={6} h={6} color="pink.500" />

                        {/* {!user.login?(<Button colorScheme="gray" color="pink.500" px="1.5rem" onClick={handleLogin}>Login</Button>) */}
                        {login === '' ? (
                            <HStack spacing={2}>
                                <Button colorScheme="pink">Sign in</Button>
                                <Button colorScheme="pink">Sign Up</Button>
                            </HStack>
                        ) : (
                            <AccountButton />
                        )}
                    </HStack>
                </Flex>
            ) : (
                <HeaderMobile />
            )}
            {/**Search Modal for searching items */}
            <Modal onClose={onClose} size="full" isOpen={isOpen} scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody bg="red.50">
                        <SearchModal />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
}
