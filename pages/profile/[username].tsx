import { Box, Divider } from '@chakra-ui/layout';
import {
    Button,
    Center,
    Flex,
    Heading,
    HStack,
    Icon,
    Img,
    Spinner,
    Tag,
    Text,
    VStack
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaBlog } from 'react-icons/fa';
import styles from '@Styles/User.module.scss';
import UserMenu from '../../components/layout/UserMenu';
import { UserState } from '../../dto/user';
import { getSuggested, getUserDetails } from '@Api/users';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import cookieCutter from 'cookie-cutter';
import { usersResponsive } from '../../Lists/responsive';
import { useSelector, useDispatch } from 'react-redux';
import Feedback from '@Component/forms/Feedback';
import getTokenFromContext from 'functions/getTokenFromContext';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export default function index({ userDetails, suggested }) {
    //const [user, setCurrUser] = useState(undefined);
    const [loading, setLoading] = useState(false);
    console.log('got filtered', suggested);

    //@ts-ignore
    const feedback = useSelector((state) => state.modalState).feedback;
    const dispatch = useDispatch();
    const router = useRouter();
    const owner = userDetails.role === 'owner';

    /// const reduxState = useSelector((state) => state);
    const DetailSchema = ({ label, value }) => (
        <Box>
            <Text fontSize="xl" fontWeight="semibold">
                {label}
            </Text>
            <Text fontSize="xl" color="gray.600" fontWeight="normal">
                {value}
            </Text>
        </Box>
    );

    return (
        <Box bg="rgb(246, 255, 249)">
            {loading ? (
                <Box>
                    Loading
                    <Spinner size="xl" />
                </Box>
            ) : (
                <Flex w="100%" justify="center">
                    {owner && (
                        <Box w="20%">
                            <UserMenu />
                        </Box>
                    )}
                    <Box w={owner ? '80%' : '100%'}>
                        <Flex w="100%">
                            <Box w="50%" py="3rem">
                                <VStack>
                                    <Img
                                        src={userDetails.display_pic}
                                        w="40%"
                                        mb="3rem"
                                        borderRadius="100%"></Img>
                                    <Box
                                        w="80%"
                                        border="2px solid"
                                        bg="pink.50"
                                        p={4}
                                        borderColor="pink.200"
                                        borderRadius="40px">
                                        <Text fontSize="2xl" fontWeight="bold">
                                            About Myself
                                        </Text>
                                        <Divider
                                            w="95%"
                                            border="2px solid black"
                                            color="teal.700"
                                        />
                                        <Text fontSize="md" fontWeight="medium" mt={2}>
                                            {userDetails.about}
                                        </Text>
                                    </Box>
                                    <Box
                                        bg="pink.50"
                                        border="2px solid"
                                        borderColor="pink.200"
                                        w="80%"
                                        ml="10%"
                                        textAlign="center"
                                        p="1rem"
                                        borderRadius="40px">
                                        <Heading as="h3" size="lg" mb="1rem">
                                            My Skills and Interests
                                        </Heading>
                                        <Flex w="100%" wrap="wrap" justify="center">
                                            {userDetails.interests.map((interest, idx) => (
                                                <Box key={idx}>
                                                    <Tag
                                                        size="lg"
                                                        mx="0.5rem"
                                                        mb="1rem"
                                                        variant="solid"
                                                        colorScheme="pink">
                                                        <Text fontSize="xl">{interest}</Text>
                                                    </Tag>
                                                </Box>
                                            ))}
                                        </Flex>
                                    </Box>
                                </VStack>
                            </Box>
                            <Box w="50%" p="3rem">
                                <Box w="95%">
                                    <HStack>
                                        <Heading as="h2" size="lg">
                                            {' '}
                                            About
                                        </Heading>
                                    </HStack>
                                    <Divider
                                        w="90%"
                                        borderWidth="1px"
                                        borderColor="gray.600"
                                        mb="1.5rem"
                                        mt="0.5rem"
                                    />
                                    <VStack spacing={6} alignItems="flex-start">
                                        <Text fontSize="3xl" fontWeight="bold">
                                            {userDetails.first_name} {userDetails.last_name}
                                        </Text>
                                        <DetailSchema label="Email" value={userDetails.email} />
                                        <DetailSchema
                                            label="Username"
                                            value={userDetails.username}
                                        />
                                        <DetailSchema label="Phone Number" value="9650045344" />
                                    </VStack>
                                    <Flex justify="center" mt="2rem">
                                        {Array(
                                            {
                                                label: 'followers',
                                                count: userDetails.followers
                                            },
                                            { label: 'following', count: userDetails.following }
                                        ).map((val, idx) => (
                                            <VStack
                                                w="31%"
                                                key={idx}
                                                spacing={6}
                                                borderRadius="20px"
                                                mx={4}
                                                bgGradient="linear(to-b, rgb(255, 252, 252),rgb(255, 245, 245))">
                                                <Icon as={FaBlog} w={10} h={12} />
                                                <Text
                                                    fontSize="2xl"
                                                    textAlign="center"
                                                    color="pink.700"
                                                    fontWeight="bold">
                                                    {val.label} <br /> {val.count}
                                                </Text>
                                            </VStack>
                                        ))}
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                        {/** This is where suggested users would come, carousel effect here */}
                        <Box>
                            <Heading as="h3" size="lg" m={4}>
                                Recently Joined
                            </Heading>

                            <Carousel ssr responsive={usersResponsive} showDots>
                                {suggested.map((user, idx) => (
                                    <Link href={`/profile/${user.username}`}>
                                        <VStack
                                            className={styles.suggestedUsers}
                                            key={idx}
                                            w="350px"
                                            m={3}
                                            p={5}>
                                            <Img
                                                borderRadius="15px"
                                                width="300px"
                                                h="300px"
                                                src={
                                                    user.display_pic === ''
                                                        ? 'https://picsum.photos/300'
                                                        : user.display_pic
                                                }
                                                alt="user name here"
                                            />
                                            <Text fontSize="xl">
                                                {user.first_name} {user.last_name}
                                            </Text>
                                            <Text fontSize="lg" color="gray.600">
                                                Joined {user.created} ago
                                            </Text>
                                            <Button colorScheme="blue" fontSize="xl">
                                                Follow now
                                            </Button>
                                        </VStack>
                                    </Link>
                                ))}
                            </Carousel>
                        </Box>
                        <Feedback />
                        <Button
                            colorScheme="pink"
                            onClick={() => {
                                dispatch({ type: 'OPEN_FEEDBACK' });
                                console.log('opened feedback');
                            }}>
                            Add Feedback
                        </Button>
                    </Box>
                </Flex>
            )}
        </Box>
    );
}

index.getInitialProps = async (ctx) => {
    //('/register')

    const token = ctx.req ? getTokenFromContext(ctx, 'jwt') : cookieCutter.get('jwt');
    const currUsername = ctx.req
        ? getTokenFromContext(ctx, 'activeUser')
        : cookieCutter.get('activeUser');
    if (token === '-1') {
        ctx.res.writeHead(301, {
            Location: '/signup'
        });
        ctx.res.end();
        return;
    }
    console.log('username is', ctx.query.username, currUsername);

    const userDetails = (await getUserDetails(token, ctx.query.username)).data;
    const suggested = (await getSuggested(token)).data;
    console.log(userDetails);
    console.log(suggested);
    const suggestFiltered = suggested.filter(
        (user) => user.username !== currUsername.split('-')[1]
    );

    return { userDetails, suggested: suggestFiltered };
};
