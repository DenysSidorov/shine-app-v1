import {useParams} from 'react-router-dom';

function Tasks() {
    let { categoryId } = useParams();
    console.log('render tasks');
    return (
        <div>Tasks of Category with id: {categoryId}</div>
    )
}
export default Tasks
