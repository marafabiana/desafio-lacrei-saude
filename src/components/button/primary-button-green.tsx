"use client";

import styled from "styled-components";
import colors from "@/app/styles/colors";

const StyledButton = styled.button<{ as?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  background-color: ${colors.brand.accent400};
  color: ${colors.brand.invert400};
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.brand.accent500};
  }

  &:active {
    background-color: ${colors.brand.accent600};
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  href?: string; // Para botões que funcionam como links
  type?: "button" | "submit" | "reset"; // Para botões em formulários
}

export default function PrimaryButtonGreen({ children, href, type = "button" }: ButtonProps) {
  if (href) {
    return (
      <StyledButton as="a" href={href}>
        {children}
      </StyledButton>
    );
  }

  return <StyledButton type={type}>{children}</StyledButton>;
}
