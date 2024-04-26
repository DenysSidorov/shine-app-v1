import {Outlet} from 'react-router-dom';

function RootLayout() {
    return (
        <div className="App">
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}
export default RootLayout
