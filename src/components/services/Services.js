import React from "react";
import {
  BodyServices,
  Container,
  ContainerImg,
  Img,
  Section,
  TitleServices,
  ContentServices,
  TitleContainer,
  Title,
} from "./ServicesElements";
import img1 from "../../images/img1.svg";
import img2 from "../../images/img2.svg";
import img3 from "../../images/img3.svg";

export const Services = () => {
  return (
    <>
      <TitleContainer>
        <Title>Nuestros Servicios</Title>
      </TitleContainer>

      <Container>
        <Section>
          <ContainerImg>
            <Img src={img1} />
          </ContainerImg>
          <TitleServices>Asesoria Contable</TitleServices>
          <BodyServices>
            <ContentServices>
              Asesoría en constitución de empresas
            </ContentServices>
            <ContentServices>Contabilidad externa</ContentServices>
            <ContentServices>
              Elaboración de estados financieros
            </ContentServices>
            <ContentServices>
              Proceso y emisión de libros contables: principales y auxiliares
            </ContentServices>
            <ContentServices>
              Elaboración y declaración del libros electrónicos PLE
            </ContentServices>
            <ContentServices>
              Declaraciones jurada de impuestos Mensual y anual
            </ContentServices>
          </BodyServices>
        </Section>
        <Section>
          <ContainerImg>
            <Img src={img2} />
          </ContainerImg>
          <TitleServices>Asesoria Tributaria</TitleServices>
          <BodyServices>
            <ContentServices>
              Trámites de devolución de impuestos
            </ContentServices>
            <ContentServices>
              Fraccionamientos de deudas tributarias
            </ContentServices>
            <ContentServices>
              Asesoría en los regímenes especiales
            </ContentServices>
            <ContentServices>
              Asesoría en régimen general, especial, mype tributario y Rus
            </ContentServices>
            <ContentServices>
              Asesoría y planeamiento de fiscalizaciones tributarias
            </ContentServices>
          </BodyServices>
        </Section>
        <Section>
          <ContainerImg>
            <Img src={img3} />
          </ContainerImg>
          <TitleServices>Asesoria Laboral</TitleServices>
          <BodyServices>
            <ContentServices>
              Asesoramiento en gestión de recursos humanos
            </ContentServices>
            <ContentServices>
              Liquidación de beneficios sociales
            </ContentServices>
            <ContentServices>
              Liquidación de pagos de Essalud, AFP y ONP
            </ContentServices>
            <ContentServices>
              Trámites y gestiones ante entidades públicas
            </ContentServices>
            <ContentServices>
              Elaboración de planilla de trabajadores
            </ContentServices>
            <ContentServices>
              Elaboración y presentación de plame
            </ContentServices>
          </BodyServices>
        </Section>
      </Container>
    </>
  );
};
