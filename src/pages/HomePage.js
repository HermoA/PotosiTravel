import React from "react";
import CartsComponent from "../components/carts";
import InfoTravel from "../components/InfoTravel";
import Destinos from "../components/Destinos";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <CartsComponent />
      <InfoTravel />
      <Destinos />
      <Footer/>
    </>
  );
}
