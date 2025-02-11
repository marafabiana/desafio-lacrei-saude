"use client";
import CloseIcon from "../icones/close-icon";
import MenuHamburgerIcon from "../icones/menu-hamburger";
import styled from "styled-components";
import colors from "@/app/styles/colors";
import Logo from "./logo";
import AcessoButton from "../button/acesso-button";
import { useState } from "react";
import Link from "next/link";

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  background: ${colors.brand.gray0};
  padding: 15px 30px;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavLinks = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;

  /* No desktop, sem background */
  background: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

    /* Apenas no mobile quando aberto */
    background: ${({ $isOpen }) => ($isOpen ? colors.brand.emerald20 : "transparent")};
  }
`;


/* Adicionando hover com sublinhado */
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.brand.accent600};
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: underline; 
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link no mobile
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <LogoContainer>
        <Logo />
        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuHamburgerIcon />}
        </MenuToggle>
      </LogoContainer>

      <NavLinks $isOpen={menuOpen}>
        <StyledLink href="/quem-somos" onClick={handleCloseMenu}>
          Quem Somos
        </StyledLink>
        <StyledLink href="/faq" onClick={handleCloseMenu}>
          Ajuda
        </StyledLink>
        {/* Botão "Entrar" fecha o menu */}
        <div onClick={handleCloseMenu}>
          <AcessoButton />
        </div>
      </NavLinks>
    </HeaderWrapper>
  );
}
