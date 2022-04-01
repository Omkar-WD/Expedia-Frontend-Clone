import {
  Container,
  Box,
  Image,
  Center,
  Text,
  Stack,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Container maxW="container.xl">
      <Box mt="50" mb="50" p="1">
        <Flex flexWrap="wrap">
          <Box>
            <Image
              w="130px"
              src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
            />
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Company
              </Heading>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/lp/b/about"
                  target="_blank"
                  rel="noreferrer"
                >
                  About us
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://lifeatexpediagroup.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jobs
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://apps.expediapartnercentral.com/en_GB/list?utm_medium=referral&utm_source=wwwexpediacoin-en_GB&utm_campaign=HomePage&utm_contentewd=footer-btn&siteId=27&tpid=27&eapid=0&langId=2057"
                  target="_blank"
                  rel="noreferrer"
                >
                  List your property
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expediagroup.com/partner-with-us/default.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  Partnerships
                </a>
              </Text>
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Explore
              </Heading>
              <Text fontSize="xs" textAlign={"left"} margin-top={"2px"}>
                <a
                  href="https://www.expedia.co.in/India.dx80"
                  target="_blank"
                  rel="noreferrer"
                >
                  India travel guide
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/Destinations-In-India.d80.Hotel-Destinations"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hotels in India
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/Destinations-In-India.d80.Holiday-Rental-Destinations"
                  target="_blank"
                  rel="noreferrer"
                >
                  Holiday rentals in India
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/India.d80.Holidays-City-Breaks"
                  target="_blank"
                  rel="noreferrer"
                >
                  Holiday packages in India
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/Destinations-In-India.d80.Flight-Destinations"
                  target="_blank"
                  rel="noreferrer"
                >
                  Domestic flights
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/Destinations-In-India.d80.Car-Hire-Destinations"
                  target="_blank"
                  rel="noreferrer"
                >
                  Car hire in India
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/Accommodation"
                  target="_blank"
                  rel="noreferrer"
                >
                  All accommodation types
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://travelblog.expedia.co.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Travel blog
                </a>
              </Text>
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Terms and policies
              </Heading>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/lp/lg-privacypolicy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Statement
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/lp/lg-termsofuse"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of use
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.vrbo.com/en-au/legal/traveller-terms-and-conditions"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vrbo terms and conditions
                </a>
              </Text>
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="xs" textAlign={"left"}>
                Help
              </Heading>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/service/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Support
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/service/#/articles/767/34/19798"
                  target="_blank"
                  rel="noreferrer"
                >
                  Change or cancel your booking
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/service/#/articles/767/741/19795"
                  target="_blank"
                  rel="noreferrer"
                >
                  Refund process and timelines
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/service/#/articles/767/34/25812"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a flight using an airline credit
                </a>
              </Text>
              <Text fontSize="xs" textAlign={"left"}>
                <a
                  href="https://www.expedia.co.in/service/#/articles/767/52/19788"
                  target="_blank"
                  rel="noreferrer"
                >
                  International travel documents
                </a>
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Box>
      <Container maxW="container.xl" borderTop="1px" borderTopColor="#c5c7cc">
        <Box p="5">
          <Center>
            <Image
              w="200px"
              src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png"
            />
          </Center>
          <Text fontSize="xs">
            © 2022 Expedia, Inc., an Expedia Group company / Expedia Asia
            Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved.
            Expedia and the Airplane Logo are trademarks or registered
            trademarks of Expedia, Inc.
          </Text>
        </Box>
      </Container>
    </Container>
  );
}

export default Footer;
