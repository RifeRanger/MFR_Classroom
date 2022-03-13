import { IconButton } from "@material-ui/core";
import { Menu, MoreVert } from "@material-ui/icons";
import React from "react";
import "./SocialFeed.css";

function SocialFeed({ image, name, date, content, authorId }) {
  return (
    <div className="socialfeed">
      <div className="socialfeed__informationContainer">
        <div className="socialfeed__infoSection">
          <div className="socialfeed__imageContainer">
            <img src={image} alt="Social Feed" />
          </div>
          <div className="socialfeed__nameAndDate">
            <div className="socialfeed__name">{name}</div>
            <div className="socialfeed__date">{date}</div>
          </div>
        </div>
        <div className="socialfeed__infoSection">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="socialfeed__content">{content}</div>
    </div>
  );
}
export default SocialFeed;
