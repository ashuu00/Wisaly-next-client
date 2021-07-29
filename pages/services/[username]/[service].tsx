import { Box, Flex, Text, Heading, VStack, Divider, useMediaQuery } from '@chakra-ui/react';
import ImageDisplay from '@Component/Blocks/ImageWithSlider';
import PlansTab from '@Component/services/PlanTab';
import React from 'react';
import RatingStats from '@Component/Blocks/RatingStats';
import UserInfoCard from '@Component/user/UserInfoCard';
import MobileHeader from '@Component/layout/HeaderMobile';
export default function service() {
    const [isTablet] = useMediaQuery(['(max-width:768px)']);
    return (
        <Box p={{ base: 2, sm: 4, md: 6, lg: 8 }} position="relative">
            <MobileHeader />
            <Heading as="h1" size="lg" mb={4}>
                Title for the service
            </Heading>
            <Flex flexDir={{ base: 'column', lg: 'row' }}>
                <Box w={{ base: '100%', md: '50%', lg: '60%' }}>
                    <ImageDisplay />

                    <VStack spacing={8} w="100%" mt={8}>
                        {isTablet && (
                            <Box w={{ base: '100%', md: '50%', lg: '40%' }}>
                                <PlansTab label="Plans" />
                            </Box>
                        )}
                        <Box w={{ base: '100%' }}>
                            <Text fontSize="3xl" fontWeight="bold">
                                About the author
                            </Text>
                            <Divider mb={4} w="100%" />
                            <UserInfoCard
                                pic_url="as"
                                name="Ashutosh Anurag"
                                bio="Nothing much"
                                button="Know More"
                            />
                        </Box>
                        <RatingStats isTablet={isTablet} />
                    </VStack>
                </Box>
                {!isTablet && (
                    <Box w={{ base: '100%', md: '50%', lg: '40%' }} ml={6}>
                        <PlansTab label="Plans" />
                    </Box>
                )}
            </Flex>
        </Box>
    );
}
