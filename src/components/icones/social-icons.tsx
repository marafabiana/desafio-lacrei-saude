"use client";

import styled from "styled-components";
import FacebookIcon from "./facebook-icon";
import InstagramIcon from "./instagran-icon";
import LinkedInIcon from "./linkedin-icon";


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
