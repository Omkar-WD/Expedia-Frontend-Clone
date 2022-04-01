import {
  Container,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  InputGroup,
  InputLeftAddon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  useMediaQuery,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Counter } from "../Counter";

function Main() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan492] = useMediaQuery("(min-width: 492px)");

  const Stays = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
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
          <InputGroup>
            <Popover>
              <PopoverTrigger>
                <Button>
                  Travellers :-{" "}
                  {isLargerThan492 ? " 1 room , 2 travellers" : "1R , 2T"}
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Travellers</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Flex align="center" gap="4" justify="space-between">
                      <Text>Room</Text>
                      <Counter
                        step={1}
                        defaultValue={1}
                        min={1}
                        precision={0}
                      />
                    </Flex>
                    <Flex align="center" gap="4" justify="space-between">
                      <Text>Adults </Text>
                      <Counter
                        step={1}
                        defaultValue={1}
                        min={1}
                        precision={0}
                      />
                    </Flex>
                    <Flex align="center" gap="4" justify="space-between">
                      <Text>Children</Text>
                      <Counter
                        step={1}
                        defaultValue={0}
                        min={0}
                        precision={0}
                      />
                    </Flex>
                  </PopoverBody>
                  <PopoverFooter>
                    <Button w="100%" colorScheme="blue">
                      Done
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </InputGroup>
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };

  const Packages = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Leaving from" : "LF"}
            />
            <Input placeholder="Enter a location" />
          </InputGroup>
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
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };

  const Cars = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Pick-up" : "PL"} />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Pick-up date" : "PD"}
            />
            <Input type="date" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Drop-off date" : "DD"}
            />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };

  const Flights = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Leaving from" : "LF"}
            />
            <Input placeholder="Enter a location" />
          </InputGroup>
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
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };

  return (
    <Container maxW="container.xl">
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="10px"
        overflow={"hidden"}
        marginTop="50"
        boxShadow="md"
      >
        <Tabs align="center">
          <TabList w="90%">
            <Flex
              flexWrap="wrap"
              justify="center"
              gap={isLargerThan768 ? "2" : null}
            >
              <Tab
                _selected={{
                  boxShadow: "none",
                  borderBottom: "2px solid blue",
                }}
                _hover={{ borderBottom: "1px solid blue" }}
              >
                Stays
              </Tab>
              <Tab
                _selected={{
                  boxShadow: "none",
                  borderBottom: "2px solid blue",
                }}
                _hover={{ borderBottom: "1px solid blue" }}
              >
                Flights
              </Tab>
              <Tab
                _selected={{
                  boxShadow: "none",
                  borderBottom: "2px solid blue",
                }}
                _hover={{ borderBottom: "1px solid blue" }}
              >
                Cars
              </Tab>
              <Tab
                _selected={{
                  boxShadow: "none",
                  borderBottom: "2px solid blue",
                }}
                _hover={{ borderBottom: "1px solid blue" }}
              >
                Packages
              </Tab>
              <Tab
                _selected={{
                  boxShadow: "none",
                  borderBottom: "2px solid blue",
                }}
                _hover={{ borderBottom: "1px solid blue" }}
              >
                Things to do
              </Tab>
            </Flex>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stays />
            </TabPanel>
            <TabPanel>
              <Flights />
            </TabPanel>
            <TabPanel>
              <Cars />
            </TabPanel>
            <TabPanel>
              <Packages />
            </TabPanel>
            <TabPanel>
              <Stays />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Main;
