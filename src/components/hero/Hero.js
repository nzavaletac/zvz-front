import React, { useState } from "react";
import Video from "../../videos/video1.mp4";
import {
  ArrowForward,
  ArrowRight,
  Hero1,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroP,
  VideoBg,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} typeof="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Hero1>¡Bienvenido! a Zvz Consulting Group</Hero1>
        <HeroP>
          Brindamos servicio contable, tributario y laboral para Micro y Pequeña
          empresa. Te ayudamos a tomar las mejores decisiones.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact-us"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Trabajemos {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
