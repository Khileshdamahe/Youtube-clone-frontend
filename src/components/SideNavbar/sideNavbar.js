import React from 'react'
import './sideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SideNavbar = () => {
    return (
        <div className="home-sideNavbar">
            <div className="home_sideNavbarTop">
                <div className={`home_sideNavbarTopOption`}>
                    <HomeIcon />
                    <div className="home_sideNavbarTopOptionTitle">Home</div>
                </div>
                <div className={`home_sideNavbarTopOption`}>
                    <VideocamIcon />
                    <div className="home_sideNavbarTopOptionTitle">Shorts</div>
                </div>
                <div className={`home_sideNavbarTopOption`}>
                    <SubscriptionsIcon />
                    <div className="home_sideNavbarTopOptionTitle">Subscription</div>
                </div>
            </div>
            <hr style={{width:"100%",}}/>
            <div className="home_sideNavbarMiddle">
                <div className={`home_sideNavbarTopOption`}>
                    <div className="home_sideNavbarTopOptionTitle">You</div>
                    <ChevronRightIcon />
                </div>
            </div>
        </div>

    )
}

export default SideNavbar