import { useState } from "react";
import {Link} from 'react-router-dom';


const Signup = (props) => {

    const [registerEmail, setRegisterEmail] = useState("Email to register"); 
    const [registerUserName, setRegisterUserName] = useState("Create a User Name");
    return (
        <div >
            <form id='signup-form' className="form-general">
                <label>
                    <p className="form-label">Welcome new user!</p>
                    <input  type="text"
                            value={registerEmail}
                            alt="register-email"
                            className='form-text-fields'    
                            //events
                            /*onChange={e => changeText(e)}
                            onClick={e => removePlaceholderText(e)}
                            onMouseLeave={e => addPlaceholderText(e)}*/
                            
                    />
                    <input  type="text"
                            value={registerUserName}
                            alt="register-username"
                            className='form-text-fields'
                            //events
                            /*onChange={e => changeText(e)}
                            onClick={e => removePlaceholderText(e)}
                            onMouseLeave={e => addPlaceholderText(e)}*/
                    />

                    <input  type="submit" 
                            value="Sign Up"
                            id='signup-button'
                            className="button-general"
                            />
                </label>
            </form>
        </div>
    );
}


export default Signup;