import React,{useState} from 'react'
import {Box, Image, Button} from '@chakra-ui/react'

export default function ProductimagePicker() {
    const [productImages,setProductImages]=useState(['https://picsum.photos/id/1/600/600',
                                'https://picsum.photos/id/2/600/600',
                                'https://picsum.photos/id/3/600/600']);
    const [currImage,setImage]=useState(productImages[0])                            

    return (
        <Box display="flex" flexDirection="column" width="100%" minH="60vh" px={5} >
            {productImages.map((val)=>{
                    return (<Image key={val}  mr={1} src={val} display={currImage===val?'':'none'}/>)
                })}
            <Box maxH="70px" mt={5} display="flex">
                {productImages.map((val)=>{
                    return (<Image key={val} h="70px" mr={1} src={val} onClick={()=>setImage(val)}/>)
                })}
            </Box>
            <Box justifyContent="center" w="100%" display="flex">
                <Button colorScheme="green" mr={3} mt={4}>Add to Cart</Button>
                <Button colorScheme="red" mr={1} mt={4}>But Now!    </Button>
            </Box>
        </Box>
    )
}
