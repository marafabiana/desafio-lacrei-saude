import { render, screen } from "@testing-library/react";
import Header from "@/components/header/header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("deve renderizar a logo corretamente", () => {
    render(<Header />);

    // Busca a logo pelo alt correto
    const logo = screen.getByRole("img", { name: /logo horizontal lacrei saúde/i });
    expect(logo).toHaveAttribute("src", "/logo-horizontal.svg"); // Confirma o src da imagem
  });

  it("deve exibir os links do menu corretamente", () => {
    render(<Header />);

    expect(screen.getByText("Quem Somos")).toBeInTheDocument();
    expect(screen.getByText("Ajuda")).toBeInTheDocument();
  });

  it("deve renderizar o botão de acesso", () => {
    render(<Header />);

    // Verifica se o botão "Entrar" está presente
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });
});
