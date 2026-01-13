import { render, screen } from "@testing-library/react";
import FloatingCTA from "@/components/landing/floating-cta";

describe("FloatingCTA", () => {
  it("renders the floating CTA button", () => {
    render(<FloatingCTA />);
    const ctaButton = screen.getByRole("button");
    expect(ctaButton).toBeInTheDocument();
  });
});
