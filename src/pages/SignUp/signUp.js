import React, { useState } from 'react'
import './signUp.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [uploadedImageUrl, setUploadedImageUrl] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain");
    const [signUpFiled, setSignUpField] = useState({ "channelName": "", "userName": "", "password": "", "about": "", "profilePic": uploadedImageUrl });

    console.log(signUpFiled)



    const handleInputField = (event, name) => {
        setSignUpField({
            ...signUpFiled, [name]: event.target.value
        })
    }

    const uploadImage = async (e) => {
        console.log("Uploading")
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        // youtube-clone
        data.append('upload_preset', 'youtube-clone');
        try {
            // cloudName="dzeto1whz" for khileshcloud

            const response = await axios.post("https://api.cloudinary.com/v1_1/dzeto1whz/image/upload", data);
            // console.log(response);

            const imageUrl = response.data.url;
            setUploadedImageUrl(imageUrl);
            setSignUpField({
                ...signUpFiled, "profilePic": imageUrl
            })
        } catch (err) {
            console.log(err)
        }


    }
    return (
        <div className='signUp'>
            <div className="signup_card">
                <div className="signUp_title">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    SignUp
                </div>

                <div className="signUp_Inputs">
                    <input type='text' className='signUp_Inputs_inp' value={signUpFiled.channelName} onChange={(e) => { handleInputField(e, "channelName") }} placeholder='Channel Name' />
                    <input type='text' className='signUp_Inputs_inp' value={signUpFiled.userName} onChange={(e) => { handleInputField(e, "userName") }} placeholder='User Name' />
                    <input type='password' className='signUp_Inputs_inp' value={signUpFiled.password} onChange={(e) => { handleInputField(e, "password") }} placeholder='Password' />
                    <input type='text' className='signUp_Inputs_inp' value={signUpFiled.about} onChange={(e) => { handleInputField(e, "about") }} placeholder='About Your Channel' />



                    <div className="image_upload_signup">
                        <input type='file' onChange={(e) => uploadImage(e)} />
                        <div className="image_upload_signup_div">
                            <img className='image_default_signUp' src={uploadedImageUrl} alt='khilesh' />
                        </div>


                    </div>


                    <div className="signUpBtns">
                        <div className="signUpBtn">SignUp</div>
                        <Link to={'/'} className="signUpBtn">Home Page</Link>

                    </div>



                </div>

            </div>

        </div>
    )
}

export default SignUp