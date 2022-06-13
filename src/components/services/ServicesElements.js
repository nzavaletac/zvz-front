import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

export const Container = styled.div`
  height: calc(100vh - 100px);
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 1630px) {
    height: auto;
  }

  @media screen and (max-width: 1500px) {
    height: auto;
  }
  @media screen and (max-width: 1000px) {
    height: auto;
  }
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Section = styled.section`
  background-color: #fafafa;
  width: 450px;
  text-align: center;
  justify-content: center;
  margin: 20px 15px;
  @media screen and (max-width: 768px) {
    margin: 10px 0px;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 250px;
  padding-bottom: 0px;
  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const TitleServices = styled.h1`
  font-size: 35px;
  color: #010606;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const BodyServices = styled.div`
  text-align: justify;
  padding: 20px 70px;
  @media screen and (max-width: 768px) {
    padding: 0px 25px;
  }
`;

export const ContentServices = styled.p`
  color: #010606;
`;
