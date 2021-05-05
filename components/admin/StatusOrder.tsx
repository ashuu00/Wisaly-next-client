import React,{useState} from 'react'
import {Select, Box} from "@chakra-ui/react"
export default function OrdersSelect(/*curr,setCurr*/) {
    const [curr, setCurr] = useState("");
    const [currColor,setColor]=useState();

    const handleChange=(e)=>{
        setCurr(e.target.value);
        console.table(myColor);
    }

    let myColor={col:"black",bg:"white",border:"white"};
    switch (curr) {
        case "pending":
            myColor.col="purple.700";
            myColor.bg="purple.100";
            myColor.border="purple.700";
            // setColor({...myColor}); 
            break;
        case "shipped":
            myColor.col="blue.700";
            myColor.bg="cyan.100";
            myColor.border="blue.700";
            // setColor({...myColor}); 
            break;
        case "delivered":
            myColor.col="teal.700";
            myColor.bg="teal.100";
            myColor.border="teal.700";
            // setColor({...myColor}); 
            break;
        default:
            break;
    }
    return (
        <Box fontWeight="bold">
            <Select placeholder="Current Status" bg={myColor.bg} color={myColor.col} borderWidth="2px" borderColor={myColor.border} onChange={handleChange}>
                <option value="pending">Pending</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
            </Select>
        </Box>
    )
}