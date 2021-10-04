import React, { useEffect, useState } from 'react';
import './Services.css';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div>
            <h1>Our services/courses are: </h1>
            <div className="courses-container">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Services;