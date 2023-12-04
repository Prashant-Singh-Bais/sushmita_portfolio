import './index.scss'
import React, { useEffect, useRef } from 'react';
import Dummy_GIF from '../../assets/DummyGIF.gif'

const GIF = () => {
    const pathRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        const arrow = arrowRef.current;
        const pathLength = path.getTotalLength();
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = (timestamp - start) / 4000; // Duration of 4 seconds
            const point = path.getPointAtLength(progress * pathLength);
            arrow.setAttribute('transform', `translate(${point.x}, ${point.y})`);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }, []);

    return (
        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef} d="M10,10 Q50,50 90,10 Q130,70 170,40 Q210,100 250,50 Q290,0 330,50"
                  stroke="purple" stroke-width="2" fill="none"/>
            <polygon ref={arrowRef} points="-5,-5 0,0 -5,5" fill="purple"/>
        </svg>
    );
};


const DummyGIF = () => (
    <div className="DummyGIF">
        <img src= {Dummy_GIF} alt="DummyGIF"/>
    </div>
);


export  { GIF, DummyGIF};
