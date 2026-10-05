import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from './Countdown';
import { SHOW_TICKETING } from '../data/config';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">Salon du Terroir 2027</h1>
                <p className="hero-subtitle">Le rendez-vous incontournable des saveurs de nos régions.
                </p>

                <Countdown targetDate="2027-03-12T14:00:00" />
                <div className="hero-buttons">
                    <Link to="/exhibitors" className="btn hero-btn">
                        Découvrir les Exposants
                    </Link>
                    {SHOW_TICKETING && (
                        <a
                            href="https://www.helloasso.com/associations/salon-du-terroir/evenements/salon-du-terroir-2-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn hero-btn hero-btn-secondary"
                        >
                            Billetterie Gratuite
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
