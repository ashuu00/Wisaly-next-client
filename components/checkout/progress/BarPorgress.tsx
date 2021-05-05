import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar"
import {Icon, Text,Box, Circle} from "@chakra-ui/react"
import {FaCheck,FaCircle} from "react-icons/fa"
export default function StepProgress() {
    const Completed=()=>(<Circle bg="green.200" p={2}>
    <Icon as={FaCheck}/>
    </Circle>)
    const Unfinished=()=>(<Circle bg="gray.400" p={2}>
    <Icon as={FaCircle} color="gray.300"/>
    </Circle>)

    
    return (
       
        <ProgressBar
        percent={75}
        fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
         {/** This is the progress bar, with transitions */}
        <Step transition="scale">
          {({ accomplished }) => (
            accomplished?(<Completed/>)
            :(<Unfinished/>)
          )}
        </Step>
        <Step transition="scale">
        {({ accomplished }) => (
            accomplished?(<Completed/>)
            :(<Unfinished/>)
          )}
        </Step>
        <Step transition="scale">
        {({ accomplished }) => (
            accomplished?(<Completed/>)
            :(<Unfinished/>)
          )}
        </Step>
      </ProgressBar>
    )
    
}
