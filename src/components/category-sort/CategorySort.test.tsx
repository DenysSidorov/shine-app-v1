import { screen, render, fireEvent } from "@testing-library/react";
import CategorySort from "@/components/category-sort/CategorySort.tsx";
import { beforeEach, describe, expect } from "vitest";
import { useAppStore } from "@/hooks/useAppStore.tsx";

vi.mock("@/hooks/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

vi.mock("react-icons/bs", () => ({
  BsSortAlphaDown: () => <div />,
  BsCalendar3: () => <div />,
  BsGripper: () => <div />,
}));

describe("CategorySort", () => {
  const mockSetSortBy = vi.fn();
  const mockGetSortBy = vi.fn().mockReturnValue("manual");

  beforeEach(() => {
    vi.clearAllMocks();
    mockGetSortBy.mockReturnValue("manual");
    (useAppStore as jest.Mock).mockReturnValue({
      setSortBy: mockSetSortBy,
      getSortBy: mockGetSortBy,
    });
  });

  it("renders sort buttons", () => {
    render(<CategorySort />);
    expect(screen.getByTestId("sort-manual")).toBeInTheDocument();
    expect(screen.getByTestId("sort-name")).toBeInTheDocument();
    expect(screen.getByTestId("sort-date")).toBeInTheDocument();
  });

  it("shows active sort option", () => {
    render(<CategorySort />);
    const button = screen.getByTestId("sort-manual");
    expect(button.parentElement?.className).toContain("active");
  });

  it("calls setSortBy when sort option is clicked", () => {
    render(<CategorySort />);
    fireEvent.click(screen.getByTestId("sort-name"));
    expect(mockSetSortBy).toHaveBeenCalledWith("name");
  });

  it("updates active sort when getSortBy changes", () => {
    mockGetSortBy.mockReturnValue("date");
    render(<CategorySort />);
    const button = screen.getByTestId("sort-date");
    expect(button.parentElement?.className).toContain("active");
  });
});
