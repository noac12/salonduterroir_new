import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <InfoSection />

            <section id="access" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem' }}>Comment venir ?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Le salon se déroule dans le hall de l'école Télécom Paris, au cœur du plateau de Saclay.
                        Accessible via le RER B (Massy-Palaiseau + Bus 91.06/91.10) ou RER B (Le Guichet + Bus 9).
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.268987473775!2d2.198946776893674!3d48.71318717131336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e678917855013d%3A0x63319028889417!2s19%20Pl.%20Marguerite%20Perey%2C%2091120%20Palaiseau!5e0!3m2!1sen!2sfr!4v1709200000000!5m2!1sen!2sfr"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map Télécom Paris"
                    ></iframe>
                </div>
            </section>
        </main>
    );
};

export default Home;
