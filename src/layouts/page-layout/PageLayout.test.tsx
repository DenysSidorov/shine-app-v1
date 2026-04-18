import { render, screen } from "@testing-library/react";
import PageLayout from "./PageLayout";

vi.mock("react-router-dom", () => ({
  Outlet: () => <div data-testid="outlet" />,
  useLocation: vi.fn().mockReturnValue({ pathname: "/categories" }),
}));

vi.mock("@/sections/header", () => ({
  default: () => <div data-testid="header" />,
}));

vi.mock("@/sections/categories-list/new-item", () => ({
  default: () => <div data-testid="new-item" />,
}));

describe("PageLayout", () => {
  it("renders the wrapper element", () => {
    render(<PageLayout />);
    expect(screen.getByTestId("outlet")).toBeInTheDocument();
  });

  it("renders the Header section", () => {
    render(<PageLayout />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders the Outlet", () => {
    render(<PageLayout />);
    expect(screen.getByTestId("outlet")).toBeInTheDocument();
  });

  it("renders children when provided", () => {
    render(
      <PageLayout>
        <span data-testid="child">child content</span>
      </PageLayout>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("renders NewItem when isForErrorPage is not set", () => {
    render(<PageLayout />);
    expect(screen.getByTestId("new-item")).toBeInTheDocument();
  });

  it("does not render NewItem when isForErrorPage is true", () => {
    render(<PageLayout isForErrorPage={true} />);
    expect(screen.queryByTestId("new-item")).not.toBeInTheDocument();
  });
});
