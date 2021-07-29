import React, { useState } from 'react';
import { Box, Image, Button, Center, VStack, Flex } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductImageShow, RecommendResponsive } from '@List/responsive';
import styles from '@Styles/Explore.module.scss';
export default function ProductimagePicker({ ...props }) {
    const [productImages, setProductImages] = useState([
        'https://picsum.photos/id/1/600/400',
        'https://picsum.photos/id/2/600/400',
        'https://picsum.photos/id/3/600/600',
        'https://picsum.photos/id/4/600/600',
        'https://picsum.photos/id/5/600/600',
        'https://picsum.photos/id/6/600/600',
        'https://picsum.photos/id/7/600/600',
        'https://picsum.photos/id/8/600/400',
        'https://picsum.photos/id/9/600/400'
    ]);
    const [currImage, setImage] = useState(productImages[0]);

    return (
        <VStack w="100%" spacing={8} {...props}>
            <Center w="100%" h="400px" bg="gray.100" borderRadius={7}>
                {productImages.map((val) => {
                    return (
                        <Image
                            key={val}
                            borderRadius={8}
                            mr={1}
                            maxH="400px"
                            maxW="100%"
                            src={val}
                            display={currImage === val ? '' : 'none'}
                        />
                    );
                })}
            </Center>
            <Box mt={5} w="100%" position="relative">
                <Carousel
                    responsive={ProductImageShow}
                    dotListClass={styles.exploreDots}
                    renderDotsOutside
                    showDots
                    ssr={true}>
                    {productImages.map((val) => {
                        return (
                            <Box
                                my="auto"
                                borderRadius={8}
                                key={val}
                                w="90%"
                                pt="56.25%"
                                backgroundSize="cover"
                                bgImage={`url(${val})`}
                                onClick={() => setImage(val)}></Box>
                        );
                    })}
                </Carousel>
            </Box>
            <Box justifyContent="space-around" mt={4} w="100%" display="flex">
                <Button colorScheme="green" w="40%" mr={3} mt={4}>
                    Add to Cart
                </Button>
                <Button colorScheme="purple" w="40%" mr={1} mt={4}>
                    Buy Now{' '}
                </Button>
            </Box>
        </VStack>
    );
}
