import React from 'react'
import './video.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

const Video = () => {
    return (
        <div className='video'>
            <div className="videoPostSection">
                <div className="video_youtube">
                    <video width="400" controls autoPlay className='video_youtube_video'>
                        <source src='https://res.cloudinary.com/dzeto1whz/video/upload/v1749796642/samples/dance-2.mp4' type='video/mp4' />
                        <source src='https://res.cloudinary.com/dzeto1whz/video/upload/v1749796642/samples/dance-2.mp4' type='video/webm' />
                    </video>
                </div>
                <div className="video_youtubeAbout">
                    <div className="video_uTubeTitle">{"Javascript for begineer"}</div>
                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <div className="youtube_video_ProfileBlock_left_img">
                                <img className='youtube_video_ProfileBlock_left_image' src={"https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"} alt='khilesh' />
                            </div>
                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName"> {"User1"} </div>
                                <div className="youtubePostProfileSubs">{"2024-07-09"}</div>
                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">
                           <div className="youtube_video_likeBlock_Like">
                            <ThumbUpOutlinedIcon/>
                            <div className="youtube_video_likeBlock_NoOfLikes">{32}</div>
                           </div>



                        </div>


                    </div>
                </div>

            </div>
            <div className="videoSuggestions">
                Video Suggestion
            </div>
        </div>
    )
}

export default Video