import { useParams } from "react-router-dom";

function Tasks() {
  const { categoryId } = useParams();
  console.log("render tasks3");
  return <div className="lol">Tasks of Category with id: {categoryId}</div>;
}

export default Tasks;
