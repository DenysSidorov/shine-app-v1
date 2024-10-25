import { Link, useParams } from "react-router-dom";
import s from "./Task.module.scss";
import { MdEdit } from "react-icons/md";
import Checkbox from "@/components/checkbox";
import { TaskType } from "@/types/task.ts";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { Fragment } from "react";
import TaskActions from "@/sections/task-actions";
import { observer } from "mobx-react";
import TransitionWrapper from "@/hocs/TransitionWrapper.tsx";

function Task({ task, categoryTitle }: { task: TaskType; categoryTitle?: string }) {
  const { categoryId = "" } = useParams();
  const { updateTaskStatusInCurrentCategory, setActionsTaskId, getActionsTaskId } = useAppStore();
  const isList = !!task.todos?.length;
  const url = `/categories/${categoryId}/tasks/${task.id}`;

  const oneTaskClickHandler = () => {
    updateTaskStatusInCurrentCategory({
      status: !task.completed,
      categoryId: String(categoryId),
      idTask: task.id,
    });
  };

  const showActions = () => {
    setActionsTaskId({ id: task.id });
  };

  const isShowActions = getActionsTaskId() === task.id;

  return (
    <Fragment>
      {isShowActions && (
        <TransitionWrapper>
          <TaskActions />
        </TransitionWrapper>
      )}
      <div className={s.item}>
        <div className={s.mark} />
        <div className={`noWrap ${s.content}`}>
          <Link to={url}>
            <div className={s.title}>{categoryTitle}</div>
          </Link>
          <div className={s.textWrapper}>
            {isList ? (
              <Link to={url}>
                <div className={s.listBlock}>
                  <div className={s.list}>List</div>
                  <div className={s.text}>{task.name}</div>
                </div>
              </Link>
            ) : (
              <Checkbox
                onChange={oneTaskClickHandler}
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
          <MdEdit onClick={showActions} />
        </div>
      </div>
    </Fragment>
  );
}

export default observer(Task);
