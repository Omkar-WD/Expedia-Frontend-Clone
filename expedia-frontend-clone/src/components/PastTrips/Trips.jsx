import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { BoxShadow } from "../Variables";
function Trips() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const trips = [
    {
      id: 1,
      hotelId: 1,
      hotelName: "Demo Name",
      userId: 2,
      amount: 500,
      rooms: 4,
      nights: 2,
      bookingDate: "2022-12-12",
      checkinDate: "2022-12-12",
      checkoutDate: "2022-12-12",
      transactionId: "123465789",
    },
    {
      id: 2,
      hotelId: 2,
      hotelName: "Demo Name",
      userId: 2,
      amount: 500,
      rooms: 4,
      nights: 2,
      bookingDate: "2022-12-12",
      checkinDate: "2022-12-12",
      checkoutDate: "2022-12-12",
      transactionId: "123465789",
    },
    {
      id: 3,
      hotelId: 3,
      hotelName: "Demo Name",
      userId: 2,
      amount: 500,
      rooms: 4,
      nights: 2,
      bookingDate: "2022-12-12",
      checkinDate: "2022-12-12",
      checkoutDate: "2022-12-12",
      transactionId: "123465789",
    },
    {
      id: 4,
      hotelId: 4,
      hotelName: "Demo Name",
      userId: 2,
      amount: 500,
      rooms: 4,
      nights: 2,
      bookingDate: "2022-12-12",
      checkinDate: "2022-12-12",
      checkoutDate: "2022-12-12",
      transactionId: "123465789",
    },
  ];
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
        <Container maxW="container.xl" mt="10">
          <TableContainer
            border="1px"
            borderColor="gray.200"
            borderRadius="10px"
            marginTop="50"
            boxShadow={BoxShadow}
          >
            <Table variant="simple">
              <Thead>
                <Tr bgColor="#2490fe">
                  <Th color="white">Sr.No</Th>
                  <Th color="white">Hotel Name</Th>
                  <Th color="white">Rooms Book</Th>
                  <Th color="white">Total Nights</Th>
                  <Th color="white">Total Amount</Th>
                  <Th color="white">Booking Date</Th>
                  <Th color="white">Checkin Date</Th>
                  <Th color="white">Checkout Date</Th>
                  <Th color="white">Transaction Id</Th>
                </Tr>
              </Thead>
              <Tbody>
                {trips.map((e) => (
                  <Tr
                    key={e.id}
                    _hover={{
                      bgColor: "#f7f9fb",
                      cursor: "pointer",
                    }}
                  >
                    <Td>{e.hotelId}</Td>
                    <Td>{e.hotelName}</Td>
                    <Td>{e.rooms}</Td>
                    <Td>{e.nights}</Td>
                    <Td>{e.amount}</Td>
                    <Td>{e.bookingDate}</Td>
                    <Td>{e.checkinDate}</Td>
                    <Td>{e.checkoutDate}</Td>
                    <Td>{e.transactionId}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
}

export default Trips;
