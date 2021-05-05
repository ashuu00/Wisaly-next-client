import React from 'react'
import {Box, Flex,Heading , Text,Icon,Link, Circle, Center} from '@chakra-ui/react'
import styles from '../../styles/Home.module.scss'
import {FaAddressBook, FaSchool} from 'react-icons/fa'

export default function Card({title,icon, route, ...props}) {
    return (
        <Link 
        color="white"
        borderRadius="4px"
       _hover={{color:'white'}}
        {...props}>
            <Flex alignItems="center" className={styles.leftCard}  width="100%" justify="flex-start"  borderRadius="20px"
            pl="0.5rem" py="1rem" color="gray.700">
                    <Circle size="2.8rem" border="3px solid pink" className={styles.sidebarCircle}>
                        <Center>
                        <Icon as={FaAddressBook}   boxSize="1.2em" />
                        </Center>
                    </Circle>
                <Text fontSize="xl" ml="1rem" fontWeight="bold">{title}</Text>
            </Flex>
        </Link>
    )
}

Card.defaultProps={
    title:"Dashboard",
    icon:FaAddressBook

}