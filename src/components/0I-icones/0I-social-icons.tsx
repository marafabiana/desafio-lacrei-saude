"use client";

import styled from "styled-components";
import FacebookIcon from "./0I-facebook-icon";
import InstagramIcon from "./0I-instagran-icon";
import LinkedInIcon from "./0I-linkedin-icon";


const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 24px; 
`;

export default function SocialIcons() {
  return (
    <SocialIconsContainer>
      <FacebookIcon />
      <InstagramIcon />
      <LinkedInIcon />
    </SocialIconsContainer>
  );
}
