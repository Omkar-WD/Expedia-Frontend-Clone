import React, { useState } from "react";
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
} from "@chakra-ui/react";

function SignUp() {
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post(`${API()}/auth`, {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        alert("hey");
        console.log(e);
      });
    setUserData({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    });
  };
  return (
    <Flex justify="center" align="center" direction="column" textAlign="center">
      <Heading mt="10" as="h2" size="lg">
        Sign Up
      </Heading>
      <FormControl
        w={isLargerThan992 ? "30%" : "70%"}
        borderRadius="lg"
        boxShadow="md"
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
  );
}

export default SignUp;
