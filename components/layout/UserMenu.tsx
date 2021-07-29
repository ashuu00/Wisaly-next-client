import React from 'react';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import MenuList from '@List/userMenuList';
import Link from 'next/link';
import { FaAddressBook } from 'react-icons/fa';
export default function UserMenu() {
    return (
        <Flex
            width="100%"
            h="100%"
            ml="5%"
            flexDir="column"
            alignItems="center"
            bg="teal.50"
            color="gray.600">
            {MenuList.map(({ title, link, icon }, idx) => (
                <Link href={link}>
                    <Flex
                        w="100%"
                        py="2rem"
                        pl={8}
                        textAlign="center"
                        alignItems="center"
                        key={title}
                        _hover={{
                            cursor: 'pointer',
                            color: 'white',
                            fontWeight: 'bold',
                            bgGradient: 'linear(to-br,#F687B3,#FFC2D8)'
                        }}>
                        <Icon as={icon} w={10} h={10} />
                        <Text fontSize="lg" ml={4} fontWeight="medium">
                            {title}
                        </Text>
                    </Flex>
                </Link>
            ))}
        </Flex>
    );
}
