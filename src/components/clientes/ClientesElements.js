import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

export const ContainerBody = styled.div`
  height: calc(100vh - 140px);
  background-color: #fafafa;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1630px) {
    height: auto;
  }
`;

export const Section = styled.section`
  width: 600px;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ImgClientes = styled.img`
  width: 200px;
  margin: 5px;
  padding: 10px;
`;
