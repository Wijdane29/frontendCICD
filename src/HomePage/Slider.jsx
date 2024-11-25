import React, { useState, useEffect } from "react";
import '../css/homepage.css';


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
                        <img src="images/1.jpeg" alt="Slide 1" />
                    </div>
                    <div className="slide">
                        <img src="images/2.jpeg" alt="Slide 2" />
                    </div>
                    <div className="slide">
                        <img src="images/3.jpeg" alt="Slide 3" />
                    </div>
                    <div className="slide">
                        <img src="images/4.jpeg" alt="Slide 4" />
                    </div>
                    <div className="slide">
                        <img src="images/5.jpeg" alt="Slide 5" />
                    </div>
                    <div className="slide">
                        <img src="images/6.jpeg" alt="Slide 6" />
                    </div>
                    <div className="slide">
                        <img src="images/7.jpeg" alt="Slide 7" />
                    </div>
                </div>
                <div className="navigation-manual">
                    {Array.from({ length: 7 }).map((_, index) => (
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
