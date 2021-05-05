import React from 'react'
import {Box, HStack, Link as ChakraLink, Text, Button, Icon, Img, Circle} from '@chakra-ui/react';
import Link from 'next/link';
import {FiMoreVertical, FiShoppingCart} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
const labels=[{
    label:'About',
    link:`/`
},{
    label:'Explore',
    link:`/explore`
},{
    label:'Blogs',
    link:`/blogs`
},{
    label:'Services',
    link:`/services`
},{
    label:'Shop',
    link:`/shop`
}]
export default function Header() {

    const isLogin:boolean=false;

    return (
        <Box display="flex" h="80px"  w="100%"  px="2rem" borderBottom="2px solid" borderBottomColor="teal.50">
            <HStack spacing="2.5rem" h="80px"  align="center">
                <Img src="/homepage/WisalyLatestLogo.jpg" h="80%" alt="Wisaly Logo"/>
                {labels.map((val)=>(
                    <Link key={val.label} href={val.link}>
                    <ChakraLink  _hover={{color:'teal.400',cursor:'pointer'}} color="pink.500" >
                        <Text fontSize="xl" fontWeight="medium"> {val.label}</Text>
                    </ChakraLink>
                    </Link>
                ))}
            </HStack>
            <HStack spacing="2.5rem" h="80px"  fontSize="xl" w="100%" marginLeft="20%" align="center" justify="flex-end">
                    <Link href='/checkout'>
                        <Icon as={FaShoppingCart} w={9} h={9}  borderRadius="10%" p={1} bg="gray.50" _hover={{transform:'scale(1.02)' ,bg:'gray.100',cursor:'pointer'}} color="pink.500"/>
                    </Link>
                    <Icon as={FiMoreVertical} w={6} h={6} color="pink.500"/>
                    <Button colorScheme="gray" color="pink.500" px="1.5rem">Login</Button>
                    <Button colorScheme="pink">Sign Up</Button>
            </HStack>
        </Box>
    )
}
