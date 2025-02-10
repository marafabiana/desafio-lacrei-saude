"use client";

import styled from "styled-components";
import colors from "@/app/styles/colors";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ArticleContainer = styled.article`
  display: flex;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
  }
`;

const StepContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  text-align: center;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, ${colors.brand.success400}, ${colors.brand.info400});
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  /* Ajuste do tamanho do ícone dentro do círculo */
  span.material-symbols-outlined {
    font-size: 48px;
    color: ${colors.brand.invert400};

    @media (max-width: 768px) {
      font-size: 32px; 
    }
  }
`;

const StepNumber = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  background: ${colors.brand.info500};
  color: ${colors.brand.gray0};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 20px;
`;

export default function Section3() {
  return (
    <SectionContainer>
      <Title>Passo a passo para encontrar um profissional de saúde</Title>

      <ArticleContainer>
        <StepContainer>
          <IconWrapper>
            <span className="material-symbols-outlined">mail</span>
            <StepNumber>1</StepNumber>
          </IconWrapper>
          <Description>Cadastre-se gratuitamente em nossa plataforma</Description>
        </StepContainer>

        <StepContainer>
          <IconWrapper>
            <span className="material-symbols-outlined">search</span>
            <StepNumber>2</StepNumber>
          </IconWrapper>
          <Description>Encontre profissionais de saúde qualificados através de uma busca descomplicada</Description>
        </StepContainer>

        <StepContainer>
          <IconWrapper>
            <span className="material-symbols-outlined">check</span>
            <StepNumber>3</StepNumber>
          </IconWrapper>
          <Description>Valide seu contato por SMS, para segurança no atendimento</Description>
        </StepContainer>

        <StepContainer>
          <IconWrapper>
            <span className="material-symbols-outlined">phone_enabled</span>
            <StepNumber>4</StepNumber>
          </IconWrapper>
          <Description>Entre em contato com a pessoa profissional escolhida e marque sua consulta</Description>
        </StepContainer>
      </ArticleContainer>
    </SectionContainer>
  );
}
