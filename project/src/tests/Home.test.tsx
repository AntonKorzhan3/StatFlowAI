import "@testing-library/jest-dom/extend-expect"; // Import extend-expect to extend Jest matchers
import React from "react";
import { render } from "@testing-library/react";
import Home from "@/pages/mainPage";

test("renders loading indicator", () => {
  const { getByText } = render(<Home />);
  const loadingElement = getByText(/Loading/i);
  expect(loadingElement).toBeInTheDocument(); // Now TypeScript recognizes toBeInTheDocument()
});

test("renders title", () => {
  const { getByText } = render(<Home />);
  const titleElement = getByText(/StatFlowAI/i);
  expect(titleElement).toBeInTheDocument(); // TypeScript recognizes toBeInTheDocument()
});
