import { render, screen } from "@testing-library/react";
import Menu from "./Menu.tsx";

describe("Menu", () => {
  it("should render the menu icon", () => {
    render(<Menu />);
    // screen.debug();

    const menuIcon = screen.getByTestId("menu-icon");
    expect(menuIcon).toBeInTheDocument();
  });
});
