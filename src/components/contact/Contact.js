import React from "react";
import {
  Container,
  Form,
  Input,
  Section,
  Title,
  TitleContainer,
  SubtitleForm,
  TextArea,
} from "./ContactElements";

export const Contact = () => {
  return (
    <div id="contact">
      <TitleContainer>
        <Title>Contáctenos</Title>
      </TitleContainer>
      <Container>
        <Section>
          <SubtitleForm>Vamos a trabajar juntos</SubtitleForm>
          <Form>
            <Input type="text" placeholder="Nombres y Apellidos" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Empresa" />
            <Input type="text" placeholder="Ruc" />
            <Input type="text" placeholder="Teléfono" />
            <TextArea type="textarea" placeholder="Mensaje" />
            <button>Enviar Mensaje</button>
          </Form>
        </Section>
        <Section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15611.563816742755!2d-77.0772788!3d-11.9820467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9975abb064b94557!2sZVZ%20Consulting%20Group%20SAC!5e0!3m2!1ses!2spe!4v1655173857840!5m2!1ses!2spe"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Section>
      </Container>
    </div>
  );
};
