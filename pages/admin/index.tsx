import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Box,
    Th,
    Text,
    Td,
    Link,
    TableCaption,
    Checkbox,
    Select
} from '@chakra-ui/react';

export default function Orders() {
    const _handleStatusChange = (e) => {};
    const _status = (
        <Select onChange={_handleStatusChange}>
            <option value="2">Pending</option>
            <option value="1">Accepted</option>
            <option value="2">Delivered</option>
            <option value="2">Returning</option>
            <option value="2">Returned</option>
            <option value="3">Processing</option>
        </Select>
    );
    return (
        <Box w="100%" display={{ md: 'flex' }}>
            <Box h="100vh" bg="red.100" width={{ md: '100%', lg: '20%' }} p={5}></Box>
            <Box width={{ base: '100%', lg: '80%' }} className="order-main" p={5} m={5}>
                <Text fontSize={{ md: 'xl', lg: '2xl' }} mb={10}>
                    Orders
                </Text>
                <Table variant="simple" colorScheme="#222222" fontSize="xl">
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Order Id</Th>
                            <Th>Date</Th>
                            <Th>Customer Id</Th>
                            <Th isNumeric>Total Amount</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Checkbox />
                            </Td>
                            <Td>
                                <Link onClick={() => console.log('Clicked me')}>23323222</Link>
                            </Td>
                            <Td>12222</Td>
                            <Td>23rd March</Td>
                            <Td isNumeric>25.4</Td>
                            <Td>{_status}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Checkbox />
                            </Td>
                            <Td>233223222</Td>
                            <Td>23rd April</Td>
                            <Td>2522.4</Td>
                            <Td isNumeric>30122.48</Td>
                            <Td>{_status}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
}
