import React, { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Container,
  Box,
  useMediaQuery,
  Input,
  InputGroup,
  InputLeftAddon,
  Flex,
  Button,
  Center,
  Heading,
  InputLeftElement,
  Checkbox,
  Text,
  Stack,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { Card } from "../HotelCard/Card";

function ListView() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/citiesData").then((res) => {
      setArr(res.data);
    });
  }, []);

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan492] = useMediaQuery("(min-width: 492px)");
  return (
    <>
      <Container maxW="container.xl" mt="3">
        <Center>
          <Flex w={isLargerThan768 ? "50%" : "90%"} gap="2" direction="column">
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
              <Input placeholder="Enter a location" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
              <Input type="date" placeholder="Basic usage" />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
              <Input type="date" placeholder="Basic usage" />
            </InputGroup>
            <Button colorScheme="blue">Search</Button>
          </Flex>
        </Center>
      </Container>
      <Box w="100%" backgroundColor="#f8f5f4" marginTop="50">
        <Container maxW="container.xl" mt="3">
          <Flex justify="center">
            {isLargerThan768 ? (
              <Box w="27%">
                <Box w="100%" align="left" mt={5} mb={5}>
                  <Heading as="h6" size="md" mt={5} mb={5}>
                    Search for an activity
                  </Heading>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Search2Icon color="black" />}
                    />
                    <Input
                      w="40%"
                      type="text"
                      backgroundColor="white"
                      placeholder="Enter a keyword"
                      borderColor="black"
                    />
                  </InputGroup>
                </Box>
                <Box w="100%" align="left" mt={5} mb={5}>
                  <Heading size="md" mb={2}>
                    Filter by
                  </Heading>
                  <Heading size="sm" mb={2}>
                    Cleaning and safety practices
                  </Heading>
                  <Checkbox defaultIsChecked borderColor="black">
                    <Text size="xs">Enhanced cleaning</Text>
                  </Checkbox>
                  <Text>
                    Activity suppliers taking additional steps to clean and
                    sanitise
                  </Text>
                </Box>
                <Box w="100%" align="left" mt={5} mb={5}>
                  <Heading size="sm" mb={2}>
                    Traveller rating
                  </Heading>
                  <RadioGroup>
                    <Stack>
                      <Radio
                        backgroundColor="white"
                        value="1"
                        size="sm"
                        borderColor="black"
                      >
                        Any
                      </Radio>
                      <Radio
                        backgroundColor="white"
                        value="2"
                        size="sm"
                        borderColor="black"
                      >
                        Wonderful 4.5+
                      </Radio>
                      <Radio
                        backgroundColor="white"
                        value="3"
                        size="sm"
                        borderColor="black"
                      >
                        Very good 4+
                      </Radio>
                      <Radio
                        backgroundColor="white"
                        value="4"
                        size="sm"
                        borderColor="black"
                      >
                        Good 3.5+
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <Box w="100%" align="left" mt={5} mb={5}>
                  <Heading size="sm" mb={2}>
                    Recommendations
                  </Heading>
                  <Stack direction="column">
                    <Checkbox borderColor="black">Free cancellation</Checkbox>
                    <Checkbox borderColor="black" isDisabled>
                      Deals
                    </Checkbox>
                    <Checkbox borderColor="black">Family-friendly</Checkbox>
                    <Checkbox borderColor="black" isDisabled>
                      New on Expedia
                    </Checkbox>
                    <Checkbox borderColor="black">
                      Selective hotel pickup
                    </Checkbox>
                  </Stack>
                </Box>
                <Box w="100%" align="left" mt={5} mb={5}>
                  <Heading size="sm" mb={2}>
                    Start time
                  </Heading>
                  <Stack direction="column">
                    <Checkbox borderColor="black">
                      6:00 - 12:00 (morning)
                    </Checkbox>
                    <Checkbox borderColor="black">
                      12:00 - 17:00 (afternoon)
                    </Checkbox>
                    <Checkbox borderColor="black">
                      17:00 - 0:00 (evening)
                    </Checkbox>
                    <Checkbox borderColor="black">Anytime</Checkbox>
                  </Stack>
                </Box>
                <Box w="100%" align="left" mt={5} mb={5}>
                  <Heading size="sm" mb={2}>
                    Duration
                  </Heading>
                  <Stack direction="column">
                    <Checkbox borderColor="black">Less than 1 hour</Checkbox>
                    <Checkbox borderColor="black">1 to 4 hours</Checkbox>
                    <Checkbox borderColor="black">4 hours to 1 day</Checkbox>
                    <Checkbox borderColor="black">More than 1 day</Checkbox>
                  </Stack>
                </Box>
              </Box>
            ) : null}
            <Box w={isLargerThan768 ? "70%" : "90%"}>
              <Flex justify="right" p={3}>
                <Select placeholder="Select option" w="20%" bgColor={"white"}>
                  <option value="option1">sort by rating</option>
                  <option value="option2">sort by price</option>
                  <option value="option3">sort by review</option>
                </Select>
              </Flex>
              <Flex direction="row" flexWrap="wrap" justify="center" gap={3}>
                {arr.map((e) => (
                  <Card key={e.id} data={e} />
                ))}
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default ListView;
