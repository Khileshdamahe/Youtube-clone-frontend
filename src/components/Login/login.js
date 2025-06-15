import React from 'react';
import './login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='login'>
            <div className="login_card">
                <div className="titleCard_login">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    Login
                </div>
                <div className="loginCredentials">
                    <div className="userNameLogin">
                        <input className='userNameLoginUserName' placeholder='UserName' type='text' />
                    </div>
                    <div className="userNameLogin">
                        <input className='userNameLoginUserName' placeholder='Password' type='password' />
                    </div>

                </div>
                <div className="login_buttons">
                    <div className="login-btn">Login</div>
                    <div className="login-btn">SignUp</div>
                    <div className="login-btn">Cancel</div>
                </div>
            </div>

        </div>
    )
}

export default Login