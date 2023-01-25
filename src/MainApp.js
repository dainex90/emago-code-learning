
import style from './style.css'
import { React, useCallback, useState, useRef, useEffect} from "react";
import {Link, useLoaderData} from 'react-router-dom'
import Signup from './pages/Signup';
import LoggedInApp from './pages/LoggedInApp';
import FooterContent from './pages/FooterContent'
import Tagline from './pages/Tagline';

function UserDatabase(props)
{
    // Simulate a NoSQL DB storing users
    const users = [
        {id: 1, userName: "raichsk12", password: "kojdiasl"},
        {id: 2, userName: "adagasds", password: "adsj2312"},
        {id: 3, userName: "iyaod222as", password: "8712lkv"},
        {id: 4, userName: "pokyhl", password: "03ogjc3"},
        {id: 5, userName: "Minkindk", password: "opsimse"},
        {id: 6, userName: "iklotea", password: "0kpedsa"},
        {id: 7, userName: "dainex91", password: "nirviuao"},
        {id: 8, userName: "xenia", password: "12osputer"}
    ];

    const isUserRegistered = () => {
        for (let index = 0; index < users.length; index++) 
        {
            const userToSearchFor = users[index];
            if (props.userName == userToSearchFor.userName && props.password == userToSearchFor.password)
            {
                return true;
            }
        }
        return false;
    }   

    return (
        <LoggedInApp />
    );
}
function VerifyUser(props)
{   
    return(
        <>
            <UserDatabase userName={props.userName} password={props.password}/>
        </>
    );
}

function Login(props)
{
    const userNamePlaceholder = "Enter username";
    const passwordPlaceholder = "Password";
    // States
    const [userName, setUserName] = useState(userNamePlaceholder);
    const [password, setPassword] = useState(passwordPlaceholder);
    const [buttonPressed, setButtonPressed] = useState(false);
    const [isUserValid, setIsUserValid] = useState(null);

    // e handlers 
    function changeText(e)
    {
        if (e.target.alt == "user-name")
        {
            setUserName(e.target.value);
            return;
        }

        setPassword(e.target.value);
    }

    function removePlaceholderText(e)
    {
        if (e.target.alt == "user-name" && e.target.value == userNamePlaceholder)
        {
            e.target.value = "";
        }

        else if(e.target.alt == "password" && e.target.value == passwordPlaceholder)
        {
            e.target.value = "";
        }
    }

    function addPlaceholderText(e)
    {
        if (e.target.alt == "user-name" && e.target.value == "")
        {
            e.target.value = userNamePlaceholder;
        }
        
        else if (e.target.alt == "password" && e.target.value =="")
        {
            e.target.value = passwordPlaceholder;
        }
    }

    const loginAttempt = (e) => {
        setButtonPressed(true);
    }

    useEffect(() => {setIsUserValid(false)}, [buttonPressed]);

    console.log(isUserValid);
    return (
        <div id='form-background'>
            
            <form id='login-form' className='form-general'>
                <label>
                    {props.labelText}
                    <input  type="text"
                            value={userName}
                            alt="user-name"
                            className='form-text-fields'    
                            //events
                            onChange={e => changeText(e)}
                            onClick={e => removePlaceholderText(e)}
                            onMouseLeave={e => addPlaceholderText(e)}
                            
                    />
                    <input  type="text"
                            value={password}
                            alt="password"
                            className='form-text-fields'
                            //events
                            onChange={e => changeText(e)}
                            onClick={e => removePlaceholderText(e)}
                            onMouseLeave={e => addPlaceholderText(e)}
                    />

                    <Link to={"/LoggedInApp"}>
                        <input  type="submit" 
                            value="Log In"
                            id='login-button'
                            className='button-general'
                            onClick={e => loginAttempt(e)}
                            />
                    </Link>

                    <p style={{fontSize: 'small'}}>Not a member? </p>
                    <Link style={{position: 'relative', fontSize: 'small', left: '58px', color: 'blue'}} to="/Signup"> Sign up here!</Link> 
                    {isUserValid == false && 
                    <p> Not Valid, try again</p>}
                </label>
            </form>
            <Tagline isLoggedIn={false}/>
            <div>
                <h2><span style={{color: 'grey'}}>Opportunities unified</span></h2>
                <p> sit amet, consectetur adipiscing elit, s
                    ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.</p>
                <p>Don't bother typing “lorem ipsum” into Google translate. If you already tried, 
                    you may have gotten anything from "NATO" to "China", depending on how you 
                    capitalized the letters. The bizarre translation was fodder for conspiracy 
                    theories, but Google has since updated its “lorem ipsum” translation to, 
                    boringly enough, “lorem ipsum”.</p>
            </div>

            {buttonPressed ? <VerifyUser userName={userName} password={password}/> : null}
        </div>
    );
}

function MainApp()
{
    const labelText = <p className='form-label'><span style={{fontSize: 'larger', position: 'relative', top: '-15px'}}>Already a member?</span><br/> Log in here</p>; 
    return (
        <>  
            <Login labelText={labelText} />
            <FooterContent />
        </>
    );
}

export default MainApp;