import React, { useEffect } from "react";
import "./Dashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import CourseCard from "../components/CourseCard";


function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [classes, setClasses] = useState([]);
  const history = useHistory();
  const fetchClasses = async () => {
    try {
      await db
        .collection("users")
        .where("uid", "==", user.uid)
        .onSnapshot((snapshot) => {
          setClasses(snapshot?.docs[0]?.data()?.enrolledClassrooms);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) history.replace("/");
  }, [user, loading]);

  useEffect(() => {
    if (loading) return;
    fetchClasses();
  }, [user, loading]);

  return (
    <div className="dashboard">
      {classes?.length === 0 ? (
        <div className="dashboard__404">
          No classes found! Join or create one!
        </div>
      ) : (
        <div><h1> My Courses </h1>
          <div className="dashboard__classContainer">
            {classes.map((course) => (
              <CourseCard
                key={course.id}
                creatorName={course.creatorName}
                creatorPhoto={course.creatorPhoto}
                name={course.name}
                id={course.id}
                style={{ marginRight: 30, marginBottom: 30 }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Dashboard;
