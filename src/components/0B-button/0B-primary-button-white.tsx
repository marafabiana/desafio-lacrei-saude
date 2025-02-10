"use client";

import styled from "styled-components";

const PrimaryButtonWhite = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border: 2px solid #008f4c; /* Cor verde */
  color: #008f4c; /* Texto verde */
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background: white; /* Fundo branco */

  &:hover {
    background: #008f4c;
    color: white;
  }
`;

interface ButtonProps {
  href?: string;
  children?: React.ReactNode; // ✅ Permite passar um texto personalizado dentro do botão
}

export default function ButtonComponent({ href = "#", children = "Conhecer" }: ButtonProps) {
  return <PrimaryButtonWhite href={href}>{children}</PrimaryButtonWhite>;
}
