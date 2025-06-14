import React, { useState } from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom';

const Navbar = ({setSideNavbarFunc,sideNavbar}) => {

  const [userPic, setUserPic] = useState("https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740")
  const [navbarModal, setNavbarModal] = useState(false);
  const handleClickModal =()=>{
    setNavbarModal((prev) => !prev);
  }
const sideNavbarFunc =()=>{
  setSideNavbarFunc(!sideNavbar);
}

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color: "white" }} />
        </div>
        <Link to={'/'} className='navbar_youtubeImg'>
          <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage' />
          <div className='navbar_utubeTitle'>YouTube</div>
        </Link>
      </div>
      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input type="text" placeholder='Search' className='navbar_searchBoxInput' />
          <div className='navbar_searchIconBox'><SearchIcon sx={{ fontSize: "28px", color: "white" }} /></div>
        </div>
        <div className='navbar_mike'>
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>
      <div className='navbar-right'>
        <VideoCallIcon sx={{ color: "white", cursor: "pointer", fontSize: "30px" }} />
        <NotificationsIcon sx={{ color: "white", cursor: "pointer", fontSize: "30px" }} />
        <img src={userPic} className='navbar-right-logo' alt='logo' onClick={handleClickModal}/>

        {
          navbarModal &&
          <div className='navbar-modal'>
            <div className='navbar-modal-option'>Profile
            </div>
            <div className='navbar-modal-option'>Logout
            </div>
            <div className='navbar-modal-option'>Login
            </div>
          </div>
        }


      </div>

    </div>
  )
}

export default Navbar

// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Funknown-user-symbol&psig=AOvVaw1qAD7b16gXJmhjeqE2plF7&ust=1748926704100000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDlrvD50Y0DFQAAAAAdAAAAABAn