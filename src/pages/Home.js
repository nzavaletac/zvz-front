import React, { useState } from "react";
import Blog from "../components/blog/Blog";
import { Contact } from "../components/contact/Contact";
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

      <Footer />
    </>
  );
};

export default Home;
