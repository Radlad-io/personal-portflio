// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "../../src/pages/index.page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /A Next\.js Starter File./i,
    });

    expect(heading).toBeInTheDocument();
  });
});
