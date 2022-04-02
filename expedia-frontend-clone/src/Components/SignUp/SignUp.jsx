import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../../API";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Flex,
  Heading,
  useMediaQuery,
  useToast,
  Spinner,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { BoxShadow } from "../Variables";

function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const toast = useToast();
  const Navigate = useNavigate();
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API()}/auth`, {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
      })
      .then((res) => {
        setTimeout(() => {
          Navigate("/signin");
        }, 3000);
        setUserData({
          email: "",
          firstName: "",
          lastName: "",
          password: "",
        });
        toast({
          title: "Signup Successfull !!!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((e) => {
        toast({
          title: "Something Went Wrong !!!",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };
  return (
    <>
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
        <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
        >
          <Heading mt="10" as="h2" size="lg">
            Sign Up
          </Heading>
          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            borderRadius="lg"
            boxShadow={BoxShadow}
            p={"3"}
            cursor="pointer"
            mt={5}
          >
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              value={userData.firstName}
              type="text"
              id="firstName"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Enter a first name"
            />
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              value={userData.lastName}
              type="text"
              id="lastName"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="enter lastname"
            />
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              value={userData.email}
              type="email"
              id="email"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="enter email"
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              value={userData.password}
              id="password"
              onChange={(e) => {
                onChangeInput(e);
              }}
              type="password"
              placeholder="enter password"
            />
            <Button
              w="100%"
              mt={4}
              colorScheme="blue"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Flex>
      )}
    </>
  );
}

export default SignUp;
