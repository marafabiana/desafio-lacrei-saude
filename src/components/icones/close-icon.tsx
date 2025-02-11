"use client";

import styled from "styled-components";
import colors from "@/app/styles/colors";

const CloseIconWrapper = styled.span`
  font-size: 28px; /* Define o tamanho do ícone */
  color: ${colors.brand.emerald70}; /* Define a cor do ícone */
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.brand.emerald90}; /* Muda a cor no hover */
  }
`;

export default function CloseIcon() {
  return <CloseIconWrapper className="material-symbols-outlined">close</CloseIconWrapper>;
}
