import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    VStack,
    Checkbox,
    CheckboxGroup,
    Box
  } from "@chakra-ui/react"

export default function FilterAccordion() {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <AccordionButton>
      <Box flex="1" textAlign="left" fontSize="lg">
        Section 1 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme="green" size="lg"   onChange={(value)=>console.log('Got this',value)}>
        <VStack  alignItems="flex-start" pl={4}>
            <Checkbox value="naruto">Naruto</Checkbox>
            <Checkbox value="sasuke">Sasuke</Checkbox>
            <Checkbox value="kakashi">kakashi</Checkbox>
        </VStack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <AccordionButton>
      <Box flex="1" textAlign="left" fontSize="lg">
        Section 2 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    )
}
