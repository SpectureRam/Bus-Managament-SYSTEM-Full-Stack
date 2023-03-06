import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'
function SignIn(){
    return(
      <div className='all'>
    <div class="box"> 

    <div class="form">
    <h2>Sign in </h2>
    <div class="inputbox">
      <input type="text" required="required"/>
      <span>Username</span>
      <i></i>
    </div>

    <div class="inputbox">
        <input type="password" required="required" />
        <span>Password</span>
        <i></i>
      </div>

      <div class="links">
        <Link to="/">Forgot Password</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <Link to="/busdetails"><input type="submit" value="Login"/></Link>
      </div>
</div>
</div>
    )
}
export default SignIn;