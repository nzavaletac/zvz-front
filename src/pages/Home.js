import React, { useState } from "react";
import { Clientes } from "../components/clientes/Clientes";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import { Services } from "../components/services/Services";
import SideBar from "../components/sidebar/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <Services />
      <Clientes />
      <Footer />
    </>
  );
};

export default Home;
