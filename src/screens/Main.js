import React from 'react';
import "./Main.css";
import YouTube from 'react-youtube';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Main() {

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
  }
  return (
    <div className="main">
      <h1>Featured Content</h1>
    <div style={divStyle}>
      <YouTube videoId={'OKdUCRHzLlo'} />
      <YouTube videoId={'njhVyY3_OBQ'} />
    </div>
    </div>
    
  )
}

export default Main