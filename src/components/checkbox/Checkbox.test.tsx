import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Checkbox from "@/components/checkbox/Checkbox.tsx";

test("renders learn react link", () => {
  render(<Checkbox label={"Start working"} name={"test"} value={true} />);
  const linkElement = screen.getByText(/Hello, React!/i);
  expect(linkElement).toBeInTheDocument();
});
