import React from "react";

import {
  TitleContainer,
  Title,
  ContainerBody,
  Section,
  Img,
  ContainerImg,
  ImgClientes,
} from "./ClientesElements";
import image from "../../images/img4.svg";
import img1 from "../../images/clientes/1.jpg";
import img2 from "../../images/clientes/2.jpg";
import img3 from "../../images/clientes/3.jpg";
import img4 from "../../images/clientes/4.jpg";
import img5 from "../../images/clientes/5.jpg";
import img6 from "../../images/clientes/6.jpg";
import img7 from "../../images/clientes/7.jpg";

export const Clientes = () => {
  return (
    <>
      <TitleContainer>
        <Title>Nuestros Clientes</Title>
      </TitleContainer>
      <ContainerBody>
        <Section>
          <ContainerImg>
            <Img src={image} />
          </ContainerImg>
        </Section>
        <Section>
          <ContainerImg>
            <ImgClientes src={img1} />
            <ImgClientes src={img2} />
            <ImgClientes src={img3} />
            <ImgClientes src={img4} />
            <ImgClientes src={img5} />
            <ImgClientes src={img6} />
            <ImgClientes src={img7} />
          </ContainerImg>
        </Section>
      </ContainerBody>
    </>
  );
};
