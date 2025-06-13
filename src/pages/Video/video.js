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
                                <ThumbUpOutlinedIcon />
                                <div className="youtube_video_likeBlock_NoOfLikes">{32}</div>
                            </div>
                            <div className="youtubeVideoDivider"></div>
                            <div className="youtube_video_likeBlock_Like">
                                <ThumbDownAltOutlinedIcon />
                                {/* <div className="youtube_video_likeBlock_NoOfLikes">{32}</div> */}
                            </div>


                        </div>


                    </div>
                    <div className="youtube_video_About">
                        <div>2024-09-30</div>
                        <div>This is the cool video</div>
                    </div>
                    <div className="youtubeCommentSection">
                        <div className="youtubeCommentSectionTitle">2 Comments</div>

                        <div className="youtubeSelfComment">
                            <img className='video_youtubeSelfCommentProfile' src='https://media.istockphoto.com/id/2027127656/photo/vibrant-colored-closed-wooden-doors-in-a-row-on-blue-sky-and-sea-background-choice-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=i_Ymb_iVtRFAdccY2x7dRarxDCyII1k2XEDU3MVGL4w=' alt='khilesh' />
                            <div className='addAComment'>
                                <input type='text' className='addAcommentInput' placeholder='Add a comment' />
                                <div className='cancelSubmitComment'>
                                    <div className='cancelComment'>Cancel</div>
                                    <div className='cancelComment'>Comment</div>
                                </div>
                            </div>


                        </div>

                        <div className="youtubeOthersComments">
                            <div className="youtubeSelfComment">
                                <img className='video_youtubeSelfCommentProfile' src='https://media.istockphoto.com/id/2027127656/photo/vibrant-colored-closed-wooden-doors-in-a-row-on-blue-sky-and-sea-background-choice-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=i_Ymb_iVtRFAdccY2x7dRarxDCyII1k2XEDU3MVGL4w=' alt='khilesh' />
                                <div className='others_commentSection'>
                                    <div className='others_commentSectionHeader'>
                                        <div className='channelName_comment'>UserName
                                        </div>
                                        <div className='commentTimingOthers'>2024-09-30
                                        </div>


                                    </div>
                                    <div className='otherCommentSectionComment'>
                                        This is the cool Web App Project
                                    </div>

                                </div>


                            </div>
                            <div className="youtubeSelfComment">
                                <img className='video_youtubeSelfCommentProfile' src='https://media.istockphoto.com/id/2027127656/photo/vibrant-colored-closed-wooden-doors-in-a-row-on-blue-sky-and-sea-background-choice-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=i_Ymb_iVtRFAdccY2x7dRarxDCyII1k2XEDU3MVGL4w=' alt='khilesh' />
                                <div className='others_commentSection'>
                                    <div className='others_commentSectionHeader'>
                                        <div className='channelName_comment'>UserName
                                        </div>
                                        <div className='commentTimingOthers'>2024-09-30
                                        </div>


                                    </div>
                                    <div className='otherCommentSectionComment'>
                                        This is the cool Web App Project
                                    </div>

                                </div>


                            </div>
                            <div className="youtubeSelfComment">
                                <img className='video_youtubeSelfCommentProfile' src='https://media.istockphoto.com/id/2027127656/photo/vibrant-colored-closed-wooden-doors-in-a-row-on-blue-sky-and-sea-background-choice-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=i_Ymb_iVtRFAdccY2x7dRarxDCyII1k2XEDU3MVGL4w=' alt='khilesh' />
                                <div className='others_commentSection'>
                                    <div className='others_commentSectionHeader'>
                                        <div className='channelName_comment'>UserName
                                        </div>
                                        <div className='commentTimingOthers'>2024-09-30
                                        </div>


                                    </div>
                                    <div className='otherCommentSectionComment'>
                                        This is the cool Web App Project
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="videoSuggestions">
                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' alt='khilesh'/>
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' alt='khilesh'/>
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' alt='khilesh'/>
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' alt='khilesh'/>
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video