"use client";

import styled from "styled-components";
import Image from "next/image";
import colors from "@/app/styles/colors";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 50vh; 
  display: flex;
  align-items: center;
  justify-content: center; 
  overflow: hidden;

  @media (max-width: 768px) {
    height: 30vh; 
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
  width: 100%; /* Ocupar toda a largura */
  max-width: 100%; /* Garante que não tenha limitação de largura */
  padding: 20px; 
  z-index: 2;
  background-color: ${colors.brand.gray0}60;
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center; 
  flex-direction: column; 

  h1 {
    font-size: 3rem;
    margin-bottom: 12px;
    color: ${colors.brand.emerald90} !important;
    white-space: nowrap; /* Impede que o texto quebre automaticamente */
    line-height: 1.2; /* Ajusta o espaçamento entre linhas */

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        <h1>
          Olá, você está na <br /> Lacrei Saúde!
        </h1>
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
