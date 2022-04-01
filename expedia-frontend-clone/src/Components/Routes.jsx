import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Home/Main";
import ListView from "./ListView/ListView";
import DetailView from "./DetailView/DetailView";
import NotFound from "./NotFound";
import Favourite from "./Favourite/Favourite";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/stays" element={<ListView />}></Route>
      <Route path="/detail-page/:id" element={<DetailView />}></Route>
      <Route path="/favourite" element={<Favourite />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
