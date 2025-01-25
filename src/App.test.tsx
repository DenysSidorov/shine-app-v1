import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    // show JSX in console
    screen.debug();

    expect(screen.getByText(/Hello, Vitest!/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a simple React app for testing./i)).toBeInTheDocument();
  });
});
