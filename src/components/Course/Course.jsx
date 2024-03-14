import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Course = ({course, handleCourseSelect}) => {

    const {name, photo, description, price, credit} = course;

    return (
        <div className="card max-w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="course" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className='flex items-center'>
                    <p className='flex justify-start items-center gap-3'><FaDollarSign /> {price}</p>
                    <p className='flex justify-end items-center gap-4'><FaBookOpen /> {credit}</p>
                </div>
                <div className="card-actions">
                <button className="btn btn-info w-full" 
                onClick={() => handleCourseSelect(course)}>Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleCourseSelect: PropTypes.func.isRequired
};

export default Course;