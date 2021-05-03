import React from 'react'
import {Box, HStack, Link, Text, Button, Icon, Img} from '@chakra-ui/react';
import {FiMoreVertical} from 'react-icons/fi'
const labels=[{
    label:'About',
    link:`${process.env.NEXT_PUBLIC_DEV_URL}/home`
},{
    label:'Explore',
    link:`${process.env.NEXT_PUBLIC_DEV_URL}/explore`
},{
    label:'Blogs',
    link:`${process.env.NEXT_PUBLIC_DEV_URL}/blogs`
},{
    label:'Services',
    link:`${process.env.NEXT_PUBLIC_DEV_URL}/services`
},{
    label:'Shop',
    link:`${process.env.NEXT_PUBLIC_DEV_URL}/services`
}]
export default function Header() {

    const isLogin:boolean=false;

    return (
        <Box display="flex" h="80px"  w="100%"  px="2rem" borderBottom="2px solid" borderBottomColor="teal.50">
            <HStack spacing="2.5rem" h="80px"  align="center">
                <Img src="homepage/WisalyLatestLogo.jpg" h="80%" alt="Wisaly Logo"/>
                {labels.map((val)=>(
                    <Link _hover={{color:'teal.400'}} color="pink.500" key={val.label}>
                        <Text fontSize="xl" fontWeight="medium"> {val.label}</Text>
                    </Link>
                ))}
            </HStack>
            <HStack spacing="2.5rem" h="80px"  fontSize="xl" w="100%" marginLeft="20%" align="center" justify="flex-end">
                    <Icon as={FiMoreVertical} w={6} h={6} color="pink.500"/>
                    <Button colorScheme="gray" color="pink.500" px="1.5rem">Login</Button>
                    <Button colorScheme="pink">Sign Up</Button>
            </HStack>
        </Box>
    )
}
