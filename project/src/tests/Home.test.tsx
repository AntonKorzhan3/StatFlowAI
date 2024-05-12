import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Home from "@/pages/mainPage";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

test("renders loading indicator", () => {
  const { getByText } = render(<Home />);
  const loadingElement = getByText(/Loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("renders title", () => {
  const { getByText } = render(<Home />);
  const titleElement = getByText(/StatFlowAI/i);
  expect(titleElement).toBeInTheDocument();
});
