import React from 'react'
import ProgressBar from '../components/checkout/progress/BarPorgress'
import { Box, Heading, Image,
    Table,
    Thead,
    Tbody,
    Text,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    Flex,
    Select,
    Spacer,
    useBreakpointValue,
    Divider} from '@chakra-ui/react'


export default function checkout() {
    const tableBreak=useBreakpointValue({base:'sm',lg:'md'})
    return (
        <Box>
            <Box display={{md:'flex'}} mt={5} bg="white">
                <Box p={5} mr={3} width={{base:'100%',md:'65%'}}>
                    <Heading as="h3" size="2xl" my={3}>Items For Checkout</Heading>
                    <Box bg="cyan.400">
                        {Array(6).fill(' ').map((_,idx)=>{
                            return(
                                <Box w="100%" bg="gray.50" px={5} pt="2rem" key={idx}>
                                    <Flex >
                                        <Image boxSize="150px" src="https://picsum.photos/id/242/100/100"/>
                                        <Spacer/>
                                        <Box p={3} >
                                            <Text fontSize={["lg","xl","2xl"]} fontWeight="bold">Rs 1233</Text>
                                            <Text mt={4} fontSize={["md","lg","xl"]}>Title of the Item</Text>
                                        </Box>
                                    </Flex>
                                    <Divider border="2px solid" w="95%" ml="2.5%" mt="2rem" borderColor="gray.700"/>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
               
                <Box p={5} width={{base:'100%',md:'30%'}}>
                    <Heading as="h3" size="lg" mt={3}>Total</Heading>
                    <Box>
                        <Table variant="simple" colorScheme="teal" size={tableBreak}  >
                            <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Tbody>
                                <Tr>
                                    <Td><Text fontWeight="bold"  my={1}>Sub-Total</Text></Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td><Text fontWeight="bold" my={1}>Dicounts/Offers</Text></Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td><Text fontWeight="bold" my={1}>Delivery Charges</Text></Td> 
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th><Text fontWeight="bold" fontSize="lg" my={2}>Total Amount</Text></Th>
                                    <Th isNumeric fontSize="lg">233</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                        <Button colorScheme="green" w="90%" ml="5%" my={2}>Checkout</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
