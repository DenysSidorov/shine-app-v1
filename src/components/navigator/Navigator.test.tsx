import { render, screen, fireEvent } from "@testing-library/react";
import Navigator from "./Navigator";
import { useNavigate } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe("Navigator", () => {
  it("should navigate to the correct url for a generic path", () => {
    const mockNavigate = vi.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<Navigator pathname="/random-path" />);

    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith("/categories");
  });

  it("should navigate to the correct url for 'new-task' path", () => {
    const mockNavigate = vi.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<Navigator pathname="/categories/22/new-task" />);

    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith("/categories/22");
  });

  it("should navigate to the correct url for 'todos' path", () => {
    const mockNavigate = vi.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<Navigator pathname="/categories/22/todos/3" />);

    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith("/categories/22");
  });
});
