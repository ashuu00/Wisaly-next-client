import { Box, Heading, Flex, Text, SimpleGrid } from '@chakra-ui/layout';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BlogCard from '../../components/Blogs/BlogCard';
import CategoryList from '../../components/layout/SubheaderCategory';
import Header from '../../components/layout/Header';
import styles from '../../styles/Blogs.module.scss'
import Link from 'next/link';

export default function index() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1080 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
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
            <Carousel responsive={responsive} itemClass={styles.my_item} >
                {Array(6).fill(' ').map((_, idx)=>(
                  <Link href='/blogs/as' key={idx}>
                    <Flex  key={idx} w="100%" backgroundImage="url(https://picsum.photos/id/211/800/800)"
                      backgroundPosition="center"
                      backgroundSize="cover"
                      _hover={{cursor:'pointer',transform:'scale(1.02)', transition:'all 0.5s ease', 
                      boxShadow:'4px 4px 5px 1px rgba(0,0,0,0.5)'}}
                        h="500px" justify="center" alignItems="flex-end" borderRadius="10px" 
                        boxShadow="md" >
                        <Flex width="80%" 
                          bg="cyan.100"
                          borderRadius="10px" mb="10%" border="3px solid #E6FFFA" 
                          flexDir="column" justify="stretch" p="20px" alignItems="center">
                            <Text fontSize="xl"  color="cyan.800" fontWeight="bold"> This is the title</Text>
                            <Text fontSize="md"  color="cyan.700" fontWeight="medium" > 12 June 2020</Text>
                            <Text fontSize="md" color="cyan.800" fontWeight="bold" > Ashutosh Anurag</Text>
                        </Flex>
                    </Flex>
                  </Link>)
                )
                }
               
                {/* <Box  w="80%" ml="10%" h="500px" borderRadius="10px" boxShadow="lg" bg="red.200">Item 2</Box>
                <Box  w="80%" ml="10%" h="500px" borderRadius="10px" boxShadow="lg" bg="orange.200">Item 3</Box>
                <Box  w="80%" ml="10%" h="500px" borderRadius="10px" boxShadow="lg" bg="pink.200">Item 4</Box>
                <Box  w="80%" ml="10%" h="500px" borderRadius="10px" boxShadow="lg" bg="purple.200">Item 5</Box> */}
            </Carousel>
           
                <CategoryList/>

           
            <SimpleGrid columns={2} columnGap="3rem" mt="5rem">
            <BlogCard/>     
            <BlogCard/>
            <BlogCard/>     
            <BlogCard/>
            </SimpleGrid>
        </Box>
    )
}
