"use client";

import styled from "styled-components";
import colors from "@/app/styles/colors";
import Link from "next/link";

const LoginButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  background-color: ${colors.brand.accent400};
  color: ${colors.brand.invert400};
  padding: 12px 24px;
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

export default function AcessoButton() {
  return (
    <LoginButton href="/3A-acesso">
      <span
        className="material-symbols-outlined"
        style={{
          fontSize: "24px",
          color: colors.brand.invert400,
          fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48'",
          minWidth: "44px",
          minHeight: "44px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        person
      </span>
      Entrar
    </LoginButton>
  );
}
