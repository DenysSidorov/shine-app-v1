import { Link, useNavigate, useParams } from "react-router-dom";
import s from "./Task.module.scss";
import { IoSettingsSharp } from "react-icons/io5";
import Checkbox from "@/components/checkbox";
import { TaskType } from "@/types/task.ts";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { Fragment } from "react";
import TaskActions from "@/sections/task-actions";
import { observer } from "mobx-react";
import TransitionWrapper from "@/hocs/TransitionWrapper.tsx";
import classNames from "classnames";

const Task = observer(
  ({ task, categoryTitle, color = "transparent" }: { task: TaskType; categoryTitle?: string; color?: string }) => {
    const { categoryId = "" } = useParams();
    const navigate = useNavigate();
    const { updateTaskStatusInCurrentCategory, setActionsTaskId, getActionsTaskId, removeTask } = useAppStore();
    const isList = !!task.todos?.length;
    const url = `/categories/${categoryId}/todos/${task.id}`;

    const changeTaskStatus = () => {
      updateTaskStatusInCurrentCategory({
        status: !task.completed,
        categoryId: String(categoryId),
        idTask: task.id,
      });
      setActionsTaskId({ id: "" });
    };

    const showActions = () => {
      if (getActionsTaskId() === task.id) {
        setActionsTaskId({ id: "" });
      } else {
        setActionsTaskId({ id: task.id });
      }
    };

    const isShowActions = getActionsTaskId() === task.id;

    const markTaskAndTodosAsCompleted = () => {
      changeTaskStatus();
    };

    const editTask = () => {
      navigate(url);
    };

    const deleteTaskWithTodos = async () => {
      await removeTask({ categoryId, idTask: task.id });
    };

    return (
      <Fragment>
        {isShowActions && (
          <TransitionWrapper>
            <TaskActions
              markTaskAndTodosAsCompleted={markTaskAndTodosAsCompleted}
              editTask={editTask}
              deleteTaskWithTodos={deleteTaskWithTodos}
            />
          </TransitionWrapper>
        )}
        <div className={s.item}>
          <div className={s.mark} style={{ background: color }} />
          <div className={`noWrap ${s.content}`}>
            <Link to={url}>
              <div className={s.title}>{categoryTitle}</div>
            </Link>
            <div className={s.textWrapper}>
              {isList ? (
                <Link to={url}>
                  <div className={s.listBlock}>
                    <div className={s.list}>{task.todos.length}</div>
                    <div className={classNames(s.text, task.completed && s.checked)}>{task.name}</div>
                  </div>
                </Link>
              ) : (
                <Checkbox
                  onChange={changeTaskStatus}
                  label={task.name}
                  name={task.id + task.name}
                  value={task.completed}
                  completed={task.completed}
                  labelClassName={s.labelClassName}
                  className={s.checkbox}
                  hideCheckbox={isList}
                />
              )}
            </div>
            <div className={s.date}>{task.date.toString()}</div>
          </div>
          <div className={s.action}>
            <IoSettingsSharp onClick={showActions} />
          </div>
        </div>
      </Fragment>
    );
  },
);

export default Task;
