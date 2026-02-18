import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">Salon du Terroir 2026</h1>
                <p className="hero-subtitle">Le rendez-vous incontournable des saveurs de nos régions.</p>
                <p className="hero-date">Vendredi 27 et Samedi 28 Mars 2026</p>
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
