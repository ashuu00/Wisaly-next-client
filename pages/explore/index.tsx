import { Box, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import BlogBussiness from '../../components/Cards/BlogBussiness';
import ProductCard from '../../components/Cards/ProductCard';
import ImageExplore from '@Component/Explore/ImageExplore';
import CategoryList from '../../components/layout/UserMenu';
import Header from '../../components/layout/Header';
import getTokenFromContext from 'functions/getTokenFromContext';
import cookieCutter from 'cookie-cutter';
import { getAllCards } from 'axiosApi/displayCard';
import { Link } from '@chakra-ui/react';

export default function index({ cards, token }) {
    return (
        <Box>
            <SimpleGrid px="40px" mt="3rem" columns={[1, 2, 3, 4]} columnGap={[10, 10, 10, 8]}>
                {cards.map((card, idx) => (
                    <Link href={`/explore/${card.link}`}>
                        <ImageExplore key={card.link} img_url={card.images[0]} title={card.title} />
                    </Link>
                ))}
            </SimpleGrid>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <BlogBussiness />
        </Box>
    );
}

index.getInitialProps = async (ctx) => {
    const token = ctx.req ? getTokenFromContext(ctx, 'jwt') : cookieCutter.get('jwt');
    const allCards = (await getAllCards(0, 10)).data;
    console.log('cards got are', allCards);
    return { cards: allCards, token };
};
