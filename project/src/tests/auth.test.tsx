import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RedirectButton from "@/pages/index";

describe("RedirectButton component", () => {
  test("redirects to the correct URL when button is clicked", () => {
    const clientId = process.env.authID;
    const expectedUrl = `https://www.bungie.net/en/oauth/authorize?client_id=${clientId}&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4`;

    render(<RedirectButton />);
    const button = screen.getByRole("button", {
      name: /Click here to Login!/i,
    });

    fireEvent.click(button);

    expect(window.location.href).toBe(expectedUrl);
  });
});
