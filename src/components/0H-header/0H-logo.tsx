"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <Link href="/">
        <Image
          src="/logo-horizontal.svg"
          alt="Logo Lacrei Saúde"
          width={120}
          height={60}
        />
      </Link>
    </LogoWrapper>
  );
}
