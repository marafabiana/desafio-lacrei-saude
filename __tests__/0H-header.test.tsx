import { render, screen } from "@testing-library/react";
import Header from "@/components/0H-header/0H-header"; 
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("deve renderizar o Header corretamente", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("deve renderizar a logo corretamente", () => {
    render(<Header />);
    
    const logo = screen.getByRole("img", { name: /logo lacrei saúde/i }); // Confirma o alt text
    expect(logo).toHaveAttribute("src", "/logo-horizontal.svg"); // Confirma o src da imagem
  });

  it("deve exibir os títulos dos Accordions", () => {
    render(<Header />);
    expect(screen.getByText("Quem Somos")).toBeInTheDocument();
    expect(screen.getByText("Como Doar")).toBeInTheDocument();
  });

  it("deve renderizar o botão de acesso", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /entrar/i })).toBeInTheDocument();
  });
});
