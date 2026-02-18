import React from 'react';

const ExhibitorCard = ({ exhibitor }) => {
    return (
        <div className="exhibitor-card">
            <h3 className="exhibitor-name">{exhibitor.name}</h3>
            <p className="exhibitor-region">{exhibitor.region}</p>
            <div className="exhibitor-badge">{exhibitor.category}</div>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{exhibitor.description}</p>
        </div>
    );
};

export default ExhibitorCard;
