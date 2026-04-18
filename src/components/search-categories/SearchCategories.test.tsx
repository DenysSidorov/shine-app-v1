import { screen, render, fireEvent } from "@testing-library/react";
import SearchCategories from "@/components/search-categories/SearchCategories.tsx";
import { beforeEach, describe, expect } from "vitest";
import { useAppStore } from "@/hooks/useAppStore.tsx";

vi.mock("@/hooks/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

describe("SearchCategories", () => {
  const mockSetSearchQuery = vi.fn();
  const mockGetSearchQuery = vi.fn().mockReturnValue("");

  beforeEach(() => {
    vi.clearAllMocks();
    mockGetSearchQuery.mockReturnValue("");
    (useAppStore as jest.Mock).mockReturnValue({
      setSearchQuery: mockSetSearchQuery,
      getSearchQuery: mockGetSearchQuery,
    });
  });

  it("renders search input", () => {
    render(<SearchCategories />);
    expect(screen.getByTestId("search-categories-input")).toBeInTheDocument();
  });

  it("renders with placeholder text", () => {
    render(<SearchCategories />);
    expect(screen.getByPlaceholderText("Search categories...")).toBeInTheDocument();
  });

  it("calls setSearchQuery on input change", () => {
    render(<SearchCategories />);
    const input = screen.getByTestId("search-categories-input");
    fireEvent.change(input, { target: { value: "CAR" } });
    expect(mockSetSearchQuery).toHaveBeenCalledWith("CAR");
  });

  it("displays current search query value", () => {
    mockGetSearchQuery.mockReturnValue("DAILY");
    render(<SearchCategories />);
    const input = screen.getByTestId("search-categories-input") as HTMLInputElement;
    expect(input.value).toBe("DAILY");
  });
});
