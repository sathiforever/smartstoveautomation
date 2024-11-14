import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import landingPageImg from "./../assect/images/landingPageImg.jpeg";
import landingPageImg1 from "./../assect/images/landingPageImg1.jpeg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  text-align: center;
  padding: 15px;

  @media screen and (min-width: 768px) {
    background-color: lightcoral;
    width: 100%;
    max-width: 100%;
  }

  @media screen and (max-width: 480px) {
    background-color: lightgreen;
    width: 100%;
    max-width: 92%;
    height: 100vh;
  }
  @media screen and (min-width: 1440px){
    background-color: lightgreen;
    width: 100%;
    max-width: 99%;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;

  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    height: auto; //calc(100% - 180px)
  }
  @media screen and (min-width: 1440px){
    width: 75%;
  }
  @media screen and (min-width: 2560px) {
    width : 43%;
  }
`;
const Image = styled.img`
  width: calc(50% - 20px);
  height: auto;
  cursor: pointer;

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  @media screen and (min-width: 2560px) {
    font-size : xx-large;
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <Container>
      <h1>Smart Stove Automation</h1>
      <ImageContainer>
        <Image src={landingPageImg} alt="Smart Stove" onClick={handleClick} />
        <Image src={landingPageImg1} alt="Smart Stove" onClick={handleClick} />
      </ImageContainer>
      <Button onClick={handleClick}>Go to App</Button>
    </Container>
  );
};

export default LandingPage;
