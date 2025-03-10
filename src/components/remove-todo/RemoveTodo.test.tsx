import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RemoveTodo from "@/components/remove-todo/RemoveTodo";
import { useAppStore } from "@/hooks/useAppStore";
import { useNavigate, useParams } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/hooks/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
  useParams: vi.fn(),
}));

describe("RemoveTodo", () => {
  const mockRemoveTask = vi.fn();
  const mockNavigate = vi.fn();
  const mockUseParams = { categoryId: "1", idTask: "1" };

  beforeEach(() => {
    (useAppStore as jest.Mock).mockReturnValue({
      removeTask: mockRemoveTask,
    });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useParams as jest.Mock).mockReturnValue(mockUseParams);
  });

  it("renders delete icon initially", () => {
    render(<RemoveTodo />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls removeTask and navigate on delete icon click", async () => {
    render(<RemoveTodo />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => expect(mockRemoveTask).toHaveBeenCalledWith({ categoryId: "1", idTask: "1" }));
    expect(mockNavigate).toHaveBeenCalledWith("/categories/1");
  });

  it("shows loading icon while removing task", async () => {
    render(<RemoveTodo />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("status")).toBeInTheDocument();
    await waitFor(() => expect(mockRemoveTask).toHaveBeenCalled());
  });
});
