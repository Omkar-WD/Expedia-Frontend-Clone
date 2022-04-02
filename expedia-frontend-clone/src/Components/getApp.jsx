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
    useMediaQuery,
    SimpleGrid,
    Hide,Show
    
  } from '@chakra-ui/react';

export default function Practice() {
  return (
      <>
        <Container bgColor="#f8f5f4" overflow="hidden" maxW='container.xl' mt="100px" borderRadius="10px" p="0">

            
            <Flex 
            h={{base:'100%', md:'50%', xl:'25%'}}
            direction={{base:'column',md:'row'}} gap="20px">
            <Box>
                <Image h="400px" width="100%" src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_App_650x514.jpg"/>
            </Box>
            <Box textAlign="left" h={{base:'100%', md:'50%', xl:'25%'}}
            direction={{base:'column',md:'row'}} >
                <Flex direction="column">
                    <Text fontSize="30px" ><b>Members get more on the app</b></Text>
                    <Text fontSize="18px" >Earn double Expedia Rewards points when you book on the app. Plus, get travel alerts and manage your bookings on the go.</Text>
                    <Text mt="10px" fontSize="18px" ><b>Text yourself a download link</b></Text>

                   <Flex h={{base:'100%', md:'50%', xl:'25%'}}
                    direction={{base:'column',md:'row'}} gap="20px"
                    mt="20px" >
                     <Select placeholder="India +91" h="50px" maxW="150px">
                       <option value='option1'>Option 1</option>
                       <option value='option2'>Option 2</option>
                       <option value='option3'>Option 3</option>
                     </Select>
                       <Input h="50px" w="50%"  type='tel' placeholder='Phone Number' />
                       <Button w="200px" mb="10px" colorScheme='blue' size='lg'>Get the app</Button>
                   </Flex>
                   <Text mt="2%" mb="10px" fontSize="12px">
                    By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.
                    </Text>
                </Flex>
            </Box>
            <Hide below='md'>
            <Box ml="20px" mt="20px" p="2%">
                <Image h="300px" w="350px" src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_BNA_HP.png" />
            </Box>
            </Hide>
            </Flex>
            
        </Container>

      </>



  )
}
