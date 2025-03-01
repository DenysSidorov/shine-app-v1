import { screen, render, fireEvent } from "@testing-library/react";
import AddNewCategory from "@/components/add-new-category/AddNewCategory.tsx";
import { beforeEach, describe, expect } from "vitest";
import { useAppStore } from "@/hooks/useAppStore.tsx";

vi.mock("@/hooks/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

describe("AddNewCategory", () => {
  const mockAddNewCategory = vi.fn();

  beforeEach(() => {
    (useAppStore as jest.Mock).mockReturnValue({
      addNewCategory: mockAddNewCategory,
    });
  });

  it("renders wrapper", () => {
    render(<AddNewCategory />);
    const element = screen.getByTestId("wrapper");
    expect(element).toBeInTheDocument();
  });

  it("calls addNewCategory when clicked", () => {
    render(<AddNewCategory />);
    const wrapper = screen.getByTestId("wrapper");
    fireEvent.click(wrapper);
    expect(mockAddNewCategory).toHaveBeenCalled();
  });

  it("shows add icon when not loading", () => {
    render(<AddNewCategory />);
    expect(screen.queryByTestId("loading-icon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("add-icon")).toBeInTheDocument();
  });
});
