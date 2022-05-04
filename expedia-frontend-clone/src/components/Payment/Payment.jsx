import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  Input,
  UnorderedList,
  ListItem,
  useMediaQuery,
  FormControl,
  FormLabel,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { MdPayment } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { TiArrowRightThick } from "react-icons/ti";
import { Card } from "../HotelCard/Card";
import { BoxShadow } from "../Variables";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../API";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function Payment() {
  const [isLoading, setIsLoading] = useState(true);
  const [hotelData, setHotelData] = useState({});
  const stayData = JSON.parse(localStorage.getItem("staySearch"));
  const userData = JSON.parse(localStorage.getItem("loginUser"));

  const Navigate = useNavigate();
  const { id } = useParams();

  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    axios.get(`${API()}/hotel`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i]._id === id) {
          setHotelData([res.data[i]]);
          break;
        }
      }
    });
  }, [id]);
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const toast = useToast();
  let travellers = stayData.adult + stayData.children;
  let reqRooms;
  if (travellers % 2 === 0) {
    reqRooms = Math.floor(travellers / 2);
  } else {
    reqRooms = Math.ceil(travellers / 2);
  }

  let hp = +hotelData[0]?.offerPrice;
  const d1 = stayData.checkin.split("-")[2];
  const d2 = stayData.checkout.split("-")[2];
  const totalNights = d2 - d1;

  console.log(d1, d2, totalNights, hp);

  let totalFare = totalNights * reqRooms * hp;

  // ? Payment Section
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    } else {
      const payData = {
        payment_capture: 1,
        amount: totalFare + 1800,
        currency: "INR",
      };
      const data = await fetch(`${API()}/payment/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payData),
      }).then((t) => t.json());
      const options = {
        // key: __DEV__ ? "rzp_test_LrUd2sYQ0QeGXG" : "PRODUCTION_KEY",
        key: __DEV__ ? "rzp_test_LrUd2sYQ0QeGXG" : "rzp_test_LrUd2sYQ0QeGXG",
        currency: data.currency,
        amount: data.amount * 100,
        order_id: data.id,
        name: "Expedia",
        description: "Thank you for nothing. Please give us some money",
        image:
          "https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2",
        handler: async function (response) {
          const Orderdata = {
            orderCreationId: data.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          const result = await axios
            .post(`${API()}/payment/success`, {
              Orderdata,
              hotelData,
              userData,
              stayData,
              amount: data.amount,
            })
            .then(() => {
              toast({
                title: "Payment Successful , Booking Done , Thank You !!!",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top",
              });
              setTimeout(() => {
                Navigate("/");
              }, 4000);
            })
            .catch(() => {
              toast({
                title: "Payment Failed !!!",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              });
            });
        },
        prefill: {
          name: userData.user.firstName,
          email: "sdfdsjfh2@ndsfdf.com",
          phone_number: "9899999999",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  }

  const TextWithIcon = ({ logo, heading, para }) => {
    return (
      <Flex
        gap={1}
        p="10px"
        direction="row"
        flexWrap="wrap"
        justify={isLargerThan769 ? "left" : "center"}
      >
        <Box m="10px" w="20px">
          <Icon as={logo} h="100%" w="100%" />
        </Box>
        <Flex direction="column" gap="10px">
          <Heading as="h5" size="sm">
            {heading}
          </Heading>
          <Text>{para}</Text>
        </Flex>
      </Flex>
    );
  };

  return (
    <>
      {" "}
      {isLoading ? (
        <Flex justify="center" mt={"5"}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#3182ce"
            size="lg"
          />
        </Flex>
      ) : (
        <Box bgColor="#f7f9fb" w="100%">
          <Container maxW="container.xl">
            <Heading as="h3" size="lg" p={5}>
              Review and book
            </Heading>
            <Container maxW="container.xl">
              <Flex gap={10} direction={"column"}>
                <Box
                  mt="10px"
                  maxW="container.xl"
                  bgColor="white"
                  borderRadius="10px"
                  boxShadow={BoxShadow}
                >
                  <TextWithIcon
                    logo={MdPayment}
                    heading={
                      "Free cancellation before Thu, 14 Apr, 19:00 (property local time)"
                    }
                    para={
                      "You can change or cancel this stay for a full refund if plans change. Because flexibility matters."
                    }
                  />
                </Box>

                <Flex
                  gap="5"
                  direction={{ base: "column", md: "row" }}
                  justify="center"
                  align="center"
                >
                  <Box w={isLargerThan769 ? "60%" : "80%"}>
                    <Flex gap="10" direction="column">
                      <Box
                        h="100%"
                        w="100%"
                        bgColor="white"
                        borderRadius="10px"
                        boxShadow={BoxShadow}
                      >
                        <TextWithIcon
                          logo={FaLock}
                          heading={"Signed in as"}
                          para={isLoginObj.user.email}
                        />
                      </Box>

                      <Box
                        bgColor="white"
                        borderRadius="10px"
                        p="5"
                        boxShadow={BoxShadow}
                      >
                        <Flex gap="2" justify="center" align="center">
                          <Box>
                            <Flex
                              direction="column"
                              gap="2"
                              justify="center"
                              align="center"
                            >
                              <Flex
                                direction={{ base: "column", md: "row" }}
                                p={3}
                                gap={3}
                                justify="center"
                                align="center"
                              >
                                <Flex
                                  verticalAlign={"middle"}
                                  gap={1}
                                  justify="center"
                                  align="center"
                                >
                                  <Box>
                                    <Icon
                                      color="green"
                                      as={ImCheckmark}
                                      w="4"
                                      h="4"
                                    />
                                  </Box>
                                  <Box verticalAlign={"middle"}>
                                    <Text color="green" fontSize="md">
                                      Breakfast included
                                    </Text>
                                  </Box>
                                </Flex>
                                <Flex
                                  verticalAlign={"middle"}
                                  gap={1}
                                  justify="center"
                                  align="center"
                                >
                                  <Box>
                                    <Icon
                                      color="green"
                                      as={ImCheckmark}
                                      w="4"
                                      h="4"
                                    />
                                  </Box>
                                  <Box verticalAlign={"middle"}>
                                    <Text color="green" fontSize="md">
                                      Free Parking
                                    </Text>
                                  </Box>
                                </Flex>
                                <Flex
                                  verticalAlign={"middle"}
                                  gap={1}
                                  justify="center"
                                  align="center"
                                >
                                  <Box>
                                    <Icon
                                      color="green"
                                      as={ImCheckmark}
                                      w="4"
                                      h="4"
                                    />
                                  </Box>
                                  <Box verticalAlign={"middle"}>
                                    <Text color="green" fontSize="md">
                                      Free WiFi
                                    </Text>
                                  </Box>
                                </Flex>
                              </Flex>
                              <FormControl
                                borderRadius="lg"
                                p={"3"}
                                cursor="pointer"
                                // isDisabled="true"
                                isReadOnly="true"
                              >
                                <FormLabel htmlFor="firstName">
                                  Traveller Name
                                </FormLabel>
                                <Input
                                  type="text"
                                  value={
                                    isLoginObj.user.firstName +
                                    " " +
                                    isLoginObj.user.lastName
                                  }
                                />
                                <Flex
                                  direction={{ base: "column", md: "row" }}
                                  gap="20px"
                                >
                                  <Flex direction="column">
                                    <FormLabel htmlFor="firstName">
                                      First Name
                                    </FormLabel>
                                    <Input
                                      type="text"
                                      value={isLoginObj.user.firstName}
                                    />
                                  </Flex>
                                  <Flex direction="column">
                                    <FormLabel htmlFor="firstName">
                                      Last Name
                                    </FormLabel>
                                    <Input
                                      type="text"
                                      value={isLoginObj.user.lastName}
                                    />
                                  </Flex>
                                </Flex>
                              </FormControl>
                              {/* <InputGroup p={3}>
                                <InputLeftAddon children="+91" />
                                <InputGroup
                                  type="tel"
                                  placeholder="phone number"
                                />
                              </InputGroup> */}
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>

                      <Box
                        h="100%"
                        w="100"
                        bgColor="white"
                        borderRadius="10px"
                        p="10px"
                        textAlign="justify"
                        boxShadow={BoxShadow}
                      >
                        <Flex direction="column" gap="5">
                          <Heading as="h4" size="md">
                            Important information about your booking
                          </Heading>

                          <UnorderedList>
                            <ListItem>
                              Cancellations or changes made after 19:00
                              (property local time) on 14 Apr 2022 or no-shows
                              are subject to a property fee equal to 100% of the
                              total amount paid for the reservation.
                            </ListItem>
                            <ListItem>
                              This property offers transfers from the airport
                              (surcharges may apply). To arrange pick-up, guests
                              must contact the property 24 hours prior to
                              arrival, using the contact information on the
                              booking confirmation. This property doesn't offer
                              after-hours check-in. Front desk staff will greet
                              guests on arrival.
                            </ListItem>
                            <ListItem>
                              Please note that BEX Travel Asia Pte Ltd and the
                              hotel will not issue a tax invoice. You will
                              receive a commercial receipt for the purpose of
                              the transaction.
                            </ListItem>
                          </UnorderedList>
                          <Text>
                            By clicking on the button below, I acknowledge that
                            I have reviewed the Privacy Statement Opens in a new
                            window. and Government Travel Advice Opens in a new
                            window. and have reviewed and accept the Rules &
                            Restrictions Opens in a new window. and Terms of Use
                            Opens in a new window.
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                  <Flex
                    direction="column"
                    w={isLargerThan769 ? "40%" : "80%"}
                    align="center"
                    justify="center"
                  >
                    {hotelData.length > 0 ? <Card data={hotelData[0]} /> : null}

                    <Box
                      bgColor="white"
                      borderRadius="10px"
                      mt="10px"
                      boxShadow={BoxShadow}
                    >
                      <Flex direction="column">
                        <Heading as="h3" size="lg" p={3}>
                          Price details
                        </Heading>
                        <Box border="1px"></Box>
                        <Box p="10px" mb="10px">
                          <Flex justify="space-between" gap={5}>
                            <Text fontSize="16px">
                              {reqRooms} room x {totalNights} night
                            </Text>
                            <Text fontSize="16px">Rs {totalFare}</Text>
                          </Flex>
                          <Flex justify="space-between" mb="10px">
                            <Text fontSize="16px">Taxes and service fees </Text>
                            <Text fontSize="16px">Rs 1,800.00</Text>
                          </Flex>
                          <Box border="1px solid black"></Box>
                          <Flex justify="space-between" mt="10px">
                            <Text fontSize="16px">Total</Text>
                            <Text fontSize="16px">Rs {totalFare + 1800}</Text>
                          </Flex>
                          <Text mt="20px" textAlign="justify">
                            Trip total includes GST that Expedia pays to its
                            vendors (e.g. Hotels). We retain our service fee for
                            facilitating your travel reservation. For details
                            please see our terms of use.
                          </Text>
                          <Button
                            mt="20px"
                            rightIcon={<TiArrowRightThick />}
                            colorScheme="teal"
                            variant="solid"
                            maxW="250px"
                            onClick={displayRazorpay}
                          >
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
      )}
    </>
  );
}

export default Payment;
