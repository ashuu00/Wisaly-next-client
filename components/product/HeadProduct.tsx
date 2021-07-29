import {
    Box,
    Flex,
    Heading,
    Input,
    Text,
    InputGroup,
    InputRightElement,
    Button,
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
    useBreakpointValue,
    Avatar,
    AvatarGroup,
    List,
    ListIcon,
    ListItem,
    Divider
} from '@chakra-ui/react';
import React from 'react';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';
import Ratings from 'react-ratings-declarative';
export default function ProductHeading({ title, ...props }) {
    const titleSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
    return (
        <Box {...props} p={5}>
            <Heading as="h1" size={titleSize}>
                {title}
            </Heading>
            <Flex mt={3}>
                <Ratings rating={3.403} widgetDimensions="20px" widgetSpacings="2px">
                    <Ratings.Widget widgetRatedColor="#3233ff" />
                    <Ratings.Widget widgetRatedColor="#3233ff" />
                    <Ratings.Widget widgetRatedColor="#3233ff" />
                    <Ratings.Widget widgetRatedColor="#3233ff" />
                    <Ratings.Widget widgetRatedColor="#3233ff" />
                </Ratings>
                <Text ml={[4, 5, 5, 5]} mt={1} fontSize="md" color="gray.600">
                    (12 ratings)
                </Text>
            </Flex>

            <Flex alignItems="baseline" mt={{ base: 2, md: 3, lg: 3 }}>
                {/* <Text fontSize="3xl" fontWeight="bold">&#8377; 3455</Text> */}
                <Text fontSize="2xl" fontWeight="bold">
                    &#8377; 3455
                </Text>
                <Text fontSize="md" ml={3} color="gray.600" as="s">
                    &#8377; 2333
                </Text>
                <Text
                    fontWeight="semi-bold"
                    mt={{ base: 4, md: 6 }}
                    color="green.400"
                    fontSize="md">
                    (20% Discount)
                </Text>
            </Flex>
            <Flex align="center" my={4}>
                <Box>
                    <AvatarGroup size="md" max={2}>
                        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                    </AvatarGroup>
                </Box>
                <Text ml={4} fontWeight="bold" color="pink.500">
                    11 of your followers have brought from these
                </Text>
            </Flex>
            {/* <Text fontSize="2xl" fontWeight="bold">
                Product Highlights
            </Text>
            <Divider w="40%" border="1px solid" borderColor="teal.700" mb={2} /> */}
            <List spacing={1} mt={8}>
                <ListItem fontWeight="medium" fontSize="lg" justify="center">
                    <ListIcon as={FaCheckCircle} w={5} h={5} color="green.500" />
                    Hello these are the Highlights
                </ListItem>
                <ListItem fontWeight="medium" fontSize="lg" justify="center">
                    <ListIcon as={FaCheckCircle} w={5} h={5} color="green.500" />
                    Created using best quality
                </ListItem>
            </List>

            {/* <Text fontSize="xl" mt={5} fontWeight="semi-bold">
                Check Delivery :{' '}
            </Text> */}
            {/* <InputGroup size="md" width={['16rem', '21rem', '26rem', '30rem']} mt={2}>
                <Input placeholder="Enter Pincode" />
                <InputRightElement width="8rem">
                    <Button h="1.9rem" colorScheme="blue">
                        Check Pin
                    </Button>
                </InputRightElement>
            </InputGroup> */}
        </Box>
    );
}

ProductHeading.defaultProps = {
    title: 'Awesome Product for You!'
};
