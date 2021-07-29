import { List, ListItem, ListIcon, Box } from '@chakra-ui/react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function PlanList({ ...props }) {
    return (
        <Box {...props}>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
            </List>
        </Box>
    );
}
