import React, { useState, useEffect } from 'react'
import './video.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Video = () => {
    const [message, setMessage] = useState("");
    const [data, setData] = useState(null);
    const { id } = useParams();
    const [videoUrl, setVideoURL] = useState("");
    const [comments, setComments] = useState([]);
    // console.log(id);
    // console.log(message);

    const fetchVedioById = async () => {
        await axios.get(`http://localhost:4000/api/getVideoById/${id}`).then((response) => {
            console.log(response.data.video);
            setData(response.data.video)
            setVideoURL(response.data.video.videoLink)
        }).catch(err => {
            console.log(err);
        })
    }

    const getCommentByVideoId = async () => {
        await axios.get(`http://localhost:4000/commentApi/comment/${id}`).then((response) => {
            console.log(response);
            setComments(response.data.comments)
        }).catch(err => {
            console.log(err);
        })
    }


    useEffect(() => {
        fetchVedioById();
        getCommentByVideoId();
    }, [])

    return (
        <div className='video'>
            <div className="videoPostSection">
                <div className="video_youtube">
                    {data && <video width="400" controls autoPlay className='video_youtube_video'>
                        <source src={videoUrl} type='video/mp4' />
                        <source src={videoUrl} type='video/webm' />
                    </video>}
                </div>
                <div className="video_youtubeAbout">
                    <div className="video_uTubeTitle">{data?.title}</div>
                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <Link to={`/user/${data?.user?._id}`} className="youtube_video_ProfileBlock_left_img">
                                <img className='youtube_video_ProfileBlock_left_image' src={data?.user?.profilePic} alt='khilesh' />
                            </Link>
                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName"> {data?.user?.channelName} </div>
                                <div className="youtubePostProfileSubs">{data?.user?.createdAt.slice(0, 10)}</div>
                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">
                            <div className="youtube_video_likeBlock_Like">
                                <ThumbUpOutlinedIcon />
                                <div className="youtube_video_likeBlock_NoOfLikes">{data?.like}</div>
                            </div>
                            <div className="youtubeVideoDivider"></div>
                            <div className="youtube_video_likeBlock_Like">
                                <ThumbDownAltOutlinedIcon />
                                {/* <div className="youtube_video_likeBlock_NoOfLikes">{32}</div> */}
                            </div>


                        </div>


                    </div>
                    <div className="youtube_video_About">
                        <div>{data?.createdAt.slice(0, 10)}</div>
                        <div>{data?.description}</div>
                    </div>
                    <div className="youtubeCommentSection">
                        <div className="youtubeCommentSectionTitle">{comments.length} Comments</div>

                        <div className="youtubeSelfComment">
                            <img className='video_youtubeSelfCommentProfile' src='https://media.istockphoto.com/id/2027127656/photo/vibrant-colored-closed-wooden-doors-in-a-row-on-blue-sky-and-sea-background-choice-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=i_Ymb_iVtRFAdccY2x7dRarxDCyII1k2XEDU3MVGL4w=' alt='khilesh' />
                            <div className='addAComment'>
                                <input type='text' value={message} onChange={(e) => { setMessage(e.target.value) }} className='addAcommentInput' placeholder='Add a comment' />
                                <div className='cancelSubmitComment'>
                                    <div className='cancelComment'>Cancel</div>
                                    <div className='cancelComment'>Comment</div>
                                </div>
                            </div>


                        </div>

                        <div className="youtubeOthersComments">
                            {
                                comments.map((item, index) => {
                                    return (
                                        <div className="youtubeSelfComment">
                                            <img className='video_youtubeSelfCommentProfile' src={item?.user?.profilePic} alt='khilesh' />
                                            <div className='others_commentSection'>
                                                <div className='others_commentSectionHeader'>
                                                    <div className='channelName_comment'>{item?.user?.channelName}
                                                    </div>
                                                    <div className='commentTimingOthers'>{item?.createdAt.slice(0,10)}
                                                    </div>


                                                </div>
                                                <div className='otherCommentSectionComment'>
                                                   {item?.message}
                                                </div>

                                            </div>


                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>


            </div>
            <div className="videoSuggestions">
                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' alt='khilesh' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' alt='khilesh' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' alt='khilesh' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' alt='khilesh' />
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