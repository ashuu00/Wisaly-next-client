import { Box, Heading, Flex, Text, SimpleGrid } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import Header from '../../components/layout/Header';
import styles from '../../styles/Blogs.module.scss';
import Link from 'next/link';
import { getAllBlogs } from 'axiosApi/blogs';
import { HStack } from '@chakra-ui/react';
import BlogCard from '@Component/Blogs/BlogCard';
import getTokenFromContext from 'functions/getTokenFromContext';
import cookieCutter from 'cookie-cutter';
import ExploreCategory from '@Component/Cards/ExploreCategory';

export default function index({ data }) {
    console.log('my blog data', data);
    // const { data: myData, status } = data;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1080 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        console.log('called getBlogs');
    }, []);
    return (
        <Box px="50px">
            <Box className="BlogDisplayTitle" my="2.5rem">
                <Heading as="h1" size="3xl" ml={2}>
                    Welcome to the Blog Page
                </Heading>
                <Heading as="h2" ml={4} size="lg" mt="0.5rem" color="gray.500">
                    Find all the intersting blogs here
                </Heading>
            </Box>
            <Carousel responsive={responsive} itemClass={styles.my_item} ssr>
                {data.map((blog, idx) => (
                    <Link href={`/blogs/${blog.page_link}`} key={idx}>
                        <Flex
                            key={idx}
                            w="300px"
                            backgroundImage="url(https://picsum.photos/id/211/600/600)"
                            backgroundPosition="center"
                            backgroundSize="cover"
                            _hover={{
                                cursor: 'pointer',
                                transform: 'scale(1.02)',
                                transition: 'all 0.5s ease',
                                boxShadow: '4px 4px 5px 1px rgba(0,0,0,0.5)'
                            }}
                            h="400px"
                            justify="center"
                            alignItems="flex-end"
                            borderRadius="10px"
                            boxShadow="md">
                            <Flex
                                width="80%"
                                bg="cyan.100"
                                borderRadius="10px"
                                mb="10%"
                                border="3px solid #E6FFFA"
                                flexDir="column"
                                justify="stretch"
                                p="20px"
                                alignItems="center">
                                <Text fontSize="2xl" color="cyan.800" fontWeight="bold">
                                    {' '}
                                    {blog.title}
                                </Text>
                                <Text fontSize="md" mb={1} color="cyan.700" fontWeight="medium">
                                    {' '}
                                    {blog.description}
                                </Text>
                                <Text fontSize="md" color="cyan.800" fontWeight="bold">
                                    {' '}
                                    {blog.created_at}
                                </Text>
                            </Flex>
                        </Flex>
                    </Link>
                ))}

                {/* <Box  w="80%" ml="10%" h="500px" borderRadius="10px" boxShadow="lg" bg="red.200">Item 2</Box>
                <Box  w="80%" ml="10%" h="500px" borderRadius="10px" boxShadow="lg" bg="orange.200">Item 3</Box>
                <Box  w="80%" ml="10%" h="500px" borderRadius="10px" boxShadow="lg" bg="pink.200">Item 4</Box>
                <Box  w="80%" ml="10%" h="500px" borderRadius="10px" boxShadow="lg" bg="purple.200">Item 5</Box> */}
            </Carousel>

            <Flex w="100%" justify="space-between" wrap="wrap">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </Flex>
            <Flex w="100%" justify="space-between" wrap="wrap">
                <ExploreCategory />
                <ExploreCategory />
                <ExploreCategory />
                <ExploreCategory />
            </Flex>
        </Box>
    );
}

index.getInitialProps = async (ctx) => {
    const token = ctx.req ? getTokenFromContext(ctx, 'jwt') : cookieCutter.get('jwt');
    if (token === '-1') return undefined;
    const data = (await getAllBlogs(token)).data;
    console.log('blogs are', data);

    return { data: data };
};
