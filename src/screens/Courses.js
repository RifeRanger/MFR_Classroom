import React, { useEffect } from 'react';
import "./Courses.css";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import J

function Courses() {

  const [courses, setCourses] = useState([])
  const history = useHistory();
  const fetchCourses = async () => {
    try {
      const classList = db.collection("courses")
      const data = await classList.get();
      data.docs.forEach(item => {
        setCourses([...courses, item.data()])
      })
      console.log(courses)
    } catch (error) {
      console.error(error.message);
    }
  };


  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="courses">
      {courses?.length === 0 ? (
        <div className="courses__404">
          No courses currently available
        </div>
      ) : (
        <div className="courses__classContainer">
          {courses.map((course) => (
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
      )}
    </div>
  )
}

export default Courses