import { fireEvent, render, screen } from "@testing-library/react";
import TaskPriority from "@/components/task-priority/TaskPriority.tsx";
import { describe, it, expect } from "vitest";

describe("TaskPriority", () => {
  it("renders priority buttons", () => {
    render(<TaskPriority />);
    expect(screen.getByTestId("priority-low")).toBeInTheDocument();
    expect(screen.getByTestId("priority-medium")).toBeInTheDocument();
    expect(screen.getByTestId("priority-high")).toBeInTheDocument();
  });

  it("shows medium priority as active by default", () => {
    render(<TaskPriority />);
    const mediumButton = screen.getByTestId("priority-medium");
    expect(mediumButton.parentElement?.className).toContain("active");
  });

  it("calls onChange when priority is clicked", () => {
    const mockOnChange = vi.fn();
    render(<TaskPriority onChange={mockOnChange} />);
    fireEvent.click(screen.getByTestId("priority-high"));
    expect(mockOnChange).toHaveBeenCalledWith("high");
  });

  it("does not call onChange when disabled", () => {
    const mockOnChange = vi.fn();
    render(<TaskPriority onChange={mockOnChange} disabled />);
    fireEvent.click(screen.getByTestId("priority-high"));
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it("shows correct priority as active", () => {
    render(<TaskPriority priority="high" />);
    const highButton = screen.getByTestId("priority-high");
    expect(highButton.parentElement?.className).toContain("active");
  });
});
