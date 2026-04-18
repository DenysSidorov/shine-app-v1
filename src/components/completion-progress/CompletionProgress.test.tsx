import { render, screen } from "@testing-library/react";
import CompletionProgress from "@/components/completion-progress/CompletionProgress.tsx";
import { describe, it, expect } from "vitest";

describe("CompletionProgress", () => {
  it("renders progress bar", () => {
    render(<CompletionProgress percent={50} />);
    expect(screen.getByTestId("completion-progress")).toBeInTheDocument();
  });

  it("displays correct percentage label", () => {
    render(<CompletionProgress percent={75} />);
    expect(screen.getByTestId("progress-label")).toHaveTextContent("75%");
  });

  it("clamps percentage to 0-100 range", () => {
    const { rerender } = render(<CompletionProgress percent={150} />);
    expect(screen.getByTestId("progress-label")).toHaveTextContent("100%");

    rerender(<CompletionProgress percent={-10} />);
    expect(screen.getByTestId("progress-label")).toHaveTextContent("0%");
  });

  it("hides label when showLabel is false", () => {
    render(<CompletionProgress percent={50} showLabel={false} />);
    expect(screen.queryByTestId("progress-label")).not.toBeInTheDocument();
  });

  it("sets fill width based on percentage", () => {
    render(<CompletionProgress percent={60} />);
    const fill = screen.getByTestId("progress-fill");
    expect(fill).toHaveStyle("width: 60%");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<CompletionProgress percent={50} size="small" />);
    expect(screen.getByTestId("completion-progress")).toHaveClass("small");

    rerender(<CompletionProgress percent={50} size="large" />);
    expect(screen.getByTestId("completion-progress")).toHaveClass("large");
  });
});
