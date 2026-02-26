import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">Salon du Terroir 2026</h1>
                <p className="hero-subtitle">Le rendez-vous incontournable des saveurs de nos régions.</p>
                <p className="hero-date">Vendredi 27 et Samedi 28 Mars 2026</p>
                <p className="hero-location" style={{ fontSize: '1.2rem', marginTop: '-2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: 0.9, fontWeight: 'bold' }}>
                    <svg width="20" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Grande École d'Ingénieurs Télécom Paris - Palaiseau
                </p>
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
