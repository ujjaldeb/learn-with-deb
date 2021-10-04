import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className="home">
            <div className="top-banner">
                <h1>Welcome to learn with deb<br />Learning app!</h1>
                <p>Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.</p>
            </div>
            <div>
                <h2>Our popular courses</h2>
                <div className="course-container">
                    {
                        courses.slice(0, 4).map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;