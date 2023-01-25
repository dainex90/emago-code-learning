import {Link} from 'react-router-dom';
import signoutalt from '../Images/signoutalt.png';

function SideBar(props){

    return (
        <div id='sidebar-container'>
            <nav>
                <ul id='sidebar'>
                    <li>
                        <Link className='sidebar-links' to="/">My Courses</Link>
                    </li>
                    <li>
                        <Link className='sidebar-links' to="/">Emago Wiki</Link>
                    </li>
                    <li>
                        <Link className='sidebar-links' to="/" >News</Link>
                    </li>
                    <li>
                        <Link className='sidebar-links'to="/">Resources</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}


export default SideBar;