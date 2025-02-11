"use client";

import styled from "styled-components";
import PrimaryButtonGreen from "@/components/button/primary-button-green";
import colors from "../styles/colors";

const PageContainer = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 40px;
  background: ${colors.brand.gray0};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s ease;
`;

const Message = styled.p`
  font-size: 0.9rem;
  margin-top: 15px;
`;

const Link = styled.a`
  color: ${colors.brand.accent400};
  font-weight: bold;
  text-decoration: none;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function LoginPage() {
  return (
    <PageContainer>
      <Title>Acesso para profissionais e pacientes</Title>

      <Form>
        <Input type="email" placeholder="E-mail" required />
        <Input type="password" placeholder="Senha" required />

        <PrimaryButtonGreen type="submit">Entrar</PrimaryButtonGreen>
      </Form>

      <Message>
        Ainda não é cadastrado?
        <Link href="#"> Cadastre-se</Link>
      </Message>
    </PageContainer>
  );
}
