import { render, screen, fireEvent } from "@testing-library/react";
import NewTodo from "@/components/new-todo/NewTodo";
import { describe, it, expect, vi } from "vitest";

describe("NewTodo", () => {
  const mockAddNew = vi.fn();

  beforeEach(() => {
    mockAddNew.mockReset();
  });

  it("renders add more todos button initially", () => {
    render(<NewTodo addNew={mockAddNew} />);
    expect(screen.getByText("Add more todos")).toBeInTheDocument();
  });

  it("switches to input mode when add more todos button is clicked", () => {
    render(<NewTodo addNew={mockAddNew} />);
    fireEvent.click(screen.getByText("Add more todos"));
    expect(screen.getByPlaceholderText("New todo...")).toBeInTheDocument();
  });

  it("calls addNew with input value and switches back to button mode on check icon click", () => {
    render(<NewTodo addNew={mockAddNew} />);
    fireEvent.click(screen.getByText("Add more todos"));
    const inputElement = screen.getByPlaceholderText("New todo...") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Test Todo" } });
    fireEvent.click(screen.getByRole("button"));
    expect(mockAddNew).toHaveBeenCalledWith("Test Todo");
    expect(screen.getByText("Add more todos")).toBeInTheDocument();
  });

  it("does not call addNew if input is empty and switches back to button mode on check icon click", () => {
    render(<NewTodo addNew={mockAddNew} />);
    fireEvent.click(screen.getByText("Add more todos"));
    fireEvent.click(screen.getByRole("button"));
    expect(mockAddNew).not.toHaveBeenCalled();
    expect(screen.getByText("Add more todos")).toBeInTheDocument();
  });
});
