import React from "react";
import '../css/homepage.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are a company dedicated to providing the best books at affordable prices.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: hafsaeltouil@gmail.com</p>
                    <p>Phone: +212652583565</p>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Bookstore. All rights reserved.</p>
            </div>
        </footer>
    );
}
