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
import "./Contact.css";

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
            <div className="container">
              <Input
                className="container__input"
                type="text"
                name="name"
                placeholder="Nombres y Apellidos"
              />
              <label className="container__label">Nombres y Apellidos</label>
            </div>
            <div className="container">
              <Input
                className="container__input"
                type="email"
                name="email"
                placeholder="Email"
              />
              <label className="container__label">Email</label>
            </div>
            <div className="container">
              <Input
                className="container__input"
                type="text"
                name="empresa"
                placeholder="Empresa"
              />
              <label className="container__label">Empresa</label>
            </div>
            <div className="container">
              <Input
                className="container__input"
                type="text"
                name="ruc"
                placeholder="Ruc"
              />
              <label className="container__label">Ruc</label>
            </div>
            <div className="container">
              <Input
                className="container__input"
                type="text"
                name="telefono"
                placeholder="Teléfono"
              />
              <label className="container__label">Teléfono</label>
            </div>
            <div className="container">
              <TextArea
                className="container__input"
                type="textarea"
                name="mensaje"
                placeholder="Mensaje"
              />
              <label className="container__label">Mensaje</label>
            </div>

            <div className="container__button">
              <button className="learn-more" type="submit">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Enviar</span>
              </button>
            </div>
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
