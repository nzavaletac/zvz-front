import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLinkA,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const urlWhatsapp =
    "https://api.whatsapp.com/send/?phone=51993645977&text=¡Hola!+ZVZ Group+ - Me gustaria obtener más información sobre el servicio contable.";

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              ZVZ Group
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Servicios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="clientes"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Clientes
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to="blog"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Blog
                </NavLinks>
              </NavItem> */}
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Contáctanos
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLinkA href={urlWhatsapp} target="_blank">
                +51 993 645 977
              </NavBtnLinkA>
              <NavBtnLinkA type="email">info@zvzgroup.com</NavBtnLinkA>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
