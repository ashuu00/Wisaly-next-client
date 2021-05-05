import { Flex, Text, Heading, Img, Box, VStack, Divider, Icon, Spacer } from '@chakra-ui/react'
import React from 'react'
import {FaHeart, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import styles from '../../styles/Blogs.module.scss'
function BlogPage() {
    return (
    <Flex py="3rem" bg="gray.50">
        <Box w="65%" pl="15%" >
            <VStack w="100%" spacing="0.75rem" textAlign="center">
                <Text fontSize="md" fontWeight="regular" color="yellow.600">HEALTH, LIFESTYLE</Text>
                <Heading as="h1" size="2xl">Title of this blog here</Heading>
                <Text fontSize="md" fontWeight="regular" color="gray.400">12 May 2021</Text>
            </VStack>
            <Img width="100%" src='https://picsum.photos/id/237/800/600' alt='Blog title Image' my='1.5rem'/>
            <Box w="100%" className={styles.blogContent}>
                <p>
                It was a cheerful prospect. I asked Perry what he thought about it; but he only shrugged his shoulders and 
                continued a longwinded prayer he had been at for some time. He was wont to say that the only redeeming feature of 
                our captivity was the ample time it gave him for the improvisation of prayers—it was becoming an obsession with him.
                </p>
                <h2>
                Perfect design and code delivered to you
                </h2>
                <p>
                It was a cheerful prospect. I asked Perry what he thought about it; but he only shrugged his shoulders and 
                continued a longwinded prayer he had been at for some time. He was wont to say that the only redeeming feature of 
                our captivity was the ample time it gave him for the improvisation of prayers—it was becoming an obsession with him.
                </p>
                <p>
                It was a cheerful prospect. I asked Perry what he thought about it; but he only shrugged his shoulders and 
                continued a longwinded prayer he had been at for some time. He was wont to say that the only redeeming feature of 
                our captivity was the ample time it gave him for the improvisation of prayers—it was becoming an obsession with him.
                </p>
            </Box>
            <VStack spacing="1rem">
                <Divider w="100%" border="2px solid gray"/>
                    <Flex w="100%">
                        <Icon w={6} h={6} as={FaHeart}/>
                        <Spacer/>
                        <Icon w={6} h={6} ml="1rem" as={FaFacebook}/>
                        <Icon w={6} h={6} ml="1rem" as={FaInstagram}/>
                        <Icon w={6} h={6} ml="1rem" as={FaTwitter}/>
                    </Flex>
                <Divider w="100%" border="2px solid gray"/>
            </VStack>
            
        </Box>
    </Flex>
    )
}

export default BlogPage
