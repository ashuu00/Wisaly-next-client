import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {Box, Divider, Flex, Heading, Img, Text, AspectRatio, SimpleGrid} from '@chakra-ui/react'

//Components starts here
import Header from '../components/layout/Header'
//Components ending

//List Header
import screenshotList from '../Lists/screenshot'
//List Ends here


export default function Home() {
  return (
    <div>
      <Head>
        <title>Wisaly App</title>
        <meta name="description" content="App for marketing your products using blogs" />
      </Head>
       
        {/**Container for storing all inoformation */}
        <Box   h="80vh" display="flex" alignItems="center" px="2rem" bgGradient="linear(to-b, teal.50, white)">
          <Box w="50%" pl="5%">
          <Img src="homepage/webSetup.svg" w="80%" h="auto" alt="website setup" />
          </Box>
          <Box w="50%"  >
              <Heading as="h2" size="2xl" color="teal.600" mb="3rem">
                Software solution for business and customer relationship
              </Heading>
              <Heading as="h4" size="md" color="teal.500" lineHeight="1.3">
                We help businesses by giving them a platform to share quality content such as
                blogs, designs and testimonials to target their interested customers.
              </Heading>
          </Box>
        </Box>
        {/** Box continuing our features */}
        <Box  h="80vh" display="flex" flexDir="row-reverse" alignItems="center" px="2rem" bgGradient="linear(to-t, teal.50, white)">
          <Box w="50%" pl="5%">
          <Img src="homepage/Designer.svg" w="80%" h="auto" alt="website setup" />
          </Box>
          <Box w="50%"  >
              <Heading as="h2" size="2xl" color="teal.600" mb="3rem">
                Let our Machine Learning model help you
              </Heading>
              <Heading as="h4" size="md" color="teal.500" lineHeight="1.3">
                Our machine learning model would help to find the you the targeted audience,
                and our analytics engine would help to find your target audience that have high chances of 
                buying your product.
              </Heading>
          </Box>
        </Box>
        <Flex w="100%" h="auto" direction="column" p="2rem" justify="center" align="center" bg="teal.50">
          <Heading as="h2" size="2xl" color="teal.700">Website Screenshots</Heading>
          <Divider width="10%" borderColor="teal.300" mt="0.5rem" mb="3rem" borderWidth="3px"/>
          <SimpleGrid columns={2} spacing={15} mx="5%">
            {screenshotList.map(val=>(
                <Box width="80%" textAlign="left" color="teal.700">
                  <Img src={val.src}
                  width="100%" h="auto" alt="title" 
                  borderRadius="35px" boxShadow="xl" />
                
                  <Heading as="h4" size="lg"  mt="1.5rem" mb="1rem">{val.title}</Heading>
                  <Text fontSize="lg">{val.description}</Text>
              </Box>
            ))

          }
          </SimpleGrid>
          
        </Flex>
      </div>
  )
}
