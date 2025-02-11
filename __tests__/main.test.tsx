import { render, screen } from "@testing-library/react";
import Main from "@/components/main/main";
import "@testing-library/jest-dom";


// Mock das seções
jest.mock("@/components/main/section1", () => () => <div data-testid="section1">Section 1</div>);
jest.mock("@/components/main/section2", () => () => <div data-testid="section2">Section 2</div>);
jest.mock("@/components/main/section3", () => () => <div data-testid="section3">Section 3</div>);

describe("Main Component", () => {
  it("deve renderizar corretamente", () => {
    render(<Main />);

    expect(screen.getByTestId("section1")).toBeInTheDocument();
    expect(screen.getByTestId("section2")).toBeInTheDocument();
    expect(screen.getByTestId("section3")).toBeInTheDocument();
  });
});
