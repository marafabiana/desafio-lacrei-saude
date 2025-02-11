import { render, screen } from "@testing-library/react";
import Section3 from "@/components/main/section3";
import "@testing-library/jest-dom";

describe("Section3 Component", () => {
  it("deve renderizar o título corretamente", () => {
    render(<Section3 />);
    
    expect(
      screen.getByText("Passo a passo para encontrar um profissional de saúde")
    ).toBeInTheDocument();
  });

  it("deve renderizar os quatro passos corretamente", () => {
    render(<Section3 />);

    expect(
      screen.getByText((text) => text.includes("Cadastre-se gratuitamente"))
    ).toBeInTheDocument();

    expect(
      screen.getByText(/encontre profissionais de saúde qualificados/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/valide seu contato por sms/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/entre em contato com a pessoa profissional escolhida/i)
    ).toBeInTheDocument();
  });

  it("deve exibir os ícones corretamente", () => {
    render(<Section3 />);

    expect(screen.getByText("mail")).toBeInTheDocument();
    expect(screen.getByText("search")).toBeInTheDocument();
    expect(screen.getByText("check")).toBeInTheDocument();
    expect(screen.getByText("phone_enabled")).toBeInTheDocument();
  });

  it("deve exibir os números dos passos corretamente", () => {
    render(<Section3 />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
