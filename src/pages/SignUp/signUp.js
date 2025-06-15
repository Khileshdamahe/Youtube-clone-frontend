import React from 'react'
import './signUp.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='signUp'>
            <div className="signup_card">
                <div className="signUp_title">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    SignUp
                </div>

                <div className="signUp_Inputs">
                    <input type='text' className='signUp_Inputs_inp' placeholder='Channel Name' />
                    <input type='text' className='signUp_Inputs_inp' placeholder='User Name' />
                    <input type='password' className='signUp_Inputs_inp' placeholder='Password' />
                    <input type='text' className='signUp_Inputs_inp' placeholder='About Your Channel' />



                    <div className="image_upload_signup">
                        <input type='file'/>
                        <div className="image_upload_signup_div">
                            <img className='image_default_signUp' src='https://randomwordgenerator.com/img/picture-generator/50e5d6474e5bb10ff3d8992cc12c30771037dbf85254784d712f7dd59245_640.jpg' alt='khilesh'/>
                        </div>


                    </div>


                    <div className="signUpBtns">
                        <div className="signUpBtn">SignUp</div>
                        <div className="signUpBtn">Home Page</div>

                    </div>



                </div>

            </div>

        </div>
    )
}

export default SignUp