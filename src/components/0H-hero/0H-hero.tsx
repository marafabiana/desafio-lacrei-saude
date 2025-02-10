"use client";

import styled from "styled-components";
import Image from "next/image";
import colors from "@/app/styles/colors";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 70vh; 
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  overflow: hidden;
  

  @media (max-width: 768px) {
    height: 50vh; 
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%; 
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;

const HeroText = styled.div`
  max-width: 35rem;
  color: ${colors.brand.invert400}; 
  padding-left: 5%;
  z-index: 2;
  background-color: ${colors.brand.emerald90}60;
  border-radius: 10px; 
 

  @media (max-width: 768px) {
    padding-left: 5%;
    max-width: 25rem;
  }

  h1 {
    font-size: 3rem; 
    margin-bottom: 12px;
    color: ${colors.brand.invert400} !important;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Olá, você está na Lacrei Saúde!</h1>

      </HeroText>

      <BackgroundImage>
        <Image
          src="/images/hero-image.jpg"
          alt="Cores"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </BackgroundImage>
    </HeroContainer>
  );
}
