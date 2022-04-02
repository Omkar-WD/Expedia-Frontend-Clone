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
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../Redux/logger/action";

function SignIn() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post(`${API()}/auth/login`, {
        email: userData.email,
        password: userData.password,
      })
      .then((res) => {
        localStorage.setItem("loginUser", JSON.stringify(res.data));
        dispatch(isLogin(res.data));
        console.log(res.data);
      })
      .catch((e) => {
        alert(e.message);
      });
    // setUserData({
    //   email: "",
    //   password: "",
    // });
  };
  return (
    <Flex justify="center" align="center" direction="column" textAlign="center">
      <Heading mt="10" as="h2" size="lg">
        Sign In
      </Heading>
      <FormControl
        w={isLargerThan992 ? "30%" : "70%"}
        borderRadius="lg"
        boxShadow="md"
        p={"3"}
        cursor="pointer"
        mt={5}
      >
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

export default SignIn;
