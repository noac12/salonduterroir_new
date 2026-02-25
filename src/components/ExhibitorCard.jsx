import React from 'react';

const ExhibitorCard = ({ exhibitor }) => {
    return (
        <div className="exhibitor-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {exhibitor.logo && (
                <div style={{ height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem', backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
                    <img src={exhibitor.logo} alt={`Logo ${exhibitor.name}`} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
            )}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="exhibitor-name" style={{ marginBottom: '0.5rem' }}>{exhibitor.name}</h3>
                {exhibitor.region && <p className="exhibitor-region" style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '1rem' }}>{exhibitor.region}</p>}

                {Array.isArray(exhibitor.category) ? (
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        {exhibitor.category.map(cat => (
                            <div key={cat} className="exhibitor-badge" style={{ marginBottom: 0 }}>{cat}</div>
                        ))}
                    </div>
                ) : (
                    <div className="exhibitor-badge" style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>{exhibitor.category}</div>
                )}

                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', flex: 1 }}>{exhibitor.description}</p>

                {exhibitor.website && (
                    <a href={exhibitor.website} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'underline' }}>
                        Visiter le site ↗
                    </a>
                )}
            </div>
        </div>
    );
};

export default ExhibitorCard;
