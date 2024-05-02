import { useState } from "react";

function Categories() {
  const [a, setA] = useState(1);
  const handler = () => setA(a + 1);
  console.log(a);
  return <div onClick={handler}>List of all Categories - {a}</div>;
}

export default Categories;
