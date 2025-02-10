"use client";


import styled from "styled-components";
import colors from "@/app/styles/colors";
import Logo from "./0H-logo";
import Accordion from "./0H-accordions/0H-accordion";
import AcessoButton from "../0B-button/0B-acesso-button";

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  background: ${colors.brand.gray0};
  padding: 15px 30px;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <NavLinks>
        <Accordion
          title="Quem Somos"
          items={[
            { text: "Sobre Nós", href: "/1Q-quem-somos/1Q-1-sobre-nos" },
            { text: "FAQ", href: "/1Q-quem-somos/1Q-2-faq" },
          ]}
        />
        <Accordion
          title="Como Doar"
          items={[
            {
              text: "Seja um doador mensal",
              href: "/2C-como-doar/2C-1-seja-um-doador-mensal",
            },
            {
              text: "Seja um voluntário",
              href: "/2C-como-doar/2C-2-seja-um-voluntario",
            },
          ]}
        />

        <AcessoButton />
      </NavLinks>
    </HeaderWrapper>
  );
}
