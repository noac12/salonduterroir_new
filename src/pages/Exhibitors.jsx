import React, { useEffect, useState } from 'react';
import ExhibitorCard from '../components/ExhibitorCard';
import { exhibitors, categories } from '../data/exhibitors';

const Exhibitors = () => {
    const [selectedCategory, setSelectedCategory] = useState('Toutes');

    useEffect(() => {
        document.title = 'Exposants | Salon du Terroir 2026 – Télécom Paris';
    }, []);

    const filteredExhibitors = selectedCategory === 'Toutes'
        ? exhibitors
        : exhibitors.filter(exhibitor => {
            if (Array.isArray(exhibitor.category)) {
                return exhibitor.category.includes(selectedCategory);
            }
            return exhibitor.category === selectedCategory;
        });

    return (
        <main className="exhibitors-page">
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nos Exposants 2026</h1>

                {/* Filters */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
                    <button
                        onClick={() => setSelectedCategory('Toutes')}
                        className={`btn ${selectedCategory === 'Toutes' ? '' : 'btn-outline'}`}
                        style={{ padding: '0.5rem 1.5rem', borderRadius: '50px' }}
                    >
                        Toutes
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`btn ${selectedCategory === category ? '' : 'btn-outline'}`}
                            style={{ padding: '0.5rem 1.5rem', borderRadius: '50px' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {filteredExhibitors.length > 0 ? (
                        filteredExhibitors.map(exhibitor => (
                            <ExhibitorCard key={exhibitor.id} exhibitor={exhibitor} />
                        ))
                    ) : (
                        <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>
                            Aucun exposant trouvé dans cette catégorie pour le moment.
                        </p>
                    )}
                </div>

                {/* Contact Section */}
                <div style={{ marginTop: '4rem', padding: '3rem', backgroundColor: 'var(--color-bg)', borderRadius: '8px', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Vous souhaitez exposer ?</h3>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Il reste encore quelques places disponibles pour notre édition 2026.
                    </p>
                    <a href="mailto:contact@salonduterroir.fr" className="btn">
                        Contactez-nous à contact@salonduterroir.fr
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Exhibitors;
