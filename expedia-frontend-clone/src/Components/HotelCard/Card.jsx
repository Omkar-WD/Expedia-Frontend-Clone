import React, { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Badge,
  Text,
  Heading,
  Spacer,
  Icon,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import API from "../../API";
import { BoxShadow } from "../Variables";
import { useSelector } from "react-redux";

export const Card = ({ data }) => {
  const [isFav, setIsFav] = useState(false);
  const [colorSet, setColorSet] = useState(false);
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  const toast = useToast();
  const handleIconClick = () => {
    {
      isLoginObj.token !== ""
        ? isFav
          ? axios
              .put(`${API()}/favourite`, {
                userId: isLoginObj.user._id,
                hotelId: _id,
              })
              .then((res) => {
                toast({
                  title: "Remove From Favourite !!!",
                  status: "warning",
                  duration: 2000,
                  isClosable: true,
                  position: "top",
                });
                setColorSet(false);
              })
          : axios
              .post(`${API()}/favourite`, {
                userId: isLoginObj.user._id,
                hotelId: _id,
              })
              .then((res) => {
                toast({
                  title: "Added To Favourite !!!",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                  position: "top",
                });
                setColorSet(true);
              })
        : toast({
            title: "Plz Login !!!",
            status: "info",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
    }
    setIsFav(!isFav);
  };
  const {
    _id,
    images,
    city,
    refund,
    shortDescription,
    hotelName,
    offerPrice,
    originalPrice,
    paymentMode,
    roomsLeft,
    review,
    rating,
    reviewCount,
  } = data;

  return (
    <Box
      w="280px"
      h="380px"
      borderWidth="1px"
      borderRadius="lg"
      backgroundColor="white"
      overflow="hidden"
      marginTop="25"
      marginBottom="25"
      cursor="pointer"
      boxShadow={BoxShadow}
      _hover={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
      }}
    >
      <Link to={`/detail-page/${_id}`}>
        <Box>
          <Image src={images} h="200px" />
        </Box>
      </Link>
      <Box p="2">
        <Link to={`/detail-page/${_id}`}>
          <Box
            h="30px"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {hotelName}
          </Box>
        </Link>
        <Box h="20px" d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal" mt="1">
            {city}
          </Badge>
          <Spacer />
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            <Heading as="h6" size="xs">
              {refund}
            </Heading>
          </Box>
          <Spacer />
          <Icon
            as={colorSet ? AiTwotoneHeart : AiOutlineHeart}
            w={5}
            h={5}
            overflow="hidden"
            color={colorSet ? "red" : null}
            onClick={handleIconClick}
          />
        </Box>
        <Link to={`/detail-page/${_id}`}>
          <Box mt="1" h="25px">
            <Box as="span" color="gray.600" fontSize="sm">
              {shortDescription}
            </Box>
          </Box>
          <Box d="flex" alignItems="baseline" mt="1" h="25px">
            <Box>
              <Box as="span" color="gray.600" fontSize="sm">
                {paymentMode}
              </Box>
            </Box>
            <Spacer />
            <Box>
              <Box
                d="flex"
                gap={1}
                alignItems="baseline"
                as="span"
                color="gray.600"
                fontSize="sm"
              >
                <Heading as="h6" size="xs">
                  Rs.{offerPrice}
                </Heading>
                <Text fontSize="xs" as="del">
                  Rs.{originalPrice}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box d="flex" mt="2" alignItems="center" h="25px">
            <Badge borderRadius="full" px="2" colorScheme="teal" mt="1">
              {review}
            </Badge>
            <Spacer />
            <Badge borderRadius="full" px="2" colorScheme="teal" mt="1">
              Rooms Left {roomsLeft}
            </Badge>
          </Box>
          <Box d="flex" mt="2" alignItems="center" h="20px">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Spacer />
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              <Heading as="h6" size="xs">
                {reviewCount} reviews
              </Heading>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
