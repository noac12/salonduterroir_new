import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

const Home = () => {
    useEffect(() => {
        document.title = 'Salon du Terroir 2026 | Télécom Paris – Vin, Gastronomie et Artisanat';
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (e.data && e.data.height) {
                const widget = document.getElementById('haWidget');
                if (widget) widget.height = e.data.height + 'px';
            }
        };
        window.addEventListener('message', handler);
        return () => window.removeEventListener('message', handler);
    }, []);

    return (
        <main>
            <HeroSection />
            <InfoSection />

            <section id="billetterie" style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '1rem' }}>Billetterie Gratuite</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-secondary)' }}>
                        Réservez vos places dès maintenant sur HelloAsso.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <iframe
                            id="haWidget"
                            allowTransparency="true"
                            src="https://www.helloasso.com/associations/salon-du-terroir/evenements/salon-du-terroir-2-1/widget-vignette"
                            style={{ width: '350px', border: 'none', borderRadius: '8px' }}
                            title="Billetterie HelloAsso"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section id="access" style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem' }}>Comment venir ?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Le salon se déroule dans le Grand Hall de l'école Télécom Paris, au cœur du plateau de Saclay.
                    </p>

                    <div className="access-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem',
                        textAlign: 'left'
                    }}>
                        <div className="access-card" style={{
                            padding: '1.5rem',
                            backgroundColor: 'var(--color-bg)',
                            borderRadius: '8px',
                            border: '1px solid #eee'
                        }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                                <svg style={{ width: 24, height: 24, fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg>
                                En Voiture
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Parking Palaiseau Monge</strong> (1 min à pied)</li>
                                <li><strong>Parking gratuit</strong> - Boulevard des Maréchaux</li>
                            </ul>
                        </div>

                        <div className="access-card" style={{
                            padding: '1.5rem',
                            backgroundColor: 'var(--color-bg)',
                            borderRadius: '8px',
                            border: '1px solid #eee'
                        }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                                <svg style={{ width: 24, height: 24, fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M12 2c-4.42 0-8 3.58-8 8 0 4.41 8 13 8 13s8-8.59 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" /></svg>
                                En Transports en Commun
                            </h3>
                            <div style={{ marginBottom: '1rem' }}>
                                <strong>RER B</strong> arrêt Massy-Palaiseau<br />
                                <span style={{ color: 'var(--color-text-light)', fontSize: '0.9em' }}>Puis <strong>Bus 46-06</strong> ou <strong>51-54</strong> arrêt Place Marguerite Perey</span>
                            </div>
                            <h4 style={{ fontSize: '1rem', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Autres lignes :</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95em' }}>
                                <li style={{ marginBottom: '0.25rem' }}>• <strong>BUS 46-27</strong> : Arrêt Place Marguerite Perey</li>
                                <li style={{ marginBottom: '0.25rem' }}>• <strong>BUS 91-05</strong> : Arrêt Place Marguerite Perey</li>
                                <li style={{ marginBottom: '0.25rem' }}>• <strong>BUS 91-08</strong> : Arrêt Place Marguerite Perey</li>
                                <li>• <strong>BUS 46-14</strong> : Arrêt Ferme de la Vauve</li>
                            </ul>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.6213890260506!2d2.1973744390065373!3d48.71271713908798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67936019b92fb%3A0x3b189d16d136fa9!2sSalon%20Du%20Terroir!5e0!3m2!1sfr!2sfr!4v1773435528116!5m2!1sfr!2sfr"
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
