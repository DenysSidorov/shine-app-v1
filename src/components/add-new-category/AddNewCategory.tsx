import { IoAddSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import s from "./AddNewCategory.module.scss";
import { useState } from "react";
import { useAppStore } from "@/hooks/useAppStore.tsx";

function AddNewCategory() {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const { addNewCategory } = useAppStore();

  const userHandler = async () => {
    if (!isLoad) {
      setIsLoad(true);
      try {
        await addNewCategory();
      } catch (error) {
        console.log("error:", error);
      } finally {
        setIsLoad(false);
      }
    }
  };

  return (
    <div onClick={userHandler} className={`${s.wrapper} ${isLoad ? s.inProgress : s.addNew}`} data-testid="wrapper">
      {isLoad ? <AiOutlineLoading3Quarters data-testid="loading-icon" /> : <IoAddSharp data-testid="add-icon" />}
    </div>
  );
}

export default AddNewCategory;
