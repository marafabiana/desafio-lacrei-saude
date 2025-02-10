import Link from "next/link";
import styled from "styled-components";
import colors from "@/app/styles/colors";

// Typagem TypeScript
interface AccordionItemProps {
  href: string;
  text: string;
}

// Estilos
const DropdownItem = styled(Link)`
  display: block;
  padding: 5px 10px;
  color: black;
  text-decoration: none;
  &:hover {
    background:${colors.brand.accent100};
  }
`;

export default function AccordionItem({ href, text }: AccordionItemProps) { 
  return <DropdownItem href={href}>{text}</DropdownItem>;
}
