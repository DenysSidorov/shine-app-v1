import { fireEvent, render, screen } from "@testing-library/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppStore } from "@/hooks/useAppStore";
import AddNewTask from "./AddNewTask";

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(),
  useNavigate: vi.fn(),
  useParams: vi.fn(),
}));

vi.mock("@/hooks/useAppStore", () => ({
  useAppStore: vi.fn(),
}));

describe("AddNewTask", () => {
  const mockNavigate = vi.fn();
  const mockGetNewTitle = vi.fn();
  const mockGetIsLoadingNewTaskStatus = vi.fn();
  const mockSaveNewTask = vi.fn();

  beforeEach(() => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: "/categories/1/new-task" });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useParams as jest.Mock).mockReturnValue({ categoryId: "1" });
    (useAppStore as jest.Mock).mockReturnValue({
      getNewTitle: mockGetNewTitle,
      getIsLoadingNewTaskStatus: mockGetIsLoadingNewTaskStatus,
      saveNewTask: mockSaveNewTask,
    });
  });

  it("renders with default status", () => {
    mockGetNewTitle.mockReturnValue("");
    mockGetIsLoadingNewTaskStatus.mockReturnValue(false);

    render(<AddNewTask />);

    expect(screen.getByTestId("not-ready")).toBeInTheDocument();
  });

  it("navigates to new task route on click", async () => {
    mockGetNewTitle.mockReturnValue("");
    mockGetIsLoadingNewTaskStatus.mockReturnValue(false);
    (useLocation as jest.Mock).mockReturnValue({ pathname: "/categories/1" });

    render(<AddNewTask />);

    fireEvent.click(screen.getByTestId("wrapper"));

    expect(await mockNavigate).toHaveBeenCalledWith("/categories/1/new-task");
  });

  it("shows loading icon when in progress", () => {
    mockGetNewTitle.mockReturnValue("");
    mockGetIsLoadingNewTaskStatus.mockReturnValue(true);

    render(<AddNewTask />);

    expect(screen.getByTestId("in-progress")).toBeInTheDocument();
  });
  //
  it("shows check icon when ready for save", () => {
    mockGetNewTitle.mockReturnValue("New Task");
    mockGetIsLoadingNewTaskStatus.mockReturnValue(false);

    render(<AddNewTask />);

    expect(screen.getByTestId("ready-for-save")).toBeInTheDocument();
  });

  it("calls saveNewTask when clicked and ready for save", async () => {
    mockGetNewTitle.mockReturnValue("New Task");
    mockGetIsLoadingNewTaskStatus.mockReturnValue(false);
    mockSaveNewTask.mockResolvedValue(true);

    render(<AddNewTask />);

    fireEvent.click(screen.getByTestId("wrapper"));

    expect(await mockSaveNewTask).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/categories/1");
  });
});
