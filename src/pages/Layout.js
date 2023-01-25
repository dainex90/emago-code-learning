import { Outlet, Link } from "react-router-dom";
import dropdownarrow from '../Images/down-arrow.png';
import {useState} from 'react';
import logoutbtn from '../Images/signoutalt.png'
import fakeUsers from '../Data/emago_fake_users.json';
const Layout = () => {

  // state 
  // e handlers
  function setLinkSelection(e){
    if (e.target.alt == "home")
    {
      document.getElementById("home-link").style.borderBottom = "1px solid white";
    }

    else if(e.target.id == "blogs-link")
    {
      document.getElementById("blogs-link").style.borderBottom = "1px solid white";
    }

    else
    {
      document.getElementById("contact-link").style.borderBottom = "1px solid white";
    }
  }

  // Functions 
  const fetchUserName = (id) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        return this.statusText
        }
    xhttp.open("GET", "http://dummyimage.com/148x100.png/5fa2dd/ffffff", true);
    xhttp.send();
  }

  return (
    <>
      <nav id="main-nav-bar">
        <h1 id="company-name">emago<span style={{fontFamily: 'cursive', color: 'lightgrey'}}>code</span></h1>
        <ul>
          <li className="main-nav-links" id="home-link" alt="home" onClick={e => setLinkSelection(e)}>
            <Link to="/" >Home</Link>
          </li>
          <li className="main-nav-links" id="blogs-link" onClick={e => setLinkSelection(e)}>
            <Link to="/blogs" >Blogs</Link>
          </li>
          <li className="main-nav-links" id="contact-link" onClick={e => setLinkSelection(e)}>
            <Link to="/contact">Contact</Link>
          </li>
        
          <nav id='alt-nav'>
                <div id="arrowdropdown">
                    <p>More</p>
                    <img src={dropdownarrow} alt="dropdown" width="20px" height="20px"></img>
                        <nav className='nav-dropdown'>

                            <p style={{color: 'white', textAlign: 'right', backgroundColor: 'rgb(79, 201, 231)', width: "fit-content", padding: "2px", borderRadius: "2px"}}>Logged in as: </p>

                            <Link to="/" className='altdroplinks'>Learn More</Link>

                            <Link to="/" className='altdroplinks'>Collaborate</Link>

                            <Link to="/" className='altdroplinks'>Forum</Link>

                            <Link to={"/"} id='logoutbtn' style={{textDecoration: 'none', color: 'azure'}}> Log Out</Link>

                            <p>{fetchUserName(1)}</p>
                        </nav>
                        
                </div>
            </nav>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;