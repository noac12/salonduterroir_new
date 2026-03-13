import React, { useRef, useEffect, useState } from 'react';

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15, // Trigger when 15% is visible
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before it hits the true bottom
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div 
            ref={ref} 
            className={`reveal-wrapper ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
