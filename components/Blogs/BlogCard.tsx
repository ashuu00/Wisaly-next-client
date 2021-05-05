import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/image'
import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import Link from 'next/link'
import React from 'react'
import Jump from 'react-reveal/Jump'

export default function BlogCard() {
    return (

               <Link href='/blogs/ashu'>
           <Flex direction={{base:"column-reverse",lg:"row"}} _hover={{boxShadow:'2xl',cursor:'pointer', transform:'scale(1.02)', transition:'all 0.5s ease'}} mb="3rem" borderRadius="20px">
               <Flex w="340px" h="290px" bg="#F7FAFC" justify="center" alignItems="center" borderRadius="20px 0 0 20px" >
                    <Box w="80%" h="80%">
                        <Heading as="h3" size="lg">This is the blog Title</Heading>
                        <Text fontSize="lg" mt="1rem" fontWeight="medium" color="#666666" lineHeight={1.4}> this is the subtitle fo blog, as it would help</Text>

                        <Jump >
                        <Button  bgGradient="linear(to-b,#EF8721,#F687B3)" color="white" mt="1rem" _hover={{transform:'scale(1.05)',content:'"hi"'}}>Learn More </Button>
                        </Jump>
                    </Box>
               </Flex>
                {/** Image block */}
               <Box w="340px" h="290px" bgGradient="linear(to-b,#FBB6CE, #E6FFFA)" borderRadius="0 20px 20px 0">
               </Box>
            </Flex> 
               </Link>
       
    )
}
