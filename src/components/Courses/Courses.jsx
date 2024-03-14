import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Course from "../Course/Course";

const Courses = ({handleCourseSelect}) => {

    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="grid grid-cols-3 gap-6 w-4/5">
            {
                courses.map((course) => <Course key={course.id} handleCourseSelect={handleCourseSelect} course={course}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleCourseSelect: PropTypes.func.isRequired
};

export default Courses;