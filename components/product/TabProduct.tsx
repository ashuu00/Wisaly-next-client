import React from 'react'
import {Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useBreakpointValue} from '@chakra-ui/react'
import {FaTruck,FaQuestionCircle} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'
import {BiMessageAltCheck} from 'react-icons/bi'

export default function ProductTab() {
   

    const variant = useBreakpointValue({ base: "sm", md: "md", lg:"xl"})

    const CustomTab=({label, children, ...props})=>{
        return <Tab 
        minWidth="50px"
        mx={2}
        padding={5}
        _selected={{bg:"red.500", color:"white", borderRadius:"8px"}}
        >
            {children}
        </Tab>
    }


    return (
        <React.Fragment>
        <Tabs  isFitted variant="unstyled">
            <TabList >
                <CustomTab label={"Hello"}><Text fontSize={["md","lg","xl","xl"]} ><Icon as={BiMessageAltCheck} /> <br/>Description</Text> </CustomTab>
                <CustomTab label={"Hello"}><Text fontSize={["md","lg","xl","xl"]}><Icon as={FaTruck} /><br/> Shipping</Text></CustomTab>
                <CustomTab label={"Hello"}><Text fontSize={["md","lg","xl","xl"]}><Icon as={FaQuestionCircle} /><br/> Q/A</Text></CustomTab>
            </TabList>
            <TabPanels>
                <TabPanel>
                   <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </React.Fragment>
    )
}
