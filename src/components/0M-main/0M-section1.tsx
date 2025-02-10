"use client";

import styled from "styled-components";

const SectionContainer = styled.section`
  max-width: 800px;
  padding: 40px 20px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 5px;
`;

export default function Section1() {
  return (
    <SectionContainer>
      <Title>
        Conectamos pessoas LGBTQIAPN+ com profissionais de saúde qualificados,
        proporcionando experiências e cuidado seguros e inclusivos.
      </Title>
    </SectionContainer>
  );
}
