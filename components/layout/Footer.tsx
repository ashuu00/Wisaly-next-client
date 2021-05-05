import React from 'react'
import {Box,Text, Center, Flex,Icon,  Heading, Link, VStack, HStack, Circle, Input} from '@chakra-ui/react'
import {FaInstagram,FaFacebook, FaYoutube} from 'react-icons/fa'


export default function Footer() {

    //Custom Footer Links
    const CustomLink=({route, title}:{route:string,title:string})=>
        (<Link  to={route?route:"#"} color="green.100" _hover={{color:"blue.100"}} >{title}</Link>)
        

    return (
        <Box as="footer" className="myFooter">
            
            <Box bg="teal.900" color="yellow.50"  pt={5}>
                <Flex justifyContent="space-around" alignItems="flex-start" flexWrap="wrap" p={5}>
                    {/** Contains name and signup button */}
                    <Box w="320px" textAlign={{base:"center",md:"left"}}>
                        <Heading as="h3" size="xl" color="teal.500" mb="1.5rem">Stay Updated</Heading>
                        <Input size="lg" placeholder="Enter Here"/>
                    </Box>
                    {/** Contains contact-us page */}
                    <Box w="320px" textAlign={{base:"center",md:"left"}}>
                    
                        <Text  as="u" fontSize="xl" color="teal.500">CONNECT WITH US</Text>
                        
                        {/* <Link mt={5} _hover={{color:'cyan.100'}}></Link> */}
                        <VStack mt={8} spacing="6px" alignItems={{base:"center",md:"flex-start"}}>
                            <Text color="green.100" fontSize="lg">Phone No: 9650045344</Text>
                            <Link color="green.100" fontSize="lg">Email: ashu28anurag@gmail.com</Link>
                            <Link color="green.100" fontSize="lg">Address: Abhimanyu Apartments <br/> Delhi-110096</Link>
                            <HStack spacing="15px" pt={8}>
                                <Circle size="60px" border="2px solid #C6F6D5">
                                   <Icon as={FaFacebook} w={6} h={6} />
                                </Circle>
                                <Circle size="60px" border="2px solid #C6F6D5">
                                   <Icon as={FaInstagram} w={6} h={6} />
                                </Circle>
                                <Circle size="60px" border="2px solid #C6F6D5">
                                   <Icon as={FaYoutube} w={6} h={6} />
                                </Circle>
                            </HStack>
                        </VStack>
                    </Box>
                    <Box w="320px" textAlign={{base:"center",md:"left"}}>
                        <Text  as="u" fontSize="xl" color="teal.500" >IMPORTANT LINKS</Text>
                            <VStack mt={5} spacing={3} alignItems={{base:"center",md:"flex-start"}}>
                                <CustomLink title="About Us" route="#"/>
                                <CustomLink title="Products" route="#"/>
                                <CustomLink title="Services" route="#"/>
                                <CustomLink title="Careers" route="#"/>
                                <CustomLink title="Blogs" route="#"/>
                                <CustomLink title="Team" route="#"/>
                            </VStack>
                    </Box>
                    <Box w="320px">
                        <Text  as="u" fontSize="xl" color="teal.500" >SUPPORT</Text>
                            <VStack mt={5} spacing={3} alignItems={{base:"center",md:"flex-start"}}>
                                <CustomLink title="Payments" route="#"/>
                                <CustomLink title="Shipping" route="#"/>
                                <CustomLink title="Return Policy" route="#"/>
                                <CustomLink title="Sell with Us" route="#"/>
                                <CustomLink title="FAQ" route="#"/>
                            </VStack>
                    </Box>
                </Flex>
                <Center mt={5} >
                    <Link mx={5} fontSize="sm" color="teal.500" _hover={{color:"green.100"}}>Terms and Conditions</Link>
                    <Link mx={5} fontSize="sm" color="teal.500" _hover={{color:"green.100"}}>Privacy Policy</Link>
                    <Text mx={5} fontSize="sm" color="green.100">Copyright &copy; {new Date().getFullYear()} Wisaly. All Rights Reserved.</Text>

                </Center>
            </Box>
        </Box>
    )
}
