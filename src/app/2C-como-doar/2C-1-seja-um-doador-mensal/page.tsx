"use client";

import styled from "styled-components";
import PrimaryButtonWhite from "@/components/0B-button/0B-primary-button-white"; // ✅ Importação corrigida

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
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444;
  text-align: justify; /* ✅ Texto justificado */
  line-height: 1.6;
  max-width: 700px; /* Mantém um bom tamanho de leitura */
`;

export default function SejaDoadorMensal() {
  return (
    <SectionContainer>
      <Title>Doe mensalmente</Title>

      <Description>
        Somos uma organização sem fins lucrativos. Não monetizamos, não geramos lucro e nem renda. É por isso que somos conectados à ONG Atados. 
      </Description>
      <Description>
         No entanto, se você quer apoiar outras causas que precisam de suporte financeiro, basta clicar no botão logo abaixo e ele te guiará de maneira segura. 
      </Description>

      
      <PrimaryButtonWhite href="https://atados.colabore.org/doar/single_step">Doar</PrimaryButtonWhite>
    </SectionContainer>
  );
}
