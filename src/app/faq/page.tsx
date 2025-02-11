"use client";

import styled from "styled-components";
import { useState } from "react";
import colors from "@/app/styles/colors";

const SectionContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuestionBox = styled.div`
  background: ${colors.brand.accent100}; 
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Question = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled.p<{ $isOpen: boolean }>`  
  font-size: 1rem;
  text-align: justify;
  margin-top: 10px;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")}; 
`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Como faço para me cadastrar na Lacrei Saúde?",
      answer: "Para se cadastrar, acesse nosso site, clique em 'Cadastre-se' e siga as instruções preenchendo seus dados.",
    },
    {
      question: "Como faço para alterar o meu cadastro?",
      answer: "Você pode alterar seu cadastro acessando a área de configurações da sua conta e editando suas informações.",
    },
    {
      question: "Esqueci minha senha. Como faço para acessar minha conta?",
      answer: "Clique em 'Esqueci minha senha' na página de login e siga as instruções para redefinir sua senha.",
    },
  ];

  return (
    <SectionContainer>
      <Title>Dúvidas Frequentes</Title>

      <FAQContainer>
        {faqData.map((item, index) => (
          <QuestionBox key={index} onClick={() => toggleFAQ(index)}>
            <Question>
              {item.question}
              <span className="material-symbols-outlined">
                {openIndex === index ? "expand_less" : "expand_more"}
              </span>
            </Question>
            
            <Answer $isOpen={openIndex === index}>{item.answer}</Answer>
          </QuestionBox>
        ))}
      </FAQContainer>
    </SectionContainer>
  );
}
