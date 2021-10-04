import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-details">
                <h2>Get In Touch.</h2>
                <p>If you are seeking support, please fill free to contact with the following information.</p>
                <span><b>Learn with deb</b></span>
                <br />
                <span>Website: https://www.something.com/</span>
                <br />
                <span>Email: abc@something.com</span>
                <br />
                <span>Phone: ++1-xxxx-xxxx-xx</span>
                <br />
            </div>
        </div>
    );
};

export default Contact;