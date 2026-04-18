import { screen, render, fireEvent } from "@testing-library/react";
import TrashCategories from "@/components/trash-categories/TrashCategories.tsx";
import { beforeEach, describe, expect } from "vitest";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { CategoryType } from "@/types/category.ts";

vi.mock("@/hooks/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

describe("TrashCategories", () => {
  const mockRestoreCategory = vi.fn();
  const mockSetShowDeleted = vi.fn();
  const mockGetShowDeleted = vi.fn().mockReturnValue(false);
  const mockGetCategories = vi.fn();

  const deletedCategory: CategoryType = {
    id: "1",
    title: "Deleted CAR",
    type: "list",
    color: "#000",
    date: new Date(),
    isDeleted: true,
    tasks: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockGetShowDeleted.mockReturnValue(false);
    mockGetCategories.mockReturnValue([deletedCategory]);
    (useAppStore as jest.Mock).mockReturnValue({
      getCategories: mockGetCategories,
      getShowDeleted: mockGetShowDeleted,
      setShowDeleted: mockSetShowDeleted,
      restoreCategory: mockRestoreCategory,
    });
  });

  it("does not render if no deleted categories", () => {
    mockGetCategories.mockReturnValue([]);
    const { container } = render(<TrashCategories />);
    expect(container.querySelector('[data-testid="trash-categories"]')).toBeEmptyDOMElement();
  });

  it("renders trash button with count", () => {
    render(<TrashCategories />);
    expect(screen.getByTestId("trash-toggle")).toHaveTextContent("Trash (1)");
  });

  it("toggles trash visibility", () => {
    render(<TrashCategories />);
    fireEvent.click(screen.getByTestId("trash-toggle"));
    expect(mockSetShowDeleted).toHaveBeenCalledWith(true);
  });

  it("shows trash items when expanded", () => {
    mockGetShowDeleted.mockReturnValue(true);
    render(<TrashCategories />);
    expect(screen.getByTestId("trash-item-1")).toBeInTheDocument();
    expect(screen.getByText("Deleted CAR")).toBeInTheDocument();
  });

  it("calls restoreCategory when restore button clicked", () => {
    mockGetShowDeleted.mockReturnValue(true);
    render(<TrashCategories />);
    fireEvent.click(screen.getByTestId("restore-1"));
    expect(mockRestoreCategory).toHaveBeenCalledWith("1");
  });

  it("shows active state when trash is open", () => {
    mockGetShowDeleted.mockReturnValue(true);
    render(<TrashCategories />);
    const button = screen.getByTestId("trash-toggle");
    expect(button.className).toContain("active");
  });
});
