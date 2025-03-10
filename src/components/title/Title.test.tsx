import { render, screen, fireEvent } from "@testing-library/react";
import Title from "@/components/title/Title";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useAppStore } from "@/hooks/useAppStore";

vi.mock("@/hooks/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

describe("Title", () => {
  const mockSaveTitle = vi.fn();
  const mockGetNewCategoryId = vi.fn();
  const mockRemoveNewCategoryId = vi.fn();

  beforeEach(() => {
    (useAppStore as jest.Mock).mockReturnValue({
      getNewCategoryId: mockGetNewCategoryId,
      removeNewCategoryId: mockRemoveNewCategoryId,
    });
  });

  it("renders non-editable title", () => {
    render(<Title title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders editable title and focuses input if id matches new category id", () => {
    mockGetNewCategoryId.mockReturnValue("123");
    render(<Title title="Test Title 2" isEditable={true} saveTitle={mockSaveTitle} id="123" />);
    const inputElement = screen.getByDisplayValue("Test Title 2");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveFocus();
  });

  it("calls saveTitle on blur if value is changed", () => {
    render(<Title title="Test Title 3" isEditable={true} saveTitle={mockSaveTitle} id="123" />);
    const inputElement = screen.getByDisplayValue("Test Title 3");
    fireEvent.change(inputElement, { target: { value: "New Title 3" } });
    fireEvent.blur(inputElement);
    expect(mockSaveTitle).toHaveBeenCalledWith("New Title 3");
  });

  it("does not call saveTitle on blur if value is not changed", () => {
    render(<Title title="Test Title 4" isEditable={true} saveTitle={mockSaveTitle} id="1234" />);
    const inputElement = screen.getByDisplayValue("Test Title 4");
    fireEvent.blur(inputElement);
    expect(mockSaveTitle).toHaveBeenCalled();
  });

  it("resets value to initial title if input is empty on blur", () => {
    render(<Title title="Test Title 5" isEditable={true} saveTitle={mockSaveTitle} id="123" />);
    const inputElement = screen.getByDisplayValue("Test Title 5") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.blur(inputElement);
    expect(inputElement.value).toBe("Test Title 5");
  });
});
