import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import NewTodo from "@/components/new-todo/NewTodo";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

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

  it("calls addNew with input value and switches back to button mode on check icon click", async () => {
    render(<NewTodo addNew={mockAddNew} />);
    fireEvent.click(screen.getByText("Add more todos"));
    const inputElement = screen.getByPlaceholderText("New todo...") as HTMLInputElement;
    await userEvent.type(inputElement, "Test Todo");
    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(mockAddNew).toHaveBeenCalledWith("Test Todo");
      expect(screen.getByText("Add more todos")).toBeInTheDocument();
    });
  });

  it("does not call addNew if input is empty and switches back to button mode on check icon click", async () => {
    render(<NewTodo addNew={mockAddNew} />);
    await userEvent.click(screen.getByText("Add more todos"));
    const inputElement = screen.getByPlaceholderText("New todo...") as HTMLInputElement;
    await userEvent.clear(inputElement); // Ensure the input is empty
    await userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(mockAddNew).not.toHaveBeenCalled();
      expect(screen.getByText("Add more todos")).toBeInTheDocument();
    });
  });
});
