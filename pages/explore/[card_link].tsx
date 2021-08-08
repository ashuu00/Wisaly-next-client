import {
    Box,
    Checkbox,
    CheckboxGroup,
    Flex,
    Heading,
    HStack,
    Img,
    VStack,
    Text,
    Button,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Icon
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ExploreItemsSlider from '@Component/DisplayBox/ExploreItemSlider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ExploreItemSlider from '@Component/DisplayBox/ExploreItemSlider';
import Comments from '@Component/Explore/Tabs/Comments';
import { FaHeart } from 'react-icons/fa';
import Head from 'next/head';
import RSelectFormik from '@Component/forms/RSelectFormik';
import Youtube from 'react-youtube';
import styles from '@Styles/Explore.module.scss';
import BlogCard from '@Component/Blogs/BlogCard';
import getTokenFromContext from 'functions/getTokenFromContext';
import cookieCutter from 'cookie-cutter';
import { getCompleteCard } from 'axiosApi/displayCard';
import { getSingleCard } from 'dto/apisDto/displayCard';
import Link from 'next/link';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1 },
        items: 1
    }
};

const ytOptions = {
    height: '340',
    // width: '',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    }
};

export default function card_link({ data, token }: { data: getSingleCard; token: string }) {
    const [likedByUser, setLikedByUser] = useState(data.likedByUser);
    const [loggedInUser, setLoggedInUser] = useState(token !== undefined);
    const handleLike = async () => {
        //await likeCard(token, data.id);
        if (!loggedInUser) {
            //show should login modal
            return;
        }
        setLikedByUser(!likedByUser);
        alert(`${data.id} ${data.authorUsername}`);
    };
    return (
        <Flex p={10} justify="space-between" alignItems="flex-start">
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.title} />
            </Head>
            <Box w="10%">
                Back Arrow here
                <RSelectFormik />
            </Box>
            <Box w="55%" p="1.5rem" bg="red.50" borderRadius="25px" boxShadow="lg">
                <Box position="relative">
                    <Carousel
                        responsive={responsive}
                        infinite
                        showDots
                        ssr
                        dotListClass={styles.exploreDots}
                        renderDotsOutside>
                        <Flex w="100%" justify="center" alignItems="center">
                            <Img
                                src="https://picsum.photos/600/300"
                                h="340px"
                                maxW="100%"
                                alt="post images here, slider for images"
                                borderRadius="35px"
                            />
                        </Flex>
                        <Flex w="100%" justify="center" alignItems="center">
                            <Img
                                src="https://picsum.photos/600/300"
                                h="340px"
                                maxW="100%"
                                alt="post images here, slider for images"
                                borderRadius="35px"
                            />
                        </Flex>
                        <Flex w="100%" justify="center" alignItems="center">
                            <Img
                                src="https://picsum.photos/600/300"
                                h="340px"
                                maxW="100%"
                                alt="post images here, slider for images"
                                borderRadius="35px"
                            />
                        </Flex>
                        <Flex w="100%" justify="center" alignItems="center">
                            <Youtube
                                videoId="YzyatiQrQlQ"
                                opts={{
                                    height: '340',
                                    playerVars: { autoplay: 0, rel: 0, modestbranding: 1 }
                                }}
                            />
                        </Flex>
                    </Carousel>

                    <Flex
                        justify="flex-start"
                        align="center"
                        px={4}
                        py={2}
                        ml={4}
                        borderRadius="20px">
                        <Icon
                            zIndex="3"
                            as={FaHeart}
                            color={likedByUser ? 'red.300' : 'gray.300'}
                            cursor="pointer"
                            w={6}
                            h={6}
                            _active={{ transform: 'scale(1.4)', transition: 'all 0.5s ease' }}
                            onClick={handleLike}
                            borderColor="gray.500"
                        />
                        <Text fontSize="xl" fontWeight="bold" color="pink.700" ml={2}>
                            {data.likes}
                        </Text>
                    </Flex>
                </Box>
                <Box w="100%">
                    <Tabs isFitted isLazy variant="soft-rounded" colorScheme="pink">
                        <TabList>
                            <Tab>Info</Tab>
                            <Tab>Comments</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Box>
                                    <Heading mt="0.5rem" size="lg">
                                        {data.title}
                                    </Heading>
                                    <Text mt={8} fontSize="md">
                                        {data.description}
                                    </Text>
                                </Box>
                                <ExploreItemSlider title="Exploring these blogs">
                                    <BlogCard />
                                    <BlogCard />
                                </ExploreItemSlider>
                            </TabPanel>
                            <TabPanel>
                                <Comments
                                    comments={data.comments}
                                    loggedInUser={loggedInUser}
                                    cardId={data.id}
                                    token={token}
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
            <VStack w="20%" p="0.5rem" spacing="1rem" bg="pink.100" borderRadius="26px">
                <Img w="60%" h="auto" borderRadius="100%" alt="author image" src={data.autorBio} />
                <Text fontSize="xl" fontWeight="bold">
                    {data.authorFullName}
                </Text>
                <Box w="90%">
                    <Text fontSize="lg" fontWeight="normal" color="gray.600">
                        {data.autorBio}
                    </Text>
                </Box>
                <Link href={`/profile/${data.authorUsername}`}>
                    <Button colorScheme="pink" borderRadius="15px">
                        Know More
                    </Button>
                </Link>
            </VStack>
        </Flex>
    );
}

card_link.getInitialProps = async (ctx) => {
    let token = ctx.req ? getTokenFromContext(ctx, 'jwt') : cookieCutter.get('jwt');
    if (token === '-1') {
        token = undefined;
    }
    console.log('Query got is', ctx.query.card_link);

    const data = (await getCompleteCard(ctx.query.card_link, token)).data;
    console.log(data);

    return { data, token };
};
