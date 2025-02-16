import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewCategoryTitle from "./NewCategoryTitle";
import { useAppStore } from "@/hooks/useAppStore";

vi.mock("@/hooks/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

describe("NewCategoryTitle", () => {
  it("renders initial title and input value", () => {
    const mockSetNewTitle = vi.fn();
    const mockGetNewTitle = vi.fn().mockReturnValue("Initial Title");

    (useAppStore as jest.Mock).mockReturnValue({
      setNewTitle: mockSetNewTitle,
      getNewTitle: mockGetNewTitle,
    });

    render(<NewCategoryTitle />);

    expect(screen.getByText("Task's Name")).toBeInTheDocument();

    expect(screen.getByDisplayValue("Initial Title")).toBeInTheDocument();
  });

  it("updates input value when typing", async () => {
    let inputValue = "";

    const mockSetNewTitle = vi.fn((value) => {
      inputValue = value;
    });

    const mockGetNewTitle = vi.fn(() => inputValue);

    (useAppStore as jest.Mock).mockReturnValue({
      setNewTitle: mockSetNewTitle,
      getNewTitle: mockGetNewTitle,
    });

    render(<NewCategoryTitle />);

    const inputElement = screen.getByRole("textbox");
    const typedText = "Updated Title";
    await userEvent.type(inputElement, typedText);

    expect(mockSetNewTitle).toBeCalledTimes(typedText.length);
  });
});
