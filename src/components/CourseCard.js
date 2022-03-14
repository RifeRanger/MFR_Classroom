import { IconButton } from "@material-ui/core";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ name, creatorName, creatorPhoto, id, style }) {
  const history = useHistory();
  const goToClass = () => {
    history.push(`/course/${id}`);
  };

  return (
    <div className="courseCard" style={style} onClick={goToClass}>
      <div className="courseCard__upper">
        <div className="courseCard__courseName">{name}</div>
        <div className="courseCard__creatorName">{creatorName}</div>
        <img src={creatorPhoto} className="courseCard__creatorPhoto" alt="CreatorPhoto" />
      </div>
      <div className="courseCard__middle"></div>
      <div className="courseCard__lower">
        {/* <IconButton>
          <FolderOpenOutlined />
        </IconButton>
        <IconButton>
          <AssignmentIndOutlined />
        </IconButton> */}
      </div>
    </div>
  );
}

export default CourseCard;