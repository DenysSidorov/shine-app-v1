import { IoAddSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import s from "./AddNewTask.module.scss";
import { useMemo } from "react";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react";

interface AddNewTaskI {}

enum Statuses {
  ADD_NEW = "ADD_NEW",
  IN_PROGRESS = "IN_PROGRESS",
  READY_FOR_SAVE = "READY_FOR_SAVE",
  NOT_READY = "NOT_READY",
}

const AddNewTask = observer(({}: AddNewTaskI) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { getNewTitle, getIsLoadingNewTaskStatus, saveNewTask } = useAppStore();

  const isNewTaskRoute = pathname.includes("/categories") && pathname.includes("/new-task");

  const getStatus = () => {
    if (isNewTaskRoute) {
      if (getIsLoadingNewTaskStatus()) {
        return "IN_PROGRESS";
      }
      if (getNewTitle() === "") {
        return "NOT_READY";
      }
      if (getNewTitle().length > 0) {
        return "READY_FOR_SAVE";
      }
    }
    return "ADD_NEW";
  };

  const status = getStatus();

  const icon = useMemo(() => {
    switch (status) {
      case Statuses.IN_PROGRESS:
        return <AiOutlineLoading3Quarters data-testid="in-progress" />;
      case Statuses.READY_FOR_SAVE:
        return <FaCheck data-testid="ready-for-save" />;
      case Statuses.NOT_READY:
        return <CiNoWaitingSign data-testid="not-ready" />;
      default:
        return <IoAddSharp data-testid="add-news" />;
    }
  }, [status]);

  const background = useMemo(() => {
    switch (status) {
      case Statuses.IN_PROGRESS:
        return s.inProgress;
      case Statuses.READY_FOR_SAVE:
        return s.readyForSave;
      case Statuses.NOT_READY:
        return s.notReady;
      default:
        return s.addNew;
    }
  }, [status]);

  const userHandler = async () => {
    if (!isNewTaskRoute) {
      navigate(`/categories/${categoryId}/new-task`);
    } else {
      if (status !== Statuses.IN_PROGRESS && getNewTitle().length > 0) {
        const response = await saveNewTask();
        if (response) {
          navigate(`/categories/${categoryId}`);
        }
      }
    }
  };

  return (
    <div onClick={userHandler} className={`${s.wrapper} ${background}`} data-testid="wrapper">
      {icon}
    </div>
  );
});

export default AddNewTask;
