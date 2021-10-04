import React from 'react';
import './Course.css';

const Course = (props) => {
    // creating variables through destructuring
    const { img, name, price, author, level } = props.course;

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    <small>Level Of Dificulty: {level}</small>
                    <br />
                    <small>Course Instuctor: {author}</small>
                    <br />
                    <small>Subscription: ${price}</small>
                </p>
            </div>
        </div>
    );
};

export default Course;