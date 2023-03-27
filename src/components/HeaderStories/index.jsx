import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { stories } from "./const";

import "./style.css";

const HeaderStories = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
  };
  return (
    <div className="Header">
      <Slider {...settings}>
        {stories().map((story) => (
          <div className="story" key={story.id}>
            <div className="story_wrapper">
              <div className="profile-image">
                <img src={story.profileImage} alt={story.username} />
              </div>
              <div className="username">{story.username}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default HeaderStories;
