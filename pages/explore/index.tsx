import { Box, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import BlogBussiness from '../../components/Cards/BlogBussiness';
import ProductCard from '../../components/Cards/ProductCard';
import ImageExplore from '../../components/Explore/ImageExplore';
import CategoryList from '../../components/layout/UserMenu';
import Header from '../../components/layout/Header';

export default function index() {
    return (
        <Box>
            <SimpleGrid px="40px" mt="3rem" columns={[1, 2, 3, 4]} columnGap={[10, 10, 10, 8]}>
                {Array(7)
                    .fill('')
                    .map((_, idx) => (
                        <ImageExplore key={idx} />
                    ))}
            </SimpleGrid>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <BlogBussiness />
        </Box>
    );
}
