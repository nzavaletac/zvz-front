import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-color: #fafafa;
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

export const Section = styled.section`
  width: 45%;
  height: 90%;
  padding: 10px 50px;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    padding: 0px 50px;
  }

  @media screen and (max-width: 1000px) {
    height: auto;
    width: 100%;
    padding: 0px 50px;
  }
`;

export const SubtitleForm = styled.h3`
  text-align: center;
  font-size: 23px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const Input = styled.input`
  margin: 10px;
`;
export const TextArea = styled.textarea`
  margin: 10px;
`;
