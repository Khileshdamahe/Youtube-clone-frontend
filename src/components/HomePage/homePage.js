import React from 'react'
import "./homePage.css"
import {Link} from 'react-router-dom';


const HomePage = ({ sideNavbar }) => {

  const options = ["All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", "Debates", "Coke Studio Pakistan", "Democracy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy",];
  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>
      <div className="homePage_options">
        {
          options.map((item, index) => {
            return (
              <div key={index} className="homePage_option">
                {item}
              </div>
            );
          })
        }
      </div>
      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>
        <Link to={'/watch/987'} className="youtube_Video">
          <div className='youtube_thumbnailBox'>
            <img src='https://images.pexels.com/photos/6120220/pexels-photo-6120220.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Thumbnail' className='youtube_thumbnailPic' />
            <div className='youtube_timingThumbnail'>
              28:05
            </div>
            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src='https://images.pexels.com/photos/8385737/pexels-photo-8385737.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Profile' className='youtube_thumbnail_Profile' />
              </div>
              <div className='youtubeTitleBox_Title'>
                <div className='youtube_videoTitle'>user1</div>
                <div className='youtube_channelName'>user1</div>
                <div className='youtubeVideo_views'>3 likes</div>
              </div>

            </div>
          </div>


        </Link>
        <Link to={'/watch/987'} className="youtube_Video">
          <div className='youtube_thumbnailBox'>
            <img src='https://images.pexels.com/photos/6120220/pexels-photo-6120220.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Thumbnail' className='youtube_thumbnailPic' />
            <div className='youtube_timingThumbnail'>
              28:05
            </div>
            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src='https://images.pexels.com/photos/8385737/pexels-photo-8385737.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Profile' className='youtube_thumbnail_Profile' />
              </div>
              <div className='youtubeTitleBox_Title'>
                <div className='youtube_videoTitle'>user1</div>
                <div className='youtube_channelName'>user1</div>
                <div className='youtubeVideo_views'>3 likes</div>
              </div>

            </div>
          </div>


        </Link>
        <Link to={'/watch/987'} className="youtube_Video">
          <div className='youtube_thumbnailBox'>
            <img src='https://images.pexels.com/photos/6120220/pexels-photo-6120220.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Thumbnail' className='youtube_thumbnailPic' />
            <div className='youtube_timingThumbnail'>
              28:05
            </div>
            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src='https://images.pexels.com/photos/8385737/pexels-photo-8385737.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Profile' className='youtube_thumbnail_Profile' />
              </div>
              <div className='youtubeTitleBox_Title'>
                <div className='youtube_videoTitle'>user1</div>
                <div className='youtube_channelName'>user1</div>
                <div className='youtubeVideo_views'>3 likes</div>
              </div>

            </div>
          </div>


        </Link>
        <Link to={'/watch/987'} className="youtube_Video">
          <div className='youtube_thumbnailBox'>
            <img src='https://images.pexels.com/photos/6120220/pexels-photo-6120220.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Thumbnail' className='youtube_thumbnailPic' />
            <div className='youtube_timingThumbnail'>
              28:05
            </div>
            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src='https://images.pexels.com/photos/8385737/pexels-photo-8385737.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Profile' className='youtube_thumbnail_Profile' />
              </div>
              <div className='youtubeTitleBox_Title'>
                <div className='youtube_videoTitle'>user1</div>
                <div className='youtube_channelName'>user1</div>
                <div className='youtubeVideo_views'>3 likes</div>
              </div>

            </div>
          </div>


        </Link>
        <Link to={'/watch/987'} className="youtube_Video">
          <div className='youtube_thumbnailBox'>
            <img src='https://images.pexels.com/photos/6120220/pexels-photo-6120220.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Thumbnail' className='youtube_thumbnailPic' />
            <div className='youtube_timingThumbnail'>
              28:05
            </div>
            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src='https://images.pexels.com/photos/8385737/pexels-photo-8385737.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Profile' className='youtube_thumbnail_Profile' />
              </div>
              <div className='youtubeTitleBox_Title'>
                <div className='youtube_videoTitle'>user1</div>
                <div className='youtube_channelName'>user1</div>
                <div className='youtubeVideo_views'>3 likes</div>
              </div>

            </div>
          </div>


        </Link>
        <Link to={'/watch/987'} className="youtube_Video">
          <div className='youtube_thumbnailBox'>
            <img src='https://images.pexels.com/photos/6120220/pexels-photo-6120220.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Thumbnail' className='youtube_thumbnailPic' />
            <div className='youtube_timingThumbnail'>
              28:05
            </div>
            <div className="youtubeTitleBox">
              <div className="youtubeTitleBoxProfile">
                <img src='https://images.pexels.com/photos/8385737/pexels-photo-8385737.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Profile' className='youtube_thumbnail_Profile' />
              </div>
              <div className='youtubeTitleBox_Title'>
                <div className='youtube_videoTitle'>user1</div>
                <div className='youtube_channelName'>user1</div>
                <div className='youtubeVideo_views'>3 likes</div>
              </div>

            </div>
          </div>


        </Link>

      </div>
    </div>
  )
}

export default HomePage