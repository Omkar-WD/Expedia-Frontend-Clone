import { Box, Container, Flex, Heading, Hide, Text, Icon, Button, Image, Select, Input, UnorderedList, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react";

import { MdPayment, MdPerson } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import { ImCheckmark } from 'react-icons/im'
import { TiArrowRightThick } from 'react-icons/ti'

function Payment() {

const 	hotelData=[
	{
		"id" : "h1",
		"hotelName" : "Sheraton Grand Bengaluru Whitefield",
		"rating" : "4.7",
		"review":"Good",
		"reviewCount":"320",
		"roomCount" : "1",
		"bedCount":"1 King Size",
        "smoking":"Non Smoking",
        "view":"City View",
		"checkIN" : "Fri, 15 Apr",
		"checkOut" : "Sat, 16 Apr",
		"timePeriod" : "1 Night Stay"
	}
]

const [hotel,setHotel] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:8080/hotelData").then(( response ) => {
        console.log("Hotel:", response.data)
        setHotel(response.data[0]);
        
    });
},[]);

  return (
    <>

        <Box bgColor="#f7f9fb" w="100%">
            <Container maxW='container.xl' >
                <Heading mb="10px">
                    Review and book
                </Heading>
                <Container maxW='container.xl'>
                    <Flex gap={10} direction={"column"} >
                        
                        <Box mt="10px" maxW='container.xl' bgColor="white" borderRadius="10px">
                            <Flex gap={1}>
                                <Icon p="10px" h="60px" w="60px" as={MdPayment}/>
                                <Flex direction="column">
                                <Heading as='h4' size='md' mt="10px">
                                    Free cancellation before Thu, 14 Apr, 19:00 (property local time)
                                </Heading>
                                <Text>
                                    You can change or cancel this stay for a full refund if plans change. Because flexibility matters.
                                </Text>
                                </Flex>

                            </Flex>
                        </Box>
                        
                        <Flex gap="10"  direction={{base:'column',md:'row'}} >
                            <Box h="100%"  w={{base:'100%',md:'130%'}} >
                                <Flex gap="10" direction="column">
                                    <Box h="100%" w="100%"  bgColor="white" borderRadius="10px">
                                        <Flex gap={5}>
                                        <Hide below='md'>
                                        <Icon h="35px" w="35px" as={FaLock}/></Hide>
                                            <Flex direction="column" gap={1}>
                                                <Heading ml="5px" as='h4' size='md'>Signed in as</Heading>
                                                <Text ml="5px" w={{base:'65%',md:'100%'}}>Shashikantpatil@gmail.com</Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                    
                                    <Box  bgColor="white" borderRadius="10px">
                                        <Flex gap="2">
                                        <Hide below='md'>
                                            <Icon h="50px" w="40px" as={MdPerson}/></Hide>
                                            <Box>
                                                <Flex direction="column" gap="2">
                                                    <Flex  direction={{base:'column',md:'row'}} mt="10px" gap="5">
                                                        <Heading ml="5px" as='h4' size='md' >
                                                            Room1:
                                                        </Heading>
                                                        <Text ml="5px">2 Adults,</Text>
                                                        <Text ml="5px">1 King Bed,</Text>
                                                        <Text ml="5px">Non-smoking</Text>
                                                    </Flex>
                                                    <Flex  direction={{base:'column',md:'row'}}>
                                                    
                                                    <Text color="green"><Icon color="green" as={ImCheckmark} ml="15px"/>  Breakfast included</Text>
                                                    
                                                    <Text color="green"><Icon color="green" as={ImCheckmark} ml="15px"/>  Free Parking</Text>
                                                    
                                                    <Text color="green"><Icon color="green" as={ImCheckmark} ml="15px"/>  Free WiFi</Text>
                                                    </Flex>
                                                    <Heading ml="5px" as='h4' size='md'>Traveller Name*</Heading>
                                                    <Select ml="5px" placeholder='Shashikant Patil' required w="100%">
                                                        {/* <option value='option1'>Shashikant Patil</option> */}
                                                        <option value='option2'>Add new Traveller</option>
                                                       
                                                    </Select>
                                                    
                                                    <Flex  direction={{base:'column',md:'row'}} gap="20px">
                                                        <Flex direction="column">

                                                            <Heading ml="5px" as='h4' size='md'>First Name*</Heading>
                                                            <Input ml="5px" placeholder='First Name' size='md' />
                                                        </Flex>
                                                        <Flex direction="column">
                                                            <Heading ml="5px" as='h4' size='md'>Last Name*</Heading>
                                                            <Input ml="5px" placeholder='Sur Name' size='md' />
                                                        </Flex>
                                                        
                                                    </Flex>
                                                    <Flex direction="column">
                                                            <Heading ml="5px" as='h4' size='md'>Mobile Number*</Heading>
                                                            <Flex  direction={{base:'column',md:'row'}} gap="20px" mb="10px">
                                                                <Select ml="5px" placeholder="India +91" h="50px" maxW="150px">
                                                                    <option value='option1'>US +1</option>
                                                                    <option value='option2'>Turky +90</option>
                                                                    <option value='option3'>Taiwan +886</option>
                                                                </Select>
                                                                <Input ml="5px" h="50px" maxW="300px"  type='tel' placeholder='Phone Number' />
                                                            </Flex>
                                                    </Flex>

                                                </Flex>
                                            </Box>

                                        </Flex>
                            
                                    </Box>

                                    <Box h="100%" w="100"  bgColor="white" borderRadius="10px" p="10px">
                                        <Flex direction="column" gap="5">
                                            <Heading as='h4' size='md'>
                                                Important information about your booking
                                            </Heading>

                                            <UnorderedList>
                                                <ListItem>Cancellations or changes made after 19:00 (property local time) on 14 Apr 2022 or no-shows are subject to a property fee equal to 100% of the total amount paid for the reservation.</ListItem>
                                                <ListItem>This property offers transfers from the airport (surcharges may apply). To arrange pick-up, guests must contact the property 24 hours prior to arrival, using the contact information on the booking confirmation. This property doesn't offer after-hours check-in. Front desk staff will greet guests on arrival.
                                                        </ListItem>
                                                <ListItem>Please note that BEX Travel Asia Pte Ltd and the hotel will not issue a tax invoice. You will receive a commercial receipt for the purpose of the transaction.</ListItem>
                                            </UnorderedList>
                                            <Text>
                                                By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement Opens in a new window. and Government Travel Advice Opens in a new window. and have reviewed and accept the Rules & Restrictions Opens in a new window. and Terms of Use Opens in a new window..
                                            </Text>
                                            {/* <Button rightIcon={<TiArrowRightThick />} colorScheme='teal' variant='solid' maxW="250px">
                                                Complete Booking
                                            </Button> */}
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>
                            <Flex direction="column"  w={{base:'100%',md:'100%'}} gap="10">
                                <Box  bgColor="white" borderRadius="10px" >
                                    <Box h="250px">
                                        
                                                                            <Image h="250px" w="100%" borderRadius="10px" src="https://images.trvl-media.com/hotels/24000000/23090000/23088600/23088585/w4000h2650x0y4-6c8ea696_l.jpg"/>
                                    </Box>
                                    <Box p="10px">
                                        <Heading as='h3' size='lg'>{hotel.hotelName}</Heading>
                                        <Flex gap="2">
                                            <Heading as='h4' size='md'>{hotel.rating}/5</Heading>
                                            <Text>{hotel.review}</Text>
                                            <Text>({hotel.reviewCount} reviews)</Text>
                                        </Flex>
                                        <Text mt="10px">Guests rated this property {hotel.rating}/5 for cleanliness</Text>
                                        <Flex gap="2">
                                        <Heading  mt="10px" as='h4' size='md'>
                                            {hotel.roomCount} Room:
                                        </Heading>
                                        <Text  mt="10px">,
                                         {hotel.bedCount}, {hotel.smoking},{hotel.view}
                                         </Text>
                                        </Flex>
                                        <Flex gap="1" mt="10px">
                                        <Heading as='h4' size='md'>Check-in:</Heading>
                                        <Text>{hotel.checkIN}</Text>
                                        </Flex>
                                        <Flex>
                                        <Heading as='h4' size='md'>Check-out:</Heading>
                                        <Text>{hotel.checkOut}</Text>
                                        </Flex>
                                        <Text mt="5px">{hotel.timePeriod}</Text>
                                    </Box>  
                                </Box>
                                <Box h="100%" w="100%"  bgColor="white" borderRadius="10px">
                                    <Flex direction="column">
                                        <Heading  p="10px" as='h3' size='lg'>Price details</Heading>
                                        <Box border="1px"></Box>
                                        <Box p="10px"> 
                                        <Flex justify="space-between">
                                            <Text fontSize="20px">1 room x 1 night</Text>
                                            <Text fontSize="20px">Rs10,000.00</Text>
                                        </Flex>
                                        <Flex justify="space-between" mt="10px">
                                            <Text fontSize="20px">Taxes and service fees </Text>
                                            <Text fontSize="20px">Rs1,800.00</Text>
                                        </Flex>
                                        <Box border="1px solid black"></Box>
                                        <Flex justify="space-between">
                                            <Text fontSize="20px">Total</Text>
                                            <Text fontSize="20px">Rs11,800.00</Text>
                                        </Flex>
                                        <Text mt="20px">
                                        Trip total includes GST that Expedia pays to its vendors (e.g. Hotels). We retain our service fee for facilitating your travel reservation. For details please see our terms of use.
                                        </Text>
                                        <Button mt="20px" rightIcon={<TiArrowRightThick />} colorScheme='teal' variant='solid' maxW="250px">
                                                Complete Booking
                                        </Button>
                                        </Box>

                                    </Flex>
                                </Box>
                            </Flex>

                        </Flex>
                    </Flex>
                </Container>
            </Container>
        </Box>
    </>
  )
}

export default Payment
