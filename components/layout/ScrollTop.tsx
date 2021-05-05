import {  Circle,Icon } from '@chakra-ui/react';
import React from 'react'
import ScrollToTop from "react-scroll-up"
import {FaArrowUp} from 'react-icons/fa';

export default function ScrollTop() {
    const myStyle={
        position: 'fixed',
        bottom: 50,
        right: 30,
        cursor: 'pointer',
        transitionDuration: '.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',
        zIndex: 1000
         }
    return (
        <ScrollToTop showUnder={160} style={myStyle} duration={800}>
            <Circle
                size="50px"
                border="2px"
                borderColor="cyan.500"
                bg="cyan.100"
                >
                <Icon as={FaArrowUp} color="teal.600"/>
            </Circle>
      </ScrollToTop>
      );
}