import { Flex } from "@chakra-ui/react";
import { Card } from "../HotelCard/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import API from "../../API";

function Favourite() {
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pumpkin-cake-23112.herokuapp.com/favourite/userFavList`, {
        userId: "624690ee54e299590298b4d5",
      })
      .then((res) => {
        console.log("Data", res);
        // setFavouriteList(res.data);
      });
  }, []);

  return (
    <Flex justify="center" gap={5} flexWrap="wrap">
      {favouriteList.length > 0
        ? favouriteList.map((e) => <Card key={e.id} data={e} />)
        : null}
    </Flex>
  );
}

export default Favourite;
