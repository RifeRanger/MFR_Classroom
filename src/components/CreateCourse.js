import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { auth, db } from "../firebase";
import { createDialogAtom } from "../utils/atoms";


function CreateCourse() {
  const [user, loading, error] = useAuthState(auth);
  const [open, setOpen] = useRecoilState(createDialogAtom);
  const [courseName, setClassName] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const createCourse = async () => {
    try {
      const newCourse = await db.collection("courses").add({
        creatorUid: user.uid,
        name: courseName,
        creatorName: user.displayName,
        creatorPhoto: user.photoURL,
        posts: [],
      });

      const userRef = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();

      const docId = userRef.docs[0].id;
      const userData = userRef.docs[0].data();

      let userCourses = userData.enrolledClassrooms;
      userCourses.push({
        id: newCourse.id,
        name: courseName,
        creatorName: user.displayName,
        creatorPhoto: user.photoURL,
      });

      const docRef = await db.collection("users").doc(docId);
      await docRef.update({
        enrolledClassrooms: userCourses,
      });
      handleClose();
      alert("Course created successfully!");
    } catch (err) {
      alert(`Cannot create course - ${err.message}`);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of course and we will create a classroom for you!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Course Name"
            type="text"
            fullWidth
            value={courseName}
            onChange={(e) => setClassName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={createCourse} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateCourse