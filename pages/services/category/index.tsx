import React from 'react';
import FilterSideBar from '../../../components/Filters/FilterSideBar';
import {
    Flex,
    SimpleGrid,
    Link,
    Box,
    Divider,
    Wrap,
    WrapItem,
    useMediaQuery
} from '@chakra-ui/react';
import ProductCard from '../../../components/Cards/ProductCard';
export default function index() {
    const [isTablet] = useMediaQuery(['(max-width:768px)']);
    return (
        <Flex>
            {!isTablet && <FilterSideBar w="20%" />}
            <Box w="80%" bg=" #ecfff8">
                <Flex
                    justify="space-between"
                    alignItems="baseline"
                    px={5}
                    mt={{ base: 3, md: 4, lg: 5 }}
                    w={{ base: '100%', lg: '70%' }}>
                    <Link fontSize={['sm', 'sm', 'md', 'lg']} fontWeight="bold">
                        {' '}
                        Sort By:
                    </Link>
                    <Link fontSize={['sm', 'sm', 'md', 'lg']} fontWeight="semi-bold">
                        {' '}
                        Price-- Low to High
                    </Link>
                    <Link fontSize={['sm', 'sm', 'md', 'lg']} fontWeight="semi-bold">
                        {' '}
                        Price-- High to Low
                    </Link>
                    <Link fontSize={['sm', 'sm', 'md', 'lg']} fontWeight="semi-bold">
                        {' '}
                        Newwest First
                    </Link>
                </Flex>
                <Divider border="1px solid" borderColor="teal.700" my="0.5rem" w="95%" ml={5} />
                <Wrap w="100%">
                    {Array(16)
                        .fill('')
                        .map((_, idx) => (
                            <WrapItem>
                                <ProductCard key={idx} />
                            </WrapItem>
                        ))}
                </Wrap>
            </Box>
        </Flex>
    );
}
