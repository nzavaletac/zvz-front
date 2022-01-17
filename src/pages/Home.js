import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
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
    </>
  );
};

export default Home;