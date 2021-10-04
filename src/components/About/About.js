import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-us">
                <h2>About US</h2>
            </div>
            <div style={{ backgroundColor: '#f8f8f8', paddingTop: '70px', paddingBottom: '70px' }}>
                <h1 className="text-center">Our Core Values</h1>
                <p className="text-center mb-5">Our core values are the fundamental beliefs of a person or organizations. We help people understand the difference between right and wrong.</p>
                <div className="core-values">
                    <div>
                        <h2>Make Education Accessible</h2>
                        <span>One of our core values is to make education accessible to all. We strive hard to make it a reality. </span>
                    </div>
                    <div>
                        <h2>Learn and Grow</h2>
                        <span>One of our core values is to make education accessible to all. We strive hard to make it a reality. </span>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h1 className="text-center">Our Global Reach</h1>
                <p className="text-center mb-5">learnWithDeb is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.</p>
                <div className="stats">
                    <div>
                        <h1>10M</h1>
                        <span>LEARNERS</span>
                    </div>
                    <div>
                        <h1>23K</h1>
                        <span>INSTRUCTORS</span>
                    </div>
                    <div>
                        <h1>10K</h1>
                        <span>COURSES</span>
                    </div>
                    <div>
                        <h1>110M</h1>
                        <span>COURSE ENROLLMENTS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;