import React from 'react';

const Exhibitors = () => {
    return (
        <main className="exhibitors-page">
            <div className="container" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ marginBottom: '2rem' }}>Nos Exposants 2026</h1>

                <div style={{ backgroundColor: 'var(--color-bg)', padding: '3rem', borderRadius: '8px', border: '1px solid #eee', maxWidth: '800px' }}>
                    <p style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                        La liste des exposants 2026 est en cours de préparation.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                        Nous sélectionnons actuellement les meilleurs producteurs pour vous offrir une expérience inoubliable.
                        Revenez bientôt pour découvrir la liste complète !
                    </p>

                    <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: 'var(--color-white)', borderRadius: '8px' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>Vous souhaitez exposer ?</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Il reste encore quelques places disponibles pour notre édition 2026.
                        </p>
                        <a href="mailto:contact@salonduterroir.fr" className="btn">
                            Contactez-nous à contact@salonduterroir.fr
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Exhibitors;
