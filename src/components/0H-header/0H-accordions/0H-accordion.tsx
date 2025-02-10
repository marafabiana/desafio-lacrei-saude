"use client";

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AccordionItem from "./0H-accordion-item";
import colors from "@/app/styles/colors";

// Tipagem TypeScript
interface AccordionProps {
  title: string;
  items: { text: string; href: string }[];
}

// Estilos
const AccordionWrapper = styled.div`
  position: relative;
`;

const AccordionButton = styled.button`
  background: none;
  border: none;
  color: ${colors.brand.emerald90};
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

// Explicar isso ❗️
const Dropdown = styled.div<{ $isOpen: boolean }>`  
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  background: ${colors.brand.invert400};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 5px;
  min-width: 200px;
`;

export default function Accordion({ title, items }: AccordionProps) { 
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 🔹 Fecha o dropdown quando clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <AccordionWrapper ref={dropdownRef}>
      <AccordionButton onClick={() => setIsOpen(!isOpen)}>
        {title}
      </AccordionButton>
      <Dropdown $isOpen={isOpen}>
        {items.map((item, index) => (
          <AccordionItem key={index} href={item.href} text={item.text} />
        ))}
      </Dropdown>
    </AccordionWrapper>
  );
}
