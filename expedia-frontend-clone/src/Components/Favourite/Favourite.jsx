import { Flex } from "@chakra-ui/react";
import { Card } from "../HotelCard/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import API from "../../API";
import { useSelector } from "react-redux";

function Favourite() {
  const [favouriteList, setFavouriteList] = useState([]);
  const isLoginObj = useSelector((store) => store.isLogin.isLogin);
  useEffect(() => {
    let url = `${API()}/favourite/userFavList/${isLoginObj.user._id}`;
    axios.get(url).then((res) => {
      setFavouriteList(res.data.hotelId);
    });
  }, []);

  return (
    <Flex justify="center" gap={5} flexWrap="wrap">
      {favouriteList.length > 0
        ? favouriteList.map((e) => <Card key={e._id} data={e} />)
        : null}
    </Flex>
  );
}

export default Favourite;
