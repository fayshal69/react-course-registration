import { useState } from 'react';
import Cart from './Cart/Cart'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  const [courses, setCourses] = useState([]);

  const totalCredit = 15;

  const handleCourseSelect = (selectedCourse) => {
    
    const credit = courses.reduce((p, c) => p + c.credit, 0); 
    const allCredit = credit + selectedCourse.credit;

    if(allCredit > totalCredit) {
      return toast.error("You have reached the credit!");
    }

    const alreadyExists = courses.find((course) => course.id === selectedCourse.id)
    if(!alreadyExists) {
      const newCourse = [...courses, selectedCourse];
      setCourses(newCourse);
      toast.success("Course Added Successfully");
    }
    else {
      toast.warning("Course already added");
    }
  }
  
  return (
    <div>
      <h1 className='text-5xl font-bold text-center p-12'>Course Registration</h1>
      <div className='container mx-auto flex gap-4'>
        <Courses handleCourseSelect={handleCourseSelect}></Courses>
        <Cart courses={courses} totalCredit={totalCredit}></Cart>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
