"use client";

import styled from "styled-components";
import colors from "@/app/styles/colors";

const IconWrapper = styled.a`
  color: ${colors.brand.accent400}; 
  font-size: 48px; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  text-decoration: none;

  &:hover {
    color: ${colors.brand.accent500}; /
  }
`;

export default function FacebookIcon() {
  return (
    <IconWrapper
      href="https://www.facebook.com/lacrei.saude/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook site externo - abrirá uma nova janela"
    >
      <i className="fa-brands fa-facebook"></i>
    </IconWrapper>
  );
}
