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

import StyledLogin from 'react-firebaseui/StyledFirebaseAuth';
import cookieCutter from 'cookie-cutter';
import { getUserDetails, LoginUser, LogoutUser } from 'axiosApi/users';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import actions from '../../redux/actions';
import SearchModal from '@Component/Explore/modals/SearchModal';
import { useRouter } from 'next/dist/client/router';
import location from 'aws-sdk/clients/location';
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

export default function Header() {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const [isTablet] = useMediaQuery(['(max-width:768px)']);
    const router = useRouter();
    let jwtToken;
    //const [u, setUser] = useState({ login: false, name: '' });
    let user = {
        displayName: 'Ashu Anu',
        photoURL: 'hello',
        email: 'ashu25'
    };
    const [login, setLogin] = useState('');
    const [username, setUsername] = useState('');
    useEffect(() => {
        let nameToken = cookieCutter.get('activeUser');
        jwtToken = cookieCutter.get('jwt');
        //check for jwt, so that we remove unecessary hits to server
        if (jwtToken) {
            console.log('jwt found', jwtToken);
            dispatch({ type: actions.GET_USER_TOKEN, jwtToken });
            dispatch({ type: actions.GET_USER_NAME, payload: nameToken.split('-')[1] });
            setLogin(cookieCutter.get('activeUser').split('-')[0]);
            setUsername(cookieCutter.get('activeUser').split('-')[1]);

            return;
        }

        // if (user) {
        //     console.log('logging', user);
        //     const data = {
        //         first_name: user.displayName.split(' ')[0],
        //         last_name: user.displayName.split(' ')[1],
        //         display_pic: user.photoURL,
        //         email: user.email
        //     };
        //     console.log('login data is', data.first_name);

        //     setLogin(data.first_name);
        //     try {
        //         const res = await LoginUser(data);
        //         cookieCutter.set('activeUser', data.first_name + '-' + res.data.username, {
        //             expires: new Date(Date.now() + 1000 * 3600 * 24 * 7)
        //         });
        //         jwtToken = cookieCutter.get('jwt');
        //         dispatch({
        //             type: actions.GET_USER_DETAILS,
        //             payload: {
        //                 jwtToken,
        //                 first_name: data.first_name,
        //                 last_name: data.last_name,
        //                 id: res.data.id,
        //                 email: data.email,
        //                 display_pic: data.display_pic
        //             }
        //         });
        //         setUsername(res.data.username);
        //         console.log('sent token to redux', res.data.about);
        //         let shouldRegister = res.data.about ? false : true;
        //         if (shouldRegister) router.push('/profile/register');
        //         window.location.reload();
        //     } catch (err) {
        //         console.log('error is', err);
        //         return;
        //     }
        //     toast({
        //         title: 'Login Successful',
        //         description: 'Successfully Logged with Gmail.',
        //         status: 'success',
        //         duration: 5000,
        //         isClosable: true
        //     });
        // }
    }, []);

    const manageLogout = async () => {
        try {
            setLogin('');
            await LogoutUser();
            cookieCutter.set('jwt', 'true', { expires: new Date(0) });
            toast({
                title: 'Logged out successfully',
                status: 'success',
                duration: 3000,
                isClosable: true
            });
            cookieCutter.set('activeUser', 'true', { expires: new Date(0) });
            window.location.reload();
        } catch (error) {
            toast({
                title: 'Error loging out',
                description: 'some error',
                status: 'error',
                duration: 3000,
                isClosable: true
            });
        }
    };

    const AccountButton = () => (
        <Menu>
            <MenuButton as={Button} color="pink.500" rightIcon={<FaChevronDown />}>
                {login}
            </MenuButton>
            <MenuList>
                <Link href={`/profile/${username}`}>
                    <MenuItem>Profile</MenuItem>
                </Link>
                <MenuItem onClick={manageLogout}>Logout</MenuItem>
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
                    <HStack
                        spacing={['0.25rem', '1rem', '1.5rem', '2.5rem']}
                        h="80px"
                        align="center">
                        <Img src="/homepage/WisalyLatestLogo.jpg" h="80%" alt="Wisaly Logo" />
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
                        w="100%"
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
                            <Button colorScheme="gray" color="pink.500">
                                Sign in
                            </Button>
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
