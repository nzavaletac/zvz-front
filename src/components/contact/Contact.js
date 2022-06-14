import React from "react";
import { Container, Title, TitleContainer } from "./ContactElements";

export const Contact = () => {
  return (
    <Container id="contact">
      <TitleContainer>
        <Title>Contáctenos</Title>
      </TitleContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15611.563816742755!2d-77.0772788!3d-11.9820467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9975abb064b94557!2sZVZ%20Consulting%20Group%20SAC!5e0!3m2!1ses!2spe!4v1655173857840!5m2!1ses!2spe"
        width="100%"
        height="90%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};
