import { screen, render, fireEvent } from "@testing-library/react";
import DraggableCategories from "@/components/draggable-categories/DraggableCategories.tsx";
import { beforeEach, describe, expect } from "vitest";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { CategoryType } from "@/types/category.ts";

vi.mock("@/hooks/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

describe("DraggableCategories", () => {
  const mockReorderCategories = vi.fn();

  const categories: CategoryType[] = [
    { id: "1", title: "CAR", type: "list", color: "#000", date: new Date(), tasks: [], order: 0 },
    { id: "2", title: "DAILY", type: "list", color: "#000", date: new Date(), tasks: [], order: 1 },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    (useAppStore as jest.Mock).mockReturnValue({
      reorderCategories: mockReorderCategories,
    });
  });

  it("renders draggable items", () => {
    render(<DraggableCategories categories={categories} renderCategory={(c) => <div>{c.title}</div>} />);
    expect(screen.getByTestId("draggable-item-1")).toBeInTheDocument();
    expect(screen.getByTestId("draggable-item-2")).toBeInTheDocument();
  });

  it("renders category content via renderCategory", () => {
    render(
      <DraggableCategories
        categories={categories}
        renderCategory={(c) => <div data-testid="category-title">{c.title}</div>}
      />,
    );
    expect(screen.getByText("CAR")).toBeInTheDocument();
    expect(screen.getByText("DAILY")).toBeInTheDocument();
  });

  it("handles drag start", () => {
    render(<DraggableCategories categories={categories} renderCategory={(c) => <div>{c.title}</div>} />);
    const item = screen.getByTestId("draggable-item-1");
    fireEvent.dragStart(item);
    expect(item.className).toContain("dragging");
  });

  it("shows drag over state", () => {
    render(<DraggableCategories categories={categories} renderCategory={(c) => <div>{c.title}</div>} />);
    const item2 = screen.getByTestId("draggable-item-2");
    fireEvent.dragOver(item2, { preventDefault: () => {} });
    expect(item2.className).toContain("dragOver");
  });

  it("calls reorderCategories on drop", () => {
    render(<DraggableCategories categories={categories} renderCategory={(c) => <div>{c.title}</div>} />);
    const item1 = screen.getByTestId("draggable-item-1");
    const item2 = screen.getByTestId("draggable-item-2");

    fireEvent.dragStart(item1);
    fireEvent.dragOver(item2, { preventDefault: () => {} });
    fireEvent.drop(item2);

    expect(mockReorderCategories).toHaveBeenCalledWith("1", 1);
  });
});
