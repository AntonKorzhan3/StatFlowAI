import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RedirectButton from "@/pages/index";

describe("RedirectButton", () => {
  it("redirects to Bungie OAuth when clicked", () => {
    // Mock the process.env.authID value
    const originalEnv = process.env;
    process.env.authID = "YOUR_CLIENT_ID";

    // Render the component
    const { getByText } = render(<RedirectButton />);

    // Find the button element
    const button = getByText("Redirect to Bungie OAuth");

    // Simulate a button click
    fireEvent.click(button);

    // Assert that the window location has been changed to the expected Bungie OAuth URL
    expect(window.location.href).toEqual(
      "https://www.bungie.net/en/oauth/authorize?client_id=YOUR_CLIENT_ID&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4"
    );

    // Restore the original process.env value
    process.env = originalEnv;
  });
});
