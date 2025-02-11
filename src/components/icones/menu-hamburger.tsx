"use client";

import styled from "styled-components";
import colors from "@/app/styles/colors";

const MenuIconWrapper = styled.span`
  font-size: 28px; 
  color: ${colors.brand.emerald70};
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.brand.emerald90}; 
  }
`;

export default function MenuHamburgerIcon() {
  return <MenuIconWrapper className="material-symbols-outlined">menu</MenuIconWrapper>;
}
