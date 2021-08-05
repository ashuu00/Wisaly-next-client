import { getCompleteBlog } from 'axiosApi/blogs';
import {
    Flex,
    Text,
    Heading,
    Img,
    Box,
    Divider,
    Icon,
    Spacer,
    Button,
    Link,
    VStack,
    HStack
} from '@chakra-ui/react';
import { getCompleteBlog as completeBlogType } from 'dto/blogs/blog';
import getTokenFromContext from 'functions/getTokenFromContext';
import React from 'react';
import { FaHeart, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from '../../styles/Blogs.module.scss';
import cookieCutter from 'cookie-cutter';
import UserInfoCard from '@Component/user/UserInfoCard';

function BlogPage({ completeBlog }: { completeBlog: completeBlogType }) {
    return (
        <VStack py="3rem" bg="gray.50" w="100%" align="center">
            <Box w="65%">
                <VStack w="100%" spacing="0.75rem" textAlign="center">
                    <Text fontSize="md" fontWeight="regular" color="yellow.600">
                        HEALTH, LIFESTYLE
                    </Text>
                    <Heading as="h1" size="2xl">
                        Title of this blog here
                    </Heading>
                    <Text fontSize="md" fontWeight="regular" color="gray.400">
                        12 May 2021
                    </Text>
                </VStack>
                <Img
                    width="100%"
                    src="https://picsum.photos/id/237/800/600"
                    alt="Blog title Image"
                    my="1.5rem"
                />
                <Box w="100%" className={styles.richTextContent}>
                    <p>
                        It was a cheerful prospect. I asked Perry what he thought about it; but he
                        only shrugged his shoulders and continued a longwinded prayer he had been at
                        for some time. He was wont to say that the only redeeming feature of our
                        captivity was the ample time it gave him for the improvisation of prayers—it
                        was becoming an obsession with him.
                    </p>
                    <h2>Perfect design and code delivered to you</h2>
                    <p>
                        It was a cheerful prospect. I asked Perry what he thought about it; but he
                        only shrugged his shoulders and continued a longwinded prayer he had been at
                        for some time. He was wont to say that the only redeeming feature of our
                        captivity was the ample time it gave him for the improvisation of prayers—it
                        was becoming an obsession with him.
                    </p>
                    <p>
                        It was a cheerful prospect. I asked Perry what he thought about it; but he
                        only shrugged his shoulders and continued a longwinded prayer he had been at
                        for some time. He was wont to say that the only redeeming feature of our
                        captivity was the ample time it gave him for the improvisation of prayers—it
                        was becoming an obsession with him.
                    </p>
                    <ul>
                        <li>This is great</li>
                        <li>This is awseon</li>
                        <li>We ahould try thism roe often to increase vitalyiy</li>
                    </ul>
                    <ol>
                        <li>This is great</li>
                        <li>This is awseon</li>
                        <li>We ahould try thism roe often to increase vitalyiy</li>
                    </ol>
                </Box>
                <VStack spacing="1rem">
                    <Divider w="100%" border="2px solid gray" />
                    <Flex w="100%">
                        <Icon w={6} h={6} as={FaHeart} />
                        <Spacer />
                        <Icon w={6} h={6} ml="1rem" as={FaFacebook} />
                        <Icon w={6} h={6} ml="1rem" as={FaInstagram} />
                        <Icon w={6} h={6} ml="1rem" as={FaTwitter} />
                    </Flex>
                    <Divider w="100%" border="2px solid gray" />
                </VStack>
            </Box>
            <Box w="65%">
                <Text mb={2} fontSize="3xl" fontWeight="medium">
                    About this author
                </Text>
                <Divider w="100%" mt={2} mb={4} border="2px solid gray" />
                <UserInfoCard
                    pic_url="as"
                    name="Ashutosh Anurag"
                    bio="Nothing much"
                    button="Know More"
                />
            </Box>
        </VStack>
    );
}

BlogPage.getInitialProps = async (ctx) => {
    const blogName = ctx.query.slug;
    let token = ctx.req ? getTokenFromContext(ctx, 'jwt') : cookieCutter.get('jwt');
    if (token === '-1') token = undefined;
    console.log(token);
    const completeBlog = (await getCompleteBlog(blogName, token)).data;
    console.log(completeBlog);

    return { details: completeBlog };
};

export default BlogPage;
