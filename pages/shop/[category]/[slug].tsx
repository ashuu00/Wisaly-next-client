import React from 'react'
import TabProduct from '../../../components/product/TabProduct'
import ProductHeading from '../../../components/product/HeadProduct'
import ImageDisplay from '../../../components/product/ImageProduct'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
// // import GalleryPics from '../Gallery/Gallery'
// import CustomBreadCrumb from '../../components/Blocks/CustomBreadCrumb'
import {Box, Stack, Flex, Button, Link, Icon,
    Heading,
    Spacer,
    Divider,
    Center,
    useBreakpointValue} from '@chakra-ui/react'

import FeaturedBox from '../../../components/DisplayBox/FeaturedBox'
import RecommendBox from '../../../components/DisplayBox/RecommendCard'

//import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'


export default function SingleProduct() {

    
    const variant = useBreakpointValue({ base: "md", md: "lg",lg:"xl" });
    
    return (
        <Box p={[2,3,4,5]} minH="200vh" bg="gray.100" width="100%">
            
            {/** This is the breadcrumb header here*/}
            <Flex  mb={2} alignItems="flex-end">
                <Link variant="outline" fontSize={{base:"xs",md:"sm",lg:"md"}} colorScheme="cyan" ><Icon as={FaChevronLeft} mr={2} mb={1}/>Prev Item</Link>
                    <Divider orientation="vertical" mx={2} border="1px solid" opacity="1" borderColor="gray.500"/>
                <Link variant="outline" fontSize="md"  colorScheme="cyan" >Next Item<Icon as={FaChevronRight} ml={2} mb={1}/></Link>
            </Flex>

            {/** Images and about product here] */}
            <Stack direction={{base:"column",lg:"row"}} flexBasis={1} fontSize="md" position='relative'  minHeight={{lg:"60vh"}}>
                <Box width="50%">
                    <ImageDisplay/>
                </Box>
                <Box height="100vh" bg="gray.100" flexGrow={2}>
                    <ProductHeading title="this is is" bg="gray.50" />
                    <Center>
                        <Heading as="h4" size={variant} my={5}>About This Product</Heading>
                    </Center> 
                    <TabProduct/>
                </Box>    
            </Stack>

            {/** Other contents for user engangement */}
            <FeaturedBox/>
            <RecommendBox/>
            
            
        </Box>
    )
}
