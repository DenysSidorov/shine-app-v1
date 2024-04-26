import {useParams} from 'react-router-dom';

function Tasks() {
    let { categoryId } = useParams();
    return (
        <div>Category: {categoryId}</div>
    )
}
export default Tasks
