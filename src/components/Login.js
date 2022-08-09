import { Link } from "react-router-dom";
import React from 'react';
import '../Login.css';

const Login = () => {

    function passvalues(e) {
        e.preventDefault();
        try {
            let userName = document.getElementById("userNameIn").value;
            let password1 = document.getElementById("password").value;
            let userDetails = JSON.parse(localStorage.getItem(`${userName}`));

            if (password1 !== userDetails.password) {
                e.preventDefault();
                alert('incorrect password')
            }
            else {
                localStorage.setItem('userName', userDetails.fullname)
                document.getElementById('tempBtn').click()
            }
        } catch (error) {
            e.preventDefault();
            alert('User not found , Please register first')
        }
    }

    return (
        <div id='body2'>
            <div className="center">
                <h1>Login</h1>
                <form method="post" action="/" onSubmit={passvalues}>
                    <div className="txt_field">
                        <input type="text" id="userNameIn" required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" id="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <input type="submit" id="loginbtn" value="Login" />

                    <div className="signup_link">
                        Not a member? <Link to="/register">Register</Link>
                        <Link id="tempBtn" to='/'></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
