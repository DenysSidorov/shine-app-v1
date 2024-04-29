import {useParams} from 'react-router-dom';

function Category() {
    let { categoryId } = useParams();
    return (
        <div>Category id is: {categoryId}</div>
    )
}
export default Category
