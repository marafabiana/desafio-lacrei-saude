"use client";

import styled from "styled-components";
import colors from "@/app/styles/colors";

const SectionContainer = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: justify;
  line-height: 1.6;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 20px;
`;

const DifferentialsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DifferentialItem = styled.li`
  background: ${colors.brand.accent100};
  padding: 15px;
  border-radius: 8px;
  text-align: justify;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function SobreNos() {
  return (
    <SectionContainer>
      <Title>Um pouco sobre nós</Title>

      <Description>
        A Lacrei Saúde é mais que uma startup de Health Tech; é um movimento para transformar o acesso à saúde da comunidade LGBTQIAPN+. Nosso compromisso é oferecer um ambiente seguro e inclusivo, em digital para a saúde da nossa comunidade.
      </Description>

      <Subtitle>Nossa Visão</Subtitle>
      <Description>
        Vislumbramos um futuro em que cada indivíduo, independentemente de sua identidade de gênero ou sexualidade, possa acessar cuidados de saúde de qualidade, sem medo ou discriminação.
      </Description>

      <Subtitle>Nosso Diferencial</Subtitle>
      <DifferentialsList>
        <DifferentialItem>
          <strong>Foco na Comunidade:</strong> Nascemos da necessidade de oferecer um espaço de saúde verdadeiramente inclusivo. Cada decisão reflete nosso compromisso com o bem-estar da comunidade LGBTQIAPN+.
        </DifferentialItem>

        <DifferentialItem>
          <strong>Tecnologia com Propósito:</strong> Utilizamos tecnologia de ponta para facilitar o acesso a profissionais de saúde qualificados e inclusivos, garantindo uma experiência segura e confiável.
        </DifferentialItem>

        <DifferentialItem>
          <strong>Educação e Empoderamento:</strong> Promovemos o bem-estar através da educação, oferecendo recursos que aumentam o autoconhecimento e a qualidade do cuidado.
        </DifferentialItem>
      </DifferentialsList>
    </SectionContainer>
  );
}
