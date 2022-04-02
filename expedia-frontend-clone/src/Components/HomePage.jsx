import React from 'react'
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Flex,
    Button,
    ButtonGroup,
    Heading,
    Image,
    Select,
    Input,
    InputGroup,
    InputLeftAddon,
    Container,
    fit,
    useMediaQuery
  } from '@chakra-ui/react';

export default function HomePage() {

  return (
    <VStack gap="100px">

            <Container maxW='container.xl' mt="100px" borderRadius="10px"
                bgImage="url('https://a.travel-assets.com/travel-assets-manager/ux-887/Global-HP-Hero-928x398.jpg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                
                >
                    <Flex h="100%" direction="column" mt="5%">
                        <Heading as='h1' color="white" fontSize="40px">Save instantly with Expedia Rewards</Heading>
                        <Text color="white" fontSize="20px" w="50%">You can enjoy access to perks like Member Prices, saving you 10% or more on select hotels. Terms may apply.</Text> 
                        <Text color="white" fontSize="20px">You can enjoy access to perks like Member Prices, saving you 10% or more on select hotels. Terms may apply.</Text>

                        <Link href='#' mb="5%" mt="2%" w="200px" size='lg'>
                        <Button mb="5%" mt="2%" w="200px" colorScheme='blue' size='lg'>See Member Prices</Button>
                        </Link> 
                    </Flex>
            </Container >
            {/* Next Container */}
            
            <Container maxW='container.xl' borderRadius="10px"
                bgImage="url('https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                >
                <Flex flexDirection="column" w="60%" ml="2%" mt="18%">
                    <Heading as='h3' color="black" fontSize="20px">Plan ahead and save</Heading>
                    <Heading as='h3' color="black" fontSize="20px">Book 60 days in advance for 20% off seletct stays.</Heading>
                </Flex>
            </Container>
        {/* </Container> */}
    </VStack>

  )
}
