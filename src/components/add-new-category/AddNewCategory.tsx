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
    <div onClick={userHandler} className={`${s.wrapper} ${isLoad ? s.inProgress : s.addNew}`}>
      {isLoad ? <AiOutlineLoading3Quarters /> : <IoAddSharp />}
    </div>
  );
}

export default AddNewCategory;
