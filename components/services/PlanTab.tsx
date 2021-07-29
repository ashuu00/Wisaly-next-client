import {
    Tabs,
    TabList,
    Icon,
    TabPanels,
    TabPanel,
    Tab,
    Box,
    useBreakpointValue,
    Flex,
    Spacer,
    Text,
    HStack,
    Button
} from '@chakra-ui/react';
import React from 'react';
import { BiMessageAltCheck } from 'react-icons/bi';
import { FaTruck, FaQuestionCircle, FaClock, FaUndo } from 'react-icons/fa';
import PlanList from './PlanList';

export default function PlansTab({ label }: { label: string }) {
    const variant = useBreakpointValue({ base: 'sm', md: 'md', lg: 'xl' });

    const CustomTab = ({ label, children, ...props }) => {
        return (
            <Tab
                minWidth="50px"
                padding={5}
                _selected={{ bg: 'red.100', color: 'pink.800', borderRadius: '8px' }}>
                {children}
            </Tab>
        );
    };

    return (
        <Box borderRadius="10px" bg="gray.50" position="sticky" top={4}>
            <Tabs isFitted variant="unstyled">
                <TabList>
                    <CustomTab label={'Hello'}>
                        <Text fontSize={['lg', 'xl', '2xl', '3xl']}>Basic</Text>{' '}
                    </CustomTab>
                    <CustomTab label={'Hello'}>
                        <Text fontSize={['lg', 'xl', '2xl', '3xl']}>Standard</Text>
                    </CustomTab>
                    <CustomTab label={'Hello'}>
                        <Text fontSize={['lg', 'xl', '2xl', '3xl']}>Premium</Text>
                    </CustomTab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box w="100%" px={6}>
                            <Box>
                                <Flex w="100%">
                                    <Text fontSize={['md', 'lg', 'xl']} w="50%">
                                        Hello there is there from getting it here
                                    </Text>
                                    <Spacer />
                                    <Text fontSize={['lg', 'xl', '2xl']}>Rs 2344</Text>
                                </Flex>
                            </Box>
                            <HStack mt={8} w="100%" spacing={4}>
                                <Text fontSize={['md']}>
                                    <Icon as={FaClock} mb={1} /> 3 days delivery
                                </Text>
                                <Text fontSize={['md']}>
                                    <Icon as={FaUndo} mb={1} /> 1 revision
                                </Text>
                            </HStack>
                            <PlanList mt={4} />
                            <Button colorScheme="green" w="100%" mt={4}>
                                Continue Rs 3444
                            </Button>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box bg="pink.100" w="100%" h="250px">
                            Ashu
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box bg="pink.100" w="100%" h="250px">
                            Ashu
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}
