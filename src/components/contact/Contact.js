import React, { useState } from "react";
import Swal from "sweetalert2";
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
import { postMessage } from "../../services/Message.Services";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  nameLastName: "",
  email: "",
  company: "",
  ruc: "",
  phone: "",
  mensaje: "",
};

export const Contact = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const valor = e.target.value;
    setForm({
      ...form,
      [e.target.name]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMessage(form).then((data) => {
      if (!data._id) {
        setForm(initialState);
        Swal.fire({
          title: "Registro ¡correcto!",
          text: "Tus datos fueron enviados correctamente. Muy pronto nos estaremos comunicando con usted.",
          icon: "success",
          timer: "3000",
          iconColor: "#0071e3",
          confirmButtonColor: "#0071e3",
        });
      }
    });
  };

  return (
    <div style={{ marginTop: "100px" }} id="contact">
      <TitleContainer>
        <Title>Contáctenos</Title>
      </TitleContainer>
      <Container>
        <Section>
          <SubtitleForm>Vamos a trabajar juntos</SubtitleForm>
          <Form action="https://formsubmit.co/info@zvzgroup.com" method="POST">
            <div className="container">
              <Input
                className="container__input"
                type="text"
                name="nameLastName"
                placeholder="Nombres y Apellidos"
                onChange={handleChange}
                value={form.nameLastName}
              />
              <label className="container__label">Nombres y Apellidos</label>
            </div>
            <div className="container">
              <Input
                className="container__input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
              />
              <label className="container__label">Email</label>
            </div>
            <div className="container">
              <Input
                className="container__input"
                type="text"
                name="company"
                placeholder="Empresa"
                onChange={handleChange}
                value={form.company}
              />
              <label className="container__label">Empresa</label>
            </div>
            <div className="container">
              <Input
                className="container__input"
                type="text"
                name="ruc"
                placeholder="Ruc"
                onChange={handleChange}
                value={form.ruc}
              />
              <label className="container__label">Ruc</label>
            </div>
            <div className="container">
              <Input
                className="container__input"
                type="text"
                name="phone"
                placeholder="Teléfono"
                onChange={handleChange}
                value={form.phone}
              />
              <label className="container__label">Teléfono</label>
            </div>
            <div className="container">
              <TextArea
                className="container__input"
                type="textarea"
                name="mensaje"
                placeholder="Mensaje"
                onChange={handleChange}
                value={form.mensaje}
              />
              <label className="container__label">Mensaje</label>
            </div>
            <input type="hidden" name="_next" value="https://zvzgroup.com/" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

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
            height="70%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Section>
      </Container>
    </div>
  );
};
