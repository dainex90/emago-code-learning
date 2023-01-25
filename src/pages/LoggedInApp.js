import SideBar from './SideBar';
import FooterContent from './FooterContent';
import SearchBar from './SearchBar';
import followers from '../Images/followers.png';
import Tagline from './Tagline';
import {useState} from 'react';
import HeaderText from '../HeaderText';
import AjaxRequest from '../AjaxRequest';

const LoggedInApp = (props) => 
{   
    const [search, setSearch] = useState("Search..");
    const [darkModeIsOff, setDarkModeIsOff] = useState(true);

    // callbacks
    const callback = (text) => {
        setSearch(text);
    }

    // e handlers ->
    const darkModeSwitch = (e) => {
        if (e.target.value){
            document.getElementById("dark-mode-button").style.backgroundColor = "yellowgreen";
            setDarkModeIsOff(false);
            changeTheme(e, "rgb(46, 54, 54)");
            return;
        }
        document.getElementById("dark-mode-button").style.backgroundColor = "red";
        setDarkModeIsOff(true);
        changeTheme(e, "rgb(255, 255, 255)");
    }

    const changeTheme = (e, color) => {
        // Background color change
        document.body.style.backgroundColor = color;
        
        // Sidebar theme change
        document.getElementById("sidebar-container").firstChild.firstChild.style.backgroundColor = "rgb(48, 58, 60)";
        document.getElementById("sidebar-container").firstChild.firstChild.style.border = "0px";
        
        // sidebar-link colors
        const sidebarLinks = document.getElementsByClassName("sidebar-links");

        for (let index = 0; index < sidebarLinks.length; index++) {
            const element = sidebarLinks[index];
            element.style.color = "white";
        }
    }

    return (
        <>
            <Tagline isLoggedIn={true} />
            <div id='logged-in-header-content'>
                <SearchBar search={search} setSearch={setSearch} callback={callback}/>
                    <div id='follow-button'>
                        <a href=''>
                            <img  src={followers} alt='follow-us' width='40px' heigth='40px'></img>
                            <p>Follow Us!</p>
                        </a>
                    </div>
                    
                    <div id='dark-mode-container'>
                        <p style={{color: 'aliceblue', fontSize: 'small'}}>Darkmode</p>
                        <div>
                            <button id='dark-mode-button'
                                value={darkModeIsOff}
                                onClick={e => darkModeSwitch(e)}
                            ></button>
                        </div>
                    </div>
            </div>
            
            <div id='main-flex-container'>
                <SideBar />
                <div className='main-content-layout'>
                    <HeaderText text="Welcome back" specialText="dainex" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Non odio euismod lacinia at quis risus sed vulputate odio. Sed turpis tincidunt id aliquet. Velit scelerisque in dictum non consectetur. 
                        Porttitor leo a diam sollicitudin tempor id eu. In mollis nunc sed id semper. Consectetur adipiscing elit ut aliquam purus sit. Lacinia quis vel 
                        eros donec. Enim nulla aliquet porttitor lacus luctus accumsan. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Nec feugiat in 
                        fermentum posuere urna nec tincidunt. Dictumst quisque sagittis purus sit amet volutpat. Eget nullam non nisi est sit amet facilisis magna. 
                        Arcu non odio euismod lacinia at quis risus sed.

                        Eros in cursus turpis massa tincidunt dui ut. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Habitant morbi tristique senectus et netus et malesuada fames ac. 
                        Sed id semper risus in hendrerit gravida rutrum. Ultrices eros in cursus turpis. Nibh cras pulvinar mattis nunc. Egestas diam in arcu cursus euismod quis viverra nibh cras. 
                        Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Amet nisl suscipit adipiscing bibendum est ultricies. Consequat ac felis donec et odio pellentesque diam 
                        volutpat commodo. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Ac placerat vestibulum lectus mauris ultrices eros in. Vel pretium lectus quam id leo in vitae turpis 
                        massa.
                    </p>
                    <HeaderText text="Continue your course in" specialText="JavaScript" />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Non odio euismod lacinia at quis risus sed vulputate odio. Sed turpis tincidunt id aliquet. Velit scelerisque in dictum non consectetur. 
                        Porttitor leo a diam sollicitudin tempor id eu. In mollis nunc sed id semper. Consectetur adipiscing elit ut aliquam purus sit. Lacinia quis vel 
                        eros donec. Enim nulla aliquet porttitor lacus luctus accumsan. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Nec feugiat in 
                        fermentum posuere urna nec tincidunt. Dictumst quisque sagittis purus sit amet volutpat. Eget nullam non nisi est sit amet facilisis magna. 
                        Arcu non odio euismod lacinia at quis risus sed.

                        Eros in cursus turpis massa tincidunt dui ut. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Habitant morbi tristique senectus et netus et malesuada fames ac. 
                        Sed id semper risus in hendrerit gravida rutrum. Ultrices eros in cursus turpis. Nibh cras pulvinar mattis nunc. Egestas diam in arcu cursus euismod quis viverra nibh cras. 
                        Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Amet nisl suscipit adipiscing bibendum est ultricies. Consequat ac felis donec et odio pellentesque diam 
                        volutpat commodo. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Ac placerat vestibulum lectus mauris ultrices eros in. Vel pretium lectus quam id leo in vitae turpis 
                        massa.</p>
                </div>
            </div>
        </>
    );
}


export default LoggedInApp;