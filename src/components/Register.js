import { Link } from "react-router-dom";
import React from 'react'
import '../Register.css';

const Register = () => {

    function savValues() {
        var fullName = document.getElementById("fullName").value;
        var regUserName = document.getElementById("regUserName").value;
        var regEmail = document.getElementById("regEmail").value;
        var regPhone = document.getElementById("regPhone").value;
        var regPass = document.getElementById("regPass").value;
        // var regPassCn = document.getElementById("regPassCn").value;
        var userDetails = {
            fullname: fullName,
            usrnm: regUserName,
            email: regEmail,
            phone: regPhone,
            password: regPass
        }
        localStorage.setItem(`${regUserName}`, JSON.stringify(userDetails));
        localStorage.setItem(`userName`, fullName);
        document.getElementById('tempBtn').click()
    }

    function checkUserName() {
        try {
            let currentUserName = document.getElementById("regUserName").value;
            let existingUser = JSON.parse(localStorage.getItem(`${document.getElementById("regUserName").value}`));
            if (currentUserName === existingUser.usrnm) {
                document.getElementById("regUserName").value = '';
                alert('username already exist, please try another');
            }
        } catch (error) {

        }
    }

    function checkEmpty(e) {
        e.preventDefault();
        if (document.getElementById("regUserName").value.trim() === '' && document.getElementById("fullName").value.trim() === '' && document.getElementById("regEmail").value.trim() === '' && document.getElementById("regPass").value.trim() === '' && document.getElementById("regPassCn").value.trim() === '' && document.getElementById("regPhone").value.trim() === '') {
            alert('Please fill all the fields');
            document.getElementById("regUserName").value = '';
            document.getElementById("fullName").value = '';
            document.getElementById("regEmail").value = '';
            document.getElementById("regPass").value = '';
            document.getElementById("regPassCn").value = '';
            document.getElementById("regPhone").value = '';
        }
        else {
            savValues()
        }
    }

    return (
        <div id='body3'>
            <div className="container">
                <div className="title">Registration</div>
                <div className="content">
                    <form method="post" action="/" onSubmit={checkEmpty}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" id="fullName" placeholder="Enter your name" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input type="text" id="regUserName" placeholder="Enter your username" required onBlur={checkUserName} />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="email" id="regEmail" placeholder="Enter your email" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="Number" id="regPhone" placeholder="Enter your number" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" id="regPass" placeholder="Enter your password" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input type="password" id="regPassCn" placeholder="Confirm your password" required />
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1" />
                            <input type="radio" name="gender" id="dot-2" />
                            <input type="radio" name="gender" id="dot-3" />
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" id="submitbtn" value="Register" />
                        </div>
                        <div className="signin_link">
                            Already Have An Account <Link to="/login">Login</Link>
                            <Link id="tempBtn" to='/'></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
