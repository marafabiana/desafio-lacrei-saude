import { render, screen } from "@testing-library/react";
import Main from "@/components/0M-main/0M-main";
import "@testing-library/jest-dom";

// Mockando as seções para testar apenas o 0M-main.tsx
jest.mock("@/components/0M-main/0M-section1", () => () => <div data-testid="section1">Section1</div>);
jest.mock("@/components/0M-main/0M-section2", () => () => <div data-testid="section2">Section2</div>);
jest.mock("@/components/0M-main/0M-section3", () => () => <div data-testid="section3">Section3</div>);

describe("Main Component", () => {
  it("deve renderizar o Main corretamente", () => {
    render(<Main />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("deve renderizar Section1, Section2 e Section3", () => {
    render(<Main />);
    
    expect(screen.getByTestId("section1")).toBeInTheDocument();
    expect(screen.getByTestId("section2")).toBeInTheDocument();
    expect(screen.getByTestId("section3")).toBeInTheDocument();
  });
});
