import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { auth, logout } from "../firebase";
import { createDialogAtom, joinDialogAtom } from "../utils/atoms";
import CreateCourse from "./CreateCourse";
import JoinClass from "./JoinClass";
import "./Navbar.css";


function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [createOpened, setCreateOpened] = useRecoilState(createDialogAtom);
  const [joinOpened, setJoinOpened] = useRecoilState(joinDialogAtom);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

  return (
    <>
      <CreateCourse />
      <JoinClass />
      <nav className="navbar">
        <div className="navbar__left">
          <Link to='/home'>
            <img
              src="/IMG_4250.JPG" width="50" height="50"
              alt="Mount Fitness Research"
              className="navbar__logo"
            />
          </Link>
        <div className="navbar_links">
          <Link to ='/home' style={linkStyle}> Home </Link>
          <Link to='/dashboard' style={linkStyle}> Dashboard </Link>
          <Link to='/courses' style={linkStyle}> Courses </Link>
        </div>
        </div>
        <div className="navbar__right">
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Add />
          </IconButton>
          <IconButton onClick={logout}>
            <Avatar src={user?.photoURL} />
            Logout
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                setCreateOpened(true);
                handleClose();
              }}
            >
              Create Couse
            </MenuItem>
            <MenuItem
              onClick={() => {
                setJoinOpened(true);
                handleClose();
              }}
            >
              Join Class
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
