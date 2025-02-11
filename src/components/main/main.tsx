"use client";

import styled from "styled-components";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 10px; /* Espaço entre as seções */

  @media (max-width: 768px) {
    padding: 40px 10px;
    gap: 5px;
  }
`;

export default function Main() {
  return (
    <MainContainer>
      <Section1 />
      <Section2 />
      <Section3 />
    </MainContainer>
  );
}
