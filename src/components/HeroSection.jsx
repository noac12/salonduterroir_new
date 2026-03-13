import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from './Countdown';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">Salon du Terroir 2026</h1>
                <p className="hero-subtitle">Le rendez-vous incontournable des saveurs de nos régions.</p>

                <Countdown targetDate="2026-03-27T10:00:00" />
                <div className="hero-buttons">
                    <Link to="/exhibitors" className="btn hero-btn">
                        Découvrir les Exposants
                    </Link>
                    <a
                        href="https://www.helloasso.com/associations/salon-du-terroir/evenements/salon-du-terroir-2-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn hero-btn hero-btn-secondary"
                    >
                        Billetterie Gratuite
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
