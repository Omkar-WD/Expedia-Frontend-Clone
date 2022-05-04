import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Home/Main";
import ListView from "./ListView/ListView";
import DetailView from "./DetailView/DetailView";
import NotFound from "./NotFound";
import Favourite from "./Favourite/Favourite";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import ProfileEdit from "./ProfileEdit/ProfileEdit";
import Payment from "./Payment/Payment";
import Trips from "./PastTrips/Trips";
import Maintainance from "./Maintainance/Maintainance";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/stays" element={<ListView />}></Route>
      <Route path="/stays/:cityName" element={<ListView />}></Route>
      <Route path="/detail-page/:id" element={<DetailView />}></Route>
      <Route path="/favourite" element={<Favourite />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/account" element={<ProfileEdit />}></Route>
      <Route path="/payment/:id" element={<Payment />}></Route>
      <Route path="/trips/" element={<Trips />}></Route>
      <Route path="/feedback/" element={<Maintainance />}></Route>
      <Route path="/rewards/" element={<Maintainance />}></Route>
      <Route path="/support" element={<Maintainance />}></Route>
      <Route path="/language" element={<Maintainance />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
