import React, {useState} from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className="login-popup">
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"?<></>:<input type='text' placeholder='your Name' required/>}
                <input type='email' placeholder='your Email' required/>
                <input type='password' placeholder='your Password' required/>
            </div>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required/>
                <p>By continuing, I agree to the term of use & privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an Account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>


    </div>
  )
}

export default LoginPopUp