import React from 'react';
import TabProduct from '../../../components/Blocks/TabContent';
import ProductHeading from '../../../components/product/HeadProduct';
import ImageDisplay from '../../../components/Blocks/ImageWithSlider';
import styles from '@Styles/Blogs.module.scss';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
// // import GalleryPics from '../Gallery/Gallery'
// import CustomBreadCrumb from '../../components/Blocks/CustomBreadCrumb'
import {
    Box,
    Stack,
    Flex,
    Button,
    Link,
    Icon,
    Heading,
    Spacer,
    Divider,
    Center,
    useBreakpointValue,
    useMediaQuery
} from '@chakra-ui/react';

import FeaturedBox from '../../../components/DisplayBox/FeaturedBox';
import RecommendBox from '../../../components/DisplayBox/RecommendCard';
import RatingStats from '@Component/Blocks/RatingStats';

//import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

export default function SingleProduct() {
    const variant = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
    const [isTablet] = useMediaQuery(['(max-width:768px)']);

    return (
        <Box p={[2, 3, 4, 5]} minH="200vh" bg="gray.50" width="100%">
            {/** This is the breadcrumb header here*/}
            <Flex mb={2} alignItems="flex-end">
                <Link
                    variant="outline"
                    fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                    colorScheme="cyan">
                    <Icon as={FaChevronLeft} mr={2} mb={1} />
                    Prev Item
                </Link>
                <Divider
                    orientation="vertical"
                    mx={2}
                    border="1px solid"
                    opacity="1"
                    borderColor="gray.500"
                />
                <Link variant="outline" fontSize="md" colorScheme="cyan">
                    Next Item
                    <Icon as={FaChevronRight} ml={2} mb={1} />
                </Link>
            </Flex>

            {/** Images and about product here] */}
            <Stack
                direction={{ base: 'column', lg: 'row' }}
                fontSize="md"
                position="relative"
                minHeight={{ lg: '60vh' }}>
                <Box width="50%">
                    <ImageDisplay position="sticky" top={0} />
                </Box>
                {/** Right side of the product, containing details */}
                <Box minHeight="100vh" bg="gray.100" w="50%">
                    <ProductHeading title="Brand New Awesome Product for all needs" />

                    <Center>
                        <Heading as="h4" size={variant} my={5}>
                            About This Product
                        </Heading>
                    </Center>
                    <TabProduct />
                    <Box w="90%" ml="5%" className={styles.richTextContent}>
                        <p>
                            It was a cheerful prospect. I asked Perry what he thought about it; but
                            he only shrugged his shoulders and continued a longwinded prayer he had
                            been at for some time. He was wont to say that the only redeeming
                            feature of our captivity was the ample time it gave him for the
                            improvisation of prayers—it was becoming an obsession with him.
                        </p>
                        <h2>Perfect design and code delivered to you</h2>
                        <p>
                            It was a cheerful prospect. I asked Perry what he thought about it; but
                            he only shrugged his shoulders and continued a longwinded prayer he had
                            been at for some time. He was wont to say that the only redeeming
                            feature of our captivity was the ample time it gave him for the
                            improvisation of prayers—it was becoming an obsession with him.
                        </p>
                        <p>
                            It was a cheerful prospect. I asked Perry what he thought about it; but
                            he only shrugged his shoulders and continued a longwinded prayer he had
                            been at for some time. He was wont to say that the only redeeming
                            feature of our captivity was the ample time it gave him for the
                            improvisation of prayers—it was becoming an obsession with him.
                        </p>
                        <ul>
                            <li>This is great</li>
                            <li>This is awseon</li>
                            <li>We ahould try thism roe often to increase vitalyiy</li>
                        </ul>
                        <ol>
                            <li>This is great</li>
                            <li>This is awseon</li>
                            <li>We ahould try thism roe often to increase vitalyiy</li>
                        </ol>
                    </Box>
                </Box>
            </Stack>

            {/** Other contents for user engangement */}
            <FeaturedBox />
            <RecommendBox />
            <RatingStats isTablet={isTablet} />
        </Box>
    );
}
