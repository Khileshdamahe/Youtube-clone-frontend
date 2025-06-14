import React from 'react'
import './profile.css'
import SideNavbar from '../../components/SideNavbar/sideNavbar'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useParams } from 'react-router-dom';

const Profile = ({ sideNavbar }) => {
    return (
        <div className='profile'>
            <SideNavbar sideNavbar={sideNavbar} />

            <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>

                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className='profile_top_section_img' src="https://randomuser.me/api/portraits/lego/2.jpg" alt="" />
                    </div>
                    <div className="profile_top_section_About">
                        <div className='profile_top_section_About_Name'>CodingKhileshDamahe</div>
                        <div className="profile_top_section_info">
                            @User1 . 4 Videos
                        </div>
                        <div className="profile_top_section_info">
                            About Section of Channel
                        </div>

                    </div>

                </div>

                <div className="profile_videos">
                    <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>
                    <div className="profileVideos">
                        {/* -------div for video-------- */}

                        <Link to={`/watch/98`} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className='profileVideo_block_thumbnail_img' src='https://randomuser.me/api/portraits/lego/4.jpg' alt='khilesh' />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2024-09-12</div>
                            </div>


                        </Link>
                        {/* -------div for video-------- */}

                        <Link to={`/watch/98`} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className='profileVideo_block_thumbnail_img' src='https://randomuser.me/api/portraits/lego/4.jpg' alt='khilesh' />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2024-09-12</div>
                            </div>


                        </Link>
                        {/* -------div for video-------- */}

                        <Link to={`/watch/98`} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className='profileVideo_block_thumbnail_img' src='https://randomuser.me/api/portraits/lego/4.jpg' alt='khilesh' />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Video Title</div>
                                <div className="profileVideo_block_detail_about">Create at 2024-09-12</div>
                            </div>


                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile