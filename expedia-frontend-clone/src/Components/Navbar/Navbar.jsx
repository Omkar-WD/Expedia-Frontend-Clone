import React from "react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { BiWorld } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { MdOutlineFlight, MdOutlineHolidayVillage } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { VscMultipleWindows } from "react-icons/vsc";
import {
  Container,
  Spacer,
  Box,
  Image,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  useMediaQuery,
  Avatar,
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Center,
  Heading,
  Tag,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const isLogin = false;

function Navbar() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 992px)");
  const [isLargerThan576] = useMediaQuery("(min-width: 576px)");
  const Navigate = useNavigate();
  return (
    <>
      <Box
        bgColor="white"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        w="100%"
        zIndex={10}
        borderBottom="1px"
        borderBottomColor="#c5c7cc"
        pos="sticky"
        top="0"
      >
        <Container maxW="container.xl">
          <Stack direction="row">
            <Box p="5">
              <Stack direction="row" spacing={8}>
                <Link to="/">
                  <Image
                    w="130px"
                    src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
                    alt="Dan Abramov"
                  />
                </Link>
                {isLargerThan576 ? (
                  <Menu>
                    <MenuButton>
                      More travel <ChevronDownIcon />
                    </MenuButton>
                    <Portal>
                      <MenuList>
                        <MenuItem icon={<BsBuilding />}>Stays</MenuItem>
                        <MenuItem icon={<MdOutlineFlight />}>Flights</MenuItem>
                        <MenuItem icon={<FaCarSide />}>Cars</MenuItem>
                        <MenuItem icon={<VscMultipleWindows />}>
                          Packages
                        </MenuItem>
                        <MenuItem icon={<MdOutlineHolidayVillage />}>
                          Holiday activities
                        </MenuItem>
                        <MenuItem>Deals</MenuItem>
                        <MenuItem>Groups and meetings</MenuItem>
                        <MenuItem>Mobile</MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                ) : null}
              </Stack>
            </Box>
            <Spacer />
            <Box p="4">
              {isLargerThan1280 ? (
                <Stack direction="row" spacing={8} align="center" p="1">
                  <Text>
                    <Link to="/">
                      <Icon as={BiWorld} w={3.5} h={3.5} />
                      &nbsp; English
                    </Link>
                  </Text>
                  <Text>
                    <Link to="/">Support</Link>
                  </Text>
                  <Text>
                    <Link to="/stays">Trips</Link>
                  </Text>
                  <Text>
                    <Popover>
                      <PopoverTrigger>
                        <Text>{isLogin ? "Omkar" : "Sign in"}</Text>
                      </PopoverTrigger>
                      <Portal>
                        {isLogin ? (
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>
                              <Center mb="2">
                                <Heading size="md">Hi, Omkar</Heading>
                              </Center>
                              <Center mb="2">
                                <Heading as="h6" size="xs">
                                  omkarpasalkar2020@gmail.com
                                </Heading>
                              </Center>
                              <Center mb="2">
                                <Tag variant="solid" colorScheme="blue">
                                  Blue Member
                                </Tag>
                              </Center>
                            </PopoverHeader>
                            <PopoverBody>
                              <Link to="/account">Account</Link>
                              <br />
                              <Link to="/favourite">Lists of favourites</Link>
                              <br />
                              <Text>Feedback</Text>
                            </PopoverBody>
                            <PopoverFooter>
                              <Center>
                                <Button w="100%" colorScheme="blue">
                                  Sign out
                                </Button>
                              </Center>
                            </PopoverFooter>
                          </PopoverContent>
                        ) : (
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                              <Text mt={5}>
                                Members can access discounts and special
                                features
                              </Text>
                              <Button
                                mt={5}
                                w="100%"
                                colorScheme="blue"
                                onClick={() => Navigate("/signin")}
                              >
                                Sign in
                              </Button>
                              <Link to="/signup" mt={5}>
                                <Text>Create a free account</Text>
                              </Link>
                              <Link mt={5} to="/favourite">
                                <Text>Lists of favourites</Text>
                              </Link>
                              <Link to="/reward" mt={5}>
                                <Text>Expedia rewards</Text>
                              </Link>
                            </PopoverBody>
                            <PopoverFooter>
                              <Link to="/feedback" mt={5}>
                                <Text>Feedback</Text>
                              </Link>
                            </PopoverFooter>
                          </PopoverContent>
                        )}
                      </Portal>
                    </Popover>
                  </Text>
                </Stack>
              ) : (
                <Stack direction="row" spacing={8} align="center" p="1">
                  {isLargerThan576 ? null : (
                    <Menu>
                      <MenuButton>
                        <Search2Icon />
                      </MenuButton>
                      <Portal>
                        <MenuList>
                          <MenuItem icon={<BsBuilding />}>Stays</MenuItem>
                          <MenuItem icon={<MdOutlineFlight />}>
                            Flights
                          </MenuItem>
                          <MenuItem icon={<FaCarSide />}>Cars</MenuItem>
                          <MenuItem icon={<VscMultipleWindows />}>
                            Packages
                          </MenuItem>
                          <MenuItem icon={<MdOutlineHolidayVillage />}>
                            Holiday activities
                          </MenuItem>
                          <MenuItem>Deals</MenuItem>
                          <MenuItem>Groups and meetings</MenuItem>
                          <MenuItem>Mobile</MenuItem>
                        </MenuList>
                      </Portal>
                    </Menu>
                  )}
                  <Image
                    w="20px"
                    objectFit="cover"
                    src="https://w7.pngwing.com/pngs/751/12/png-transparent-computer-icons-business-briefcase-suitcase-rectangle-people-suitcase.png"
                    alt="Dan Abramov"
                  />
                  <Popover>
                    <PopoverTrigger>
                      <Avatar
                        size="xs"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Text>
                            Members can access discounts and special features
                          </Text>
                          <br />
                          <Button colorScheme="blue" w="100%">
                            Sign in
                          </Button>
                          <br />
                          <br />
                          <Link to="">Create a free account</Link>
                          <br />
                          <br />
                          <Text>Lists of favourites</Text>
                          <br />
                          <Text>Expedia rewards</Text>
                        </PopoverBody>
                        <PopoverFooter>Feedback</PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Stack>
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
