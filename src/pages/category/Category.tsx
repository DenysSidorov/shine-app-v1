import { useParams } from "react-router-dom";

function Category() {
  const { categoryId } = useParams();
  return <div>Category id is: {categoryId}</div>;
}

export default Category;
