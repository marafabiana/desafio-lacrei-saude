"use client";

import styled from "styled-components";
import colors from "@/app/styles/colors";

const SectionContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444;
  text-align: justify;
  line-height: 1.6;
  max-width: 700px;
`;

const StyledLink = styled.a`
  color: ${colors.brand.accent400};
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color:${colors.brand.accent500};
    text-decoration: underline;
  }
`;

export default function SejaVoluntario() {
  return (
    <SectionContainer>
      <Title>Você pode fazer a diferença</Title>

      <Description>
        Se você quer se tornar um voluntário na Lacrei Saúde, acesse o site da{" "}
        <StyledLink href="https://www.atados.com.br/" target="_blank" rel="noopener noreferrer">
          Atados
        </StyledLink>
        , e lá você encontrará todas as oportunidades disponíveis para se ingressar nessa grande jornada.
      </Description>
    </SectionContainer>
  );
}
