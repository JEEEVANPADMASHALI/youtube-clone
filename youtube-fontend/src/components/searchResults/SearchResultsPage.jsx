import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../sidebar/Sidebar";
import './SearchResults.css'

const SearchResultsPage = ({ searchResults, sidebar }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = [
    "All", "News", "Music", "Podcast", "Mixes", "Data Structure", "MongoDB", "AWS",
    "Comedy", "AI", "Live", "Web Development", "History", "Thoughts", "Cricket",
    "Health", "UPSC", "Vlog", "Movies", "Entertainment", "Javascript"
  ];

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (!searchResults || searchResults.length === 0) {
      axios.get("http://localhost:4000/api/allVideos")
        .then(res => {
          setData(res.data.videos);
          setLoading(false);
        })
        .catch(err => {
          setError("Failed to load videos.");
          setLoading(false);
        });
    } else {
      setData(searchResults);
      setLoading(false);
    }
  }, [searchResults]);

  return (
    <div className="home">
      {/* Sidebar */}
      <Sidebar sidebar={sidebar} />

      <div className={sidebar ? "homePage" : "fullHomePage"}>

        {/* Category Options */}
        <div className={sidebar ? "homePage_options" : "homePage_optionsFull"}>
          {options.map((item, index) => (
            <div key={index} className="homePage_option">
              {item}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className={sidebar ? "home_mainPage" : "home_mainPageWithoutLink"}>
          {loading && <p className="loading">Loading videos...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && !error && data.map((item, ind) => (
            <Link
              key={ind}
              to={`/watch/${item._id}`}
              className="youtube_video"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="youtube_thumbnailBox">
                <img src={item?.thumbnail} alt="thumbnail" className="youtube_thumbnail" />
                <div className="youtube_video_duration">
                  {item?.duration || "00:00"}
                </div>
              </div>

              <div className="youtubeTitleBox">
                <div className="youtube_channel_profileBox">
                  <img
                    src={item?.user?.profilePic || "/defaultProfile.png"}
                    alt="channel profile"
                    className="youtube_channel_profile"
                  />
                </div>

                <div className="youtubeTitleBox_Title">
                  <div className="youtube_videoTitle">{item?.title}</div>
                  <div className="youtube_channelName">{item?.user?.channelName || "Unknown Channel"}</div>
                  <div className="youtubeVideo_views">{item?.like || 0} likes</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SearchResultsPage;
