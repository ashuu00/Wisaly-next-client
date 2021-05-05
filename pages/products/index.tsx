import { Box, Flex, Heading, Input, Text,InputGroup, InputRightElement, Button,
    NumberInput, NumberInputField, NumberIncrementStepper,
    NumberDecrementStepper, NumberInputStepper} from '@chakra-ui/react'
import React from 'react'
import Ratings from 'react-ratings-declarative'
import 'react-multi-carousel/lib/styles.css';
export default function ProductHeading({title, ...props}) {
return (
    <Box {...props} p={5}>
        <Heading size="2xl">{title}</Heading>
        <Flex mt={3}>
            <Ratings
            rating={3.403}
            widgetDimensions="25px"
            widgetSpacings="15px"
            
            >
                <Ratings.Widget widgetRatedColor="#3233ff" />
                <Ratings.Widget widgetRatedColor="#3233ff" />
                <Ratings.Widget widgetRatedColor="#3233ff" />
                <Ratings.Widget widgetRatedColor="#3233ff" />
                <Ratings.Widget widgetRatedColor="#3233ff" />     
            </Ratings>
            <Text ml={[4,5,5,5]} mt={1} fontSize="md" color="gray.600">
                (12 ratings)
            </Text>
        </Flex>
        <Text fontWeight="semi-bold" mt={{base:4,md:6}} color="green.400" fontSize="2xl">20% Discount</Text>
        <Flex alignItems="baseline" mt={{base:2, md:3, lg:3}}>
            {/* <Text fontSize="3xl" fontWeight="bold">&#8377; 3455</Text> */}
            <Heading as="h4" size="xl" >&#8377; 3455</Heading>
            <Text fontSize="md" ml={3} color="gray.600" as="s">&#8377;  2333</Text>
        </Flex>
        <Flex alignItems="center" mt={3}>
            <Text fontSize="lg">Quantity:</Text>
            <NumberInput defaultValue={15} min={10} max={20}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Flex>
        <Text fontSize="xl" mt={5} fontWeight="semi-bold">Check Delivery : </Text>
        <InputGroup size="md" width={["16rem","21rem","26rem","30rem"]} mt={2}>
            <Input placeholder="Enter Pincode" />
            <InputRightElement width="8rem">
                <Button h="1.9rem" colorScheme="blue">Check Pin</Button>
            </InputRightElement>
        </InputGroup>
   </Box>
)

}

ProductHeading.defaultProps={
title:'Awesome Product for You!'
}