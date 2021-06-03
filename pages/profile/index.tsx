import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import UserMenu from '../../components/layout/UserMenu';

export default function index() {
    return (
        <Flex>
            <Box w="30%" h="100vh" bg="red.300"></Box>
        </Flex>
    );
}

index.Layout = UserMenu;
