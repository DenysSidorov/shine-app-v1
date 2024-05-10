import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Button from "@/components/button/Button.tsx";

test("renders learn react link", () => {
  render(<Button />);
  const linkElement = screen.getByText(/Hello, React!/i);
  expect(linkElement).toBeInTheDocument();
});
