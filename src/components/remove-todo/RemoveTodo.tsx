import s from "./RemoveTodo.module.scss";
import { useCallback, useState } from "react";
import { useAppStore } from "@/hooks/useAppStore.tsx";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";

function RemoveTodo() {
  const { categoryId = "", idTask = "" } = useParams();
  const navigate = useNavigate();
  const { removeTask } = useAppStore();
  const [isRemovingTaskWithTodos, setIsRemovingTaskWithTodos] = useState<boolean>(false);

  const handleRemoveAction = useCallback(() => {
    const removeTaskWithTodos = async () => {
      if (!isRemovingTaskWithTodos) {
        setIsRemovingTaskWithTodos(true);
        await removeTask({ categoryId, idTask });
        navigate(`/categories/${categoryId}`);
      }
    };
    removeTaskWithTodos();
  }, [categoryId, idTask, isRemovingTaskWithTodos, navigate, removeTask]);

  return (
    <div className={s.action}>
      {!isRemovingTaskWithTodos && <MdDelete onClick={handleRemoveAction} />}
      {isRemovingTaskWithTodos && (
        <div className={s.preloader}>
          <VscLoading />
        </div>
      )}
    </div>
  );
}

export default RemoveTodo;
