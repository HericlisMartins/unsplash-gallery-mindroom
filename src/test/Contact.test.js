import "@testing-library/jest-dom";

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import Contact from "../pages/Contact";

describe("Contact Page", () => {
  it("should submit the form with valid input", () => {
    render(<Contact />);

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "This is a test message" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    // Verify that the form was submitted successfully
    expect(
      screen.getByText(
        "Thank you for your message! We will get back to you soon.",
      ),
    ).toBeInTheDocument();
  });
});
