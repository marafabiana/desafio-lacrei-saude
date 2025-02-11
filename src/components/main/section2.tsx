"use client";

import styled from "styled-components";
import Image from "next/image";
import colors from "@/app/styles/colors";

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;

  img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  background: ${colors.brand.gray0};
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  color: ${colors.brand.gray100};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: justify;
  color: ${colors.brand.gray90};
`;

export default function Section2() {
  return (
    <SectionContainer>
      <ImageContainer>
        <Image
          src="/images/main-image.jpg"
          alt="Estetoscópio"
          width={500}
          height={400}
        />
      </ImageContainer>

      <ContentContainer>
        <Title>O que é a Lacrei Saúde?</Title>
        <Description>
          O nosso papel é construir a conexão entre as pessoas da comunidade
          LGBTQIAPN+ que precisam de atendimento clínico com profissionais da
          saúde.
        </Description>
        <Description>Promovemos segurança, acolhimento e inclusão.</Description>
        <Description>
          Nossa plataforma digital é acessível, intuitiva e 100% segura.
          Protegemos e validamos todos os dados dos pacientes e profissionais de
          saúde. Além disso contamos com ajuda de diversos profissionais de
          saúde - sempre empáticos e abertos a entenderem as reais necessidades
          da comunidade LGBTQIAP+.
        </Description>
      </ContentContainer>
    </SectionContainer>
  );
}
