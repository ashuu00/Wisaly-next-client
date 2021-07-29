import {
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
    Heading
} from '@chakra-ui/react';
import React from 'react';

export default function Myaccordion({ ...props }) {
    return (
        <Box {...props}>
            <Heading as="h2" size="lg" my={4}>
                Frequently asked questions
            </Heading>
            <Accordion allowToggle>
                <AccordionItem border="0">
                    <h2>
                        <AccordionButton>
                            <Heading as="h3" size="md" flex="1" textAlign="left">
                                Question put by the user
                            </Heading>
                            <AccordionIcon w={8} h={8} />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Heading as="h3" size="md" flex="1" textAlign="left">
                                Second Question that is put by the user
                            </Heading>
                            <AccordionIcon w={8} h={8} />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}
