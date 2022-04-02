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
  useCounter,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Counter } from '../Counter';

function Main() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [isLargerThan492] = useMediaQuery('(min-width: 492px)');

  const counter = useCounter({
    max: 10,
    min: 0,
    step: 1,
  });

  const Stays = () => {
    const [stayData, setStayData] = useState({
      city: '',
      checkin: '',
      checkout: '',
      room: 1,
      adult: 1,
      children: 1,
    });

    const onChangeInput = (e) => {
      const { id, value } = e.target;
      console.log(id, value);
      setStayData({ ...stayData, [id]: value });
    };

    const onIncrementCounter = (e) => {
      let { id, value } = e.target;
      if (value >= 10) {
        return false;
      }
      value = parseInt(value);
      console.log(value, typeof value);
      setStayData({ ...stayData, [id]: value + 1 });
    };

    const onDecrementCounter = (e) => {
      let { id, value } = e.target;
      if (
        (id == 'room' && stayData.room <= 1) ||
        (id == 'adult' && stayData.adult <= 1)
      ) {
        return false;
      }
      if (value <= 0) {
        return false;
      }
      value = parseInt(value);
      console.log(value, typeof value);
      setStayData({ ...stayData, [id]: value - 1 });
    };

    const redirect = (e) => {
      console.log(`redirecting to /stays/${stayData.city}`);
    };

    return (
      <>
        <Flex
          flexWrap='wrap'
          justify='space-between'
          gap='2'
          w={isLargerThan768 ? '50%' : '90%'}
        >
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Going to' : 'GT'} />
            <Input
              value={stayData.city}
              type='text'
              id='city'
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder='Enter a location'
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Check-in' : 'CI'} />
            <Input
              value={stayData.checkin}
              id='checkin'
              onChange={(e) => {
                onChangeInput(e);
              }}
              type='date'
              placeholder='Basic usage'
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Check-out' : 'CO'} />
            <Input
              value={stayData.checkout}
              id='checkout'
              onChange={(e) => {
                onChangeInput(e);
              }}
              type='date'
              placeholder='Basic usage'
            />
          </InputGroup>
          <InputGroup>
            <Popover>
              <PopoverTrigger>
                <Button>
                  Travellers :-{' '}
                  {isLargerThan492
                    ? ` ${stayData.room} room , ${
                        stayData.adult + stayData.children
                      } travellers`
                    : `${stayData.room}R ,  ${
                        stayData.adult + stayData.children
                      }T`}
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Travellers</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Flex align='center' gap='4' justify='space-between'>
                      <Text>Room</Text>
                      <HStack w='150px' m={2}>
                        <Button
                          id='room'
                          value={stayData.room}
                          onClick={(e) => {
                            onIncrementCounter(e);
                          }}
                        >
                          +
                        </Button>
                        <Input m={2} value={stayData.room} readOnly={true} />
                        <Button
                          id='room'
                          value={stayData.room}
                          onClick={(e) => {
                            onDecrementCounter(e);
                          }}
                        >
                          -
                        </Button>
                      </HStack>
                    </Flex>
                    <Flex align='center' gap='4' justify='space-between'>
                      <Text>Adults </Text>
                      <HStack w='150px' m={2}>
                        <Button
                          id='adult'
                          value={stayData.adult}
                          onClick={(e) => {
                            onIncrementCounter(e);
                          }}
                        >
                          +
                        </Button>
                        <Input m={2} value={stayData.adult} readOnly={true} />
                        <Button
                          id='adult'
                          value={stayData.adult}
                          onClick={(e) => {
                            onDecrementCounter(e);
                          }}
                        >
                          -
                        </Button>
                      </HStack>
                    </Flex>
                    <Flex align='center' gap='4' justify='space-between'>
                      <Text>Children</Text>
                      <HStack w='150px' m={2}>
                        <Button
                          id='children'
                          value={stayData.children}
                          onClick={(e) => {
                            onIncrementCounter(e);
                          }}
                        >
                          +
                        </Button>
                        <Input
                          m={2}
                          value={stayData.children}
                          readOnly={true}
                        />
                        <Button
                          id='children'
                          value={stayData.children}
                          onClick={(e) => {
                            onDecrementCounter(e);
                          }}
                        >
                          -
                        </Button>
                      </HStack>
                    </Flex>
                  </PopoverBody>
                  <PopoverFooter>
                    <Button w='100%' colorScheme='blue'>
                      Done
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </InputGroup>
        </Flex>
        <Button
          colorScheme='blue'
          onClick={(e) => {
            redirect(e);
          }}
        >
          Search
        </Button>
      </>
    );
  };

  const Packages = () => {
    return (
      <>
        <Flex
          flexWrap='wrap'
          justify='space-between'
          gap='2'
          w={isLargerThan768 ? '50%' : '90%'}
        >
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? 'Leaving from' : 'LF'}
            />
            <Input placeholder='Enter a location' />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Going to' : 'GT'} />
            <Input placeholder='Enter a location' />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Check-in' : 'CI'} />
            <Input type='date' placeholder='Basic usage' />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Check-out' : 'CO'} />
            <Input type='date' placeholder='Basic usage' />
          </InputGroup>
        </Flex>
        <Button colorScheme='blue'>Search</Button>
      </>
    );
  };

  const Cars = () => {
    return (
      <>
        <Flex
          flexWrap='wrap'
          justify='space-between'
          gap='2'
          w={isLargerThan768 ? '50%' : '90%'}
        >
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Pick-up' : 'PL'} />
            <Input placeholder='Enter a location' />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? 'Pick-up date' : 'PD'}
            />
            <Input type='date' />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? 'Drop-off date' : 'DD'}
            />
            <Input type='date' placeholder='Basic usage' />
          </InputGroup>
        </Flex>
        <Button colorScheme='blue'>Search</Button>
      </>
    );
  };

  const Flights = () => {
    return (
      <>
        <Flex
          flexWrap='wrap'
          justify='space-between'
          gap='2'
          w={isLargerThan768 ? '50%' : '90%'}
        >
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? 'Leaving from' : 'LF'}
            />
            <Input placeholder='Enter a location' />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Going to' : 'GT'} />
            <Input placeholder='Enter a location' />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Check-in' : 'CI'} />
            <Input type='date' placeholder='Basic usage' />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? 'Check-out' : 'CO'} />
            <Input type='date' placeholder='Basic usage' />
          </InputGroup>
        </Flex>
        <Button colorScheme='blue'>Search</Button>
      </>
    );
  };

  return (
    <Container maxW='container.xl'>
      <Box
        border='1px'
        borderColor='gray.200'
        borderRadius='10px'
        overflow={'hidden'}
        marginTop='50'
        boxShadow='md'
      >
        <Tabs align='center'>
          <TabList w='90%'>
            <Flex
              flexWrap='wrap'
              justify='center'
              gap={isLargerThan768 ? '2' : null}
            >
              <Tab
                _selected={{
                  boxShadow: 'none',
                  borderBottom: '2px solid blue',
                }}
                _hover={{ borderBottom: '1px solid blue' }}
              >
                Stays
              </Tab>
              <Tab
                _selected={{
                  boxShadow: 'none',
                  borderBottom: '2px solid blue',
                }}
                _hover={{ borderBottom: '1px solid blue' }}
              >
                Flights
              </Tab>
              <Tab
                _selected={{
                  boxShadow: 'none',
                  borderBottom: '2px solid blue',
                }}
                _hover={{ borderBottom: '1px solid blue' }}
              >
                Cars
              </Tab>
              <Tab
                _selected={{
                  boxShadow: 'none',
                  borderBottom: '2px solid blue',
                }}
                _hover={{ borderBottom: '1px solid blue' }}
              >
                Packages
              </Tab>
              <Tab
                _selected={{
                  boxShadow: 'none',
                  borderBottom: '2px solid blue',
                }}
                _hover={{ borderBottom: '1px solid blue' }}
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
