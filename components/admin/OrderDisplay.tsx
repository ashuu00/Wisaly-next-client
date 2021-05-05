import React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr, Box,
    Th, Text,
    Td, Link,
    TableCaption,
    Checkbox,
  } from "@chakra-ui/react"

import StatsBox from './StatsOrder'
import SelectStatus from './StatusOrder'
export default function Orders() {
    return (
       <Box w="100%" display={{md:'flex'}}>
           <Box width={{base:'100%',lg:'80%'}} className="order-main" p={5} m={5}>
                <Text fontSize={{md:'xl',lg:'2xl'}} mb={10}>Orders</Text>
                <Table variant="simple" colorScheme="#222222" fontSize="xl">
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Order Id</Th>
                            <Th >Customer Email</Th>
                            <Th isNumeric>Total Amount</Th>
                            <Th isNumeric>Profit</Th>
                            <Th >Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td><Checkbox/></Td>
                            <Td><Link onClick={()=>console.log("Clicked me")}>23323222</Link></Td>
                            <Td>ashu@anu.com</Td>
                            <Td isNumeric>25.4</Td>
                            <Td isNumeric>30.48</Td>
                            <Td><SelectStatus/></Td>
                        </Tr>
                        <Tr>
                            <Td><Checkbox/></Td>
                            <Td>233223222</Td>
                            <Td>ashu@anurag.in.com</Td>
                            <Td isNumeric>2522.4</Td>
                            <Td isNumeric>30122.48</Td>
                            <Td><SelectStatus/></Td>
                        </Tr>
                    </Tbody>
                </Table>
           </Box>
           <Box h="100vh" bg="red.100" width={{md:'100%',lg:'20%'}} p={5}>
                <Text mt={10} fontSize="xl" fontWeight="bold" color="red.300">OverView</Text>
                <StatsBox title="Orders Today" number="54"/>
                <StatsBox title="Orders Completed" number="34"/>
                <StatsBox title="Pending Orders" number="20"/>
           </Box>
       </Box>
    )
}