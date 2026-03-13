import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
                heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                secondes: Math.floor((difference / 1000) % 60),
            };
        } else {
            // Event has started
            timeLeft = { jours: 0, heures: 0, minutes: 0, secondes: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div key={interval} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                borderRadius: '8px',
                padding: '1rem',
                minWidth: '80px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
                <span className="countdown-value" style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    lineHeight: '1',
                    marginBottom: '0.2rem',
                    fontVariantNumeric: 'tabular-nums' // Keeps numbers evenly spaced
                }}>
                    {timeLeft[interval].toString().padStart(2, '0')}
                </span>
                <span className="countdown-label" style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    opacity: 0.8
                }}>
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <div className="countdown-container" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            margin: '2rem 0',
            flexWrap: 'wrap'
        }}>
            {timerComponents}
        </div>
    );
};

export default Countdown;
