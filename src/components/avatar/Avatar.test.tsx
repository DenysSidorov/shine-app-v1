import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar", () => {
  it("renders correctly with src and alt", () => {
    render(<Avatar src="test-image.jpg" alt="test alt" />);
    const imageElement = screen.getByAltText("test alt");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "test-image.jpg");
  });

  it("renders correctly without alt", () => {
    render(<Avatar src="test-image.jpg" />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "test-image.jpg");
    expect(imageElement).not.toHaveAttribute("alt");
  });

  it("renders correctly with a different src", () => {
    render(<Avatar src="another-image.jpg" alt="another alt" />);
    const imageElement = screen.getByAltText("another alt");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "another-image.jpg");
  });
});
