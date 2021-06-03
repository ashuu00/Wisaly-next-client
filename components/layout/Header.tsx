import React, { useEffect, useState } from 'react';
import {
    Box,
    HStack,
    Link as ChakraLink,
    Text,
    Button,
    Icon,
    Img,
    Circle,
    useToast
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiMoreVertical, FiShoppingCart } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import firebase from 'firebase';
import StyledLogin from 'react-firebaseui/StyledFirebaseAuth';
import cookieCutter from 'cookie-cutter';
import { LoginUser, LogoutUser } from '../../api/users';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import actions from '../../redux/actions';
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

export default function Header() {
    let uiConfig = {
        signInFlow: 'popup',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callback: {
            signInSuccess: () => false
        }
    };

    useEffect(() => {}, []);

    const toast = useToast();
    const dispatch = useDispatch();

    //const [u, setUser] = useState({ login: false, name: '' });
    const [login, setLogin] = useState({ status: false, name: '' });
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            //sending to the server login details here, only if user is available
            // console.log('user is', user.displayName); // photoURL, email

            if (user) {
                const data = {
                    first_name: user.displayName.split(' ')[0],
                    last_name: user.displayName.split(' ')[1],
                    display_pic: user.photoURL,
                    email: user.email
                };
                setLogin({ status: true, name: data.first_name });
                try {
                    const res = await LoginUser(data);
                    console.log('User details are', res.data);
                    const payload = _.pick(res.data, [
                        'first_name',
                        'last_name',
                        'email',
                        'roles',
                        'id',
                        'display_pic'
                    ]);
                    dispatch({ type: actions.GET_USER_DETAILS, payload });
                } catch (err) {
                    console.log(err);
                }
                toast({
                    title: 'Login Successful',
                    description: 'Successfully Logged with Gmail.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true
                });
            } else {
                try {
                    const res = await LogoutUser();
                    toast({
                        title: 'Logged out successfully',
                        status: 'success',
                        duration: 3000,
                        isClosable: true
                    });
                    setLogin({ status: false, name: '' });
                } catch (error) {
                    toast({
                        title: 'Error loging out',
                        status: 'error',
                        duration: 3000,
                        isClosable: true
                    });
                }
            }
        });
    }, []);

    useEffect(() => {
        // axios
        //     .get(`${link}/user`, { withCredentials: true })
        //     .then((res) => {
        //         if (res.data.user.first_name) {
        //             setUser({ login: true, name: res.data.user.first_name });
        //         } else {
        //             console.log('Not found user');
        //         }
        //     })
        //     .catch((err) => console.log(err));
    }, []);

    //just sends to firebase server
    const handleLogin = () => {
        cookieCutter.set('link', window.location.href, { expires: 360 });
        window.location.replace('http://localhost:5000/google');
    };

    const manageLogout = () => {
        firebase.auth().signOut();
    };

    return (
        <Box
            display="flex"
            h="80px"
            w="100%"
            px="2rem"
            borderBottom="2px solid"
            borderBottomColor="teal.50">
            <HStack spacing="2.5rem" h="80px" align="center">
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
            <HStack
                spacing="2.5rem"
                h="80px"
                fontSize="xl"
                w="100%"
                marginLeft="20%"
                align="center"
                justify="flex-end">
                <Link href="/checkout">
                    <Icon
                        as={FaShoppingCart}
                        w={9}
                        h={9}
                        borderRadius="10%"
                        p={1}
                        bg="gray.50"
                        _hover={{ transform: 'scale(1.02)', bg: 'gray.100', cursor: 'pointer' }}
                        color="pink.500"
                    />
                </Link>
                <Icon as={FiMoreVertical} w={6} h={6} color="pink.500" />

                {/* {!user.login?(<Button colorScheme="gray" color="pink.500" px="1.5rem" onClick={handleLogin}>Login</Button>) */}
                {!login.status ? (
                    <StyledLogin uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                ) : (
                    <Button colorScheme="gray" color="pink.500" px="1.5rem" onClick={manageLogout}>
                        Hello, {login.name}
                    </Button>
                )}
            </HStack>
        </Box>
    );
}
