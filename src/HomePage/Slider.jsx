import React, { useState, useEffect } from "react";
import './Slider.css';
import { NavLink, Link, useLocation } from 'react-router-dom';



export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % 7);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-slider">
            <div className="slider">
                <div className="slides" style={{ marginLeft: `-${currentSlide * 800}px` }}>
                    <div className="slide">
                        <img src="images/background4.jpeg" alt="Slide 1" />
                    </div>
                    <div className="slide">
                        <img src="images/13.jpg" alt="Slide 13" />
                    </div>
                    <div className="slide">
                        <img src="images/Wild Love by Elsie Silver.jpg" alt="Slide 14" />
                    </div>
                    <div className="slide">
                        <img src="images/bookheart.jpeg" alt="Slide 2" />
                    </div>
                    <div className="slide">
                        <img src="images/feefd341-5780-476e-9d47-5b2c7bda05c2.jpg" alt="Slide 2" />
                    </div>
                    <div className="slide">
                        <img src="images/fav-book1.jpeg" alt="Slide 3" />
                    </div>
                    <div className="slide">
                        <img src="images/2aca460a-eaf5-4d8e-b912-4d58f8186739.jpg" alt="Slide 4" />
                    </div>
                    <div className="slide">
                        <img src="images/6f9b0401-ddc6-43e7-b3cc-2c33c997db58.jpg" alt="Slide 5" />
                    </div>
                    <div className="slide">
                        <img src="images/217b2955-ab0a-48df-ab92-e2dabab43c9a.jpg" alt="Slide 6" />
                    </div>
                    <div className="slide">
                        <img src="images/2066d3aa-6be8-4065-8867-9e744b477555.jpg" alt="Slide 7" />
                    </div>
                    <div className="slide">
                        <img src="images/bac09b86-21c4-4a64-a46b-40a57077b4af.jpg" alt="Slide 8" />
                    </div>
                    <div className="slide">
                        <img src="images/Better Book series.jpg" alt="Slide 9" />
                    </div>
                    <div className="slide">
                        <img src="images/c55de4b4-9a88-43d6-8f93-39a464d4fe33.jpg" alt="Slide 10" />
                    </div>
                    <div className="slide">
                        <img src="images/ccbb5344-ec7b-46d2-96cd-89689b1ed612.jpg" alt="Slide 11" />
                    </div>
                    <div className="slide">
                        <img src="images/fav-book1.jpeg" alt="Slide 12" />
                    </div>
                    
                </div>

                <div className="slider-content">
                    <h2 className="slider-title">Dive Into a World of Books</h2>
                    <p className="slider-description">Explore New Worlds, Learn, and Grow</p>
                    <button className="shop-now-btn">
                        <NavLink to="/Books" className="NavLink">Shop Now</NavLink>  
                    </button>
                </div>


                <div className="navigation-manual">
                    {Array.from({ length: 14 }).map((_, index) => (
                        <label
                            key={index}
                            htmlFor={`radio${index + 1}`}
                            className={`manual-btn ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></label>
                    ))}
                </div>
            </div>
        </div>
    );
}
