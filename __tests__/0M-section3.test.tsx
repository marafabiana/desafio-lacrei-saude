import { render, screen } from "@testing-library/react";
import Section3 from "@/components/0M-main/0M-section3";
import "@testing-library/jest-dom";

describe("Section3 Component", () => {
  it("deve renderizar o título principal corretamente", () => {
    render(<Section3 />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Passo a passo para encontrar um profissional de saúde"
    );
  });

  it("deve renderizar os quatro passos corretamente", () => {
    render(<Section3 />);

    expect(screen.getByText("Cadastre-se gratuitamente em nossa plataforma")).toBeInTheDocument();
    expect(screen.getByText("Encontre profissionais de saúde qualificados através de uma busca descomplicada")).toBeInTheDocument();
    expect(screen.getByText("Valide seu contato por SMS, para segurança no atendimento")).toBeInTheDocument();
    expect(screen.getByText("Entre em contato com a pessoa profissional escolhida e marque sua consulta")).toBeInTheDocument();
  });

  it("deve renderizar os ícones corretamente", () => {
    render(<Section3 />);
    
    expect(screen.getByText("mail")).toBeInTheDocument();
    expect(screen.getByText("search")).toBeInTheDocument();
    expect(screen.getByText("check")).toBeInTheDocument();
    expect(screen.getByText("phone_enabled")).toBeInTheDocument();
  });

  it("deve renderizar os números dos passos", () => {
    render(<Section3 />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
