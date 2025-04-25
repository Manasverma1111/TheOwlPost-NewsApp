import React from 'react';
import { FaYoutube, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content container">
            <div className="para">
            <h3>OwlPost</h3>
            <p>Your trusted source for daily news updates around the world.</p>
            </div>
            <div className="footer-section about">
                <h4>Check</h4>
            <div className="footer-links">
                <a href="/">About Us</a>
                <a href="/">Contact</a>
                <a href="/">Privacy & Policies</a>
            </div>
            </div>

            <div className="footer-section categories">
            <h4>Top Categories</h4>
            <ul>
                <li><a href="/business">Business</a></li>
                <li><a href="/science">Science</a></li>
                <li><a href="/health">Health</a></li>
            </ul>
            </div>

            <div className="footer-section social">
            <h4>Follow Us</h4>
            <div className="social-icons">
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
            &copy; {new Date().getFullYear()} OwlPost | All rights reserved
        </div>
        </footer>
    );
};

export default Footer;
