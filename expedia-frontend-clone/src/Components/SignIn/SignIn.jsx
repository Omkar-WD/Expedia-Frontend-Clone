import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { isLogin } from "../../Redux/logger/action";
import { useNavigate } from "react-router-dom";
import { BoxShadow } from "../Variables";
function SignIn() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API()}/auth/login`, {
        email: userData.email,
        password: userData.password,
      })
      .then((res) => {
        console.log("res", res.data);
        localStorage.setItem("loginUser", JSON.stringify(res.data));
        dispatch(isLogin(res.data));
        setTimeout(() => {
          Navigate("/");
        }, 3000);
        setUserData({
          email: "",
          password: "",
        });
        toast({
          title: "Login Successfull !!!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((e) => {
        toast({
          title: "Login Failed !!!",
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
            Sign In
          </Heading>
          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            borderRadius="lg"
            boxShadow={BoxShadow}
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
      )}
    </>
  );
}

export default SignIn;
