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
  Select,
} from "@chakra-ui/react";

function ProfileEdit() {
  const [userData, setUserData] = useState({
    dob: "",
    gender: "select a gender",
    contact: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData({
      dob: "",
      gender: "select a gender",
      contact: "",
      email: "",
      firstName: "",
      lastName: "",
    });
  };
  return (
    <Flex justify="center" align="center" direction="column" textAlign="center">
      <Heading mt="10" as="h2" size="lg">
        Profile Edit
      </Heading>
      <FormControl
        isRequired
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
        <FormLabel htmlFor="dob">Date of Birth</FormLabel>
        <Input
          value={userData.dob}
          type="date"
          id="dob"
          onChange={(e) => {
            onChangeInput(e);
          }}
        />
        <FormLabel htmlFor="contact">Contact</FormLabel>
        <Input
          value={userData.contact}
          type="number"
          id="contact"
          onChange={(e) => {
            onChangeInput(e);
          }}
        />
        <FormLabel htmlFor="gender">Gender</FormLabel>
        <Select
          id="gender"
          onChange={(e) => {
            onChangeInput(e);
          }}
          value={userData.gender}
        >
          <option>select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
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

export default ProfileEdit;
