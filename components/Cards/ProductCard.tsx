import { Box, Image, Flex, Badge, Text, Button, useBreakpointValue, Spacer } from "@chakra-ui/react";



export default function Example() {
  const variant = useBreakpointValue({ base: "sm", md: "md",lg:"lg"})
  //const dispatch = useDispatch()

  
  return (
    
    <Box p={{base:"1",md:"3",lg:"5"}} 
    mx={4} my={5} maxW="320px" 
    borderWidth="1px" bg="gray.50" borderRadius="md">
      <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      <Flex pt={["1","2","3"]} pl={["1","2","3"]} alignItems="baseline">
        <Badge colorScheme="pink" >30% Off</Badge>
        <Text
          ml={1}
          textTransform="uppercase"
          fontSize={{base:"xs",md:"sm"}}
          fontWeight="bold"
          color="pink.800"
          >
          2 Days Left
        </Text>
      </Flex>
      <Text mt={2} fontSize={["sm","lg","xl"]} fontWeight="semibold" lineHeight="short">
        Modern, High Variety Plants for your gardening needs!
      </Text>
      <Flex mt={1} align={{base:"center",lg:"baseline"}} justify="center" direction={{base:"column",lg:"row"}}>
      <Text mt={{base:"1",md:"2",lg:"2.5"}} fontSize={["sm","lg","xl","2xl"]} color="green.400" fontWeight="bold">Rs 119.00</Text>
        <Text ml={1} fontSize={{base:"xs",md:"sm"}} as="s" color="red.500">
            Rs 300.00
        </Text>
      </Flex>
      <Flex mt={1} align="baseline" justify="flex-start">
        <Button colorScheme="teal" mx="auto" className="addCart" fontSize={["xs","sm","md"]} size={variant} zIndex="200">
          Add Cart 
        </Button>
        <Spacer/>
        <Button colorScheme="pink" mx="auto" className="addCart" fontSize={["xs","sm","md"]} size={variant} zIndex="200">
          Buy Now 
        </Button>
      </Flex>
    </Box>
    
  );
}