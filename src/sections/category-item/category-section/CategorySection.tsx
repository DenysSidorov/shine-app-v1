import { Link, useParams } from "react-router-dom";
import s from "./CategorySection.module.scss";
import { MdEdit } from "react-icons/md";
import Checkbox from "@/components/checkbox";

function CategorySection() {
  const { categoryId } = useParams();
  const isList = false;
  const url = `/categories/${categoryId}/tasks`;
  return (
    <div className={s.item}>
      <div className={s.mark} />
      <div className={`noWrap ${s.content}`}>
        <Link to={url}>
          <div className={s.title}>daily</div>
        </Link>
        <div className={s.textWrapper}>
          {isList ? (
            <Link to={url}>
              <div className={s.listBlock}>
                <div className={s.list}>List</div>
                <div className={s.text}>Order Tools2</div>
              </div>
            </Link>
          ) : (
            <Checkbox
              label={"Order Tools"}
              name={"Order Tools"}
              value={true}
              completed={false}
              labelClassName={s.labelClassName}
              className={s.checkbox}
              hideCheckbox={isList}
            />
          )}
        </div>
        <div className={s.date}>at 06:30PM</div>
      </div>
      <div className={s.action}>
        <MdEdit />
      </div>
    </div>
  );
}

export default CategorySection;
