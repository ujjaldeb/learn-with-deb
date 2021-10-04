import React, { useEffect, useState } from 'react';
import './Services.css';
import Course from '../Course/Course';

const Services = () => {
    // declaring the state
    const [courses, setCourses] = useState([]);

    // fetching the data and setting it to the state
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className="services">
            <h1>Our services/courses are: </h1>
            <div className="courses-container">
                {/* showing all courses exist in the data */}
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Services;