import React from "react";
import CartsComponent from "../components/carts";
import InfoTravel from "../components/InfoTravel";
import Destinos from "../components/Destinos";
import Footer from "../components/Footer";
import MenuResposive from "../components/menu/Menu_resposive";

export default function HomePage() {
  return (
    <>
      <MenuResposive/>
      <CartsComponent />
      <InfoTravel />
      <Destinos />
      <Footer/>
    </>
  );
}
