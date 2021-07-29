import { Box, Heading, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { exploreItemsResponsive } from '@List/responsive';
import styles from '@Styles/Explore.module.scss';
export default function ExploreItemSlider({ title, children }) {
    const [isTablet, isMobile] = useMediaQuery(['(max-width:720px)', '(max-width:480px)']);
    return (
        <Box
            borderRadius="15px"
            px={2}
            py={1}
            my={4}
            w="100%"
            boxShadow="lg"
            border="2px solid"
            borderColor="gray.200">
            <Heading as="h4" size="lg" my={4}>
                {title}
            </Heading>
            <Carousel
                responsive={exploreItemsResponsive}
                infinite
                itemClass={styles.exploreCarouselItems}
                removeArrowOnDeviceType={['tablet', 'mobile']}
                deviceType={isTablet ? 'tablet' : 'desktop'}
                showDots
                ssr>
                {children}
            </Carousel>
        </Box>
    );
}
