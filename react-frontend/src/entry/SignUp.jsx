import React from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'
function SignUp(){
    return(
      <div className='all'>
      <div class="speclass">
    <div class="boxbb"> 
    <div class="formbb">
    <h2>Sign up</h2>
    <div class="inputboxbb">
      <input type="text" required="required"/>
      <span>First Name</span>
      <i></i>
    </div>
    <div class="inputboxbb">
      <input type="text" required="required"/>
      <span>Last Name</span>
      <i></i>
    </div>
    <div class="inputboxbb">
      <input type="text" required="required"/>
      <span>Email ID</span>
      <i></i>
    </div>
    <div class="inputboxbb">
        <input type="password" required="required" />
        <span>Password</span>
        <i></i>
      </div>
    <div class="linksbb">
        <Link to="/signup">Forgot Password</Link>
        <Link to="/">Sign In</Link>
      </div>
      <Link to="/busdetails"><input class="submitclassbb" type="submit" value="Login"/></Link>
    </div>
</div>
</div>  
</div>
    )
}
export default SignUp;