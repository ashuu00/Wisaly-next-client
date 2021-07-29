import { Box, Img, Flex, Button, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

export default function ImageExplore({ img_url, title }) {
    return (
        <Box mb="3rem">
            <Box
                w="320px"
                boxShadow="xl"
                h="auto"
                position="relative"
                _hover={{ boxShadow: '2xl', transform: 'scale(1.02)', transition: 'all 0.5s ease' }}
                borderRadius="20px"
                _active={{ transform: 'rotateY(180deg)' }}>
                {/** Image that would be shown */}
                <Img
                    src={img_url}
                    zIndex={0}
                    w="100%"
                    h="auto"
                    alt="Explore Image"
                    borderRadius="20px"
                />

                {/** Overlay for the buttons */}
                <Flex
                    pos="absolute"
                    zIndex={1}
                    justify="flex-start"
                    alignItems="flex-end"
                    p="1.5rem"
                    width="100%"
                    h="100%"
                    borderRadius="20px"
                    bg="rgba(0,0,0,0.5)"
                    opacity={0}
                    top={0}
                    left={0}
                    transition="0.75s ease"
                    _hover={{ cursor: 'pointer', opacity: '1' }}>
                    <Button colorScheme="orange">Show Details </Button>
                    <Spacer />
                    <Button colorScheme="pink">Know More</Button>
                </Flex>
            </Box>
            <Text my={1} fontSize="md" fontWeight="medium">
                {title}
            </Text>
        </Box>
    );
}
