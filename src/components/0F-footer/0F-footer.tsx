"use client";

import colors from "@/app/styles/colors";
import styled from "styled-components";
import SocialIcons from "../0I-icones/0I-social-icons";

const FooterContainer = styled.footer`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr  
  align-items: center;
  padding: 20px 40px;
  background: ${colors.brand.emerald20};
  border-top: 1px solid #ddd; 
  
  }
`;



export default function Footer() {
  return (
    <FooterContainer>
        <SocialIcons />
    </FooterContainer>
  );
}
