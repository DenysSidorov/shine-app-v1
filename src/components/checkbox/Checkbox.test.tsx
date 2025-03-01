import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "@/components/checkbox/Checkbox";
import { describe, it, expect } from "vitest";

describe("Checkbox", () => {
  it("renders checkbox with label", () => {
    render(<Checkbox name="test" value={false} label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("calls onChange when clicked", () => {
    const mockOnChange = vi.fn();
    render(<Checkbox name="test" value={false} label="Test Label2" onChange={mockOnChange} />);
    fireEvent.click(screen.getByText("Test Label2"));
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("does not call onChange when disabled", () => {
    const mockOnChange = vi.fn();
    render(<Checkbox name="test" value={false} label="Test Label3" onChange={mockOnChange} disabled />);
    fireEvent.click(screen.getByText("Test Label3"));
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it("shows check icon when checked", () => {
    render(<Checkbox name="test" value={true} label="Test Label" />);
    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
  });

  it("does not show check icon when hideCheckbox is true", () => {
    render(<Checkbox name="test" value={false} label="Test Label" hideCheckbox />);
    expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument();
  });

  it("applies custom class names", () => {
    render(
      <Checkbox
        name="test"
        value={false}
        label="Test Label4"
        className="custom-class"
        labelClassName="custom-label-class"
        checkboxClassName="custom-checkbox-class"
      />,
    );
    expect(screen.getByTestId("container")).toHaveClass("custom-class");
    expect(screen.getByText("Test Label4")).toHaveClass("custom-label-class");
    expect(screen.getByTestId("check-icon-container")).toHaveClass("custom-checkbox-class");
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
