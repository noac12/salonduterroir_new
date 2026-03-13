import React, { useEffect } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

// Imports des logos partenaires
import logoBde from '../assets/logos_partenaires/logo_bde.png';
import logoForum from '../assets/logos_partenaires/logo_forum.jpg';
import logoIpp from '../assets/logos_partenaires/logo-institut-polytechnique-paris.png';
import logoCvec from '../assets/logos_partenaires/CVEC1_finance_par_rvb.png';
import logoTelecom from '../assets/logos_partenaires/TelecomParis_endossem_IPP_RVB_200pix.png';

const Partners = () => {
    useEffect(() => {
        document.title = 'Partenaires | Salon du Terroir 2026 – Télécom Paris';
    }, []);

    const partners = [
        { id: 'telecom', src: logoTelecom, alt: 'Télécom Paris' },
        { id: 'ipp', src: logoIpp, alt: 'Institut Polytechnique de Paris' },
        { id: 'cvec', src: logoCvec, alt: 'CVEC' },
        { id: 'bde', src: logoBde, alt: 'BDE Télécom Paris' },
        { id: 'forum', src: logoForum, alt: 'Forum Télécom Paris' },
    ];

    return (
        <main className="partners-page">
            <div className="container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 1rem' }}>
                <h1 style={{ marginBottom: '2rem' }}>Nos Partenaires</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '800px', lineHeight: '1.6' }}>
                    Le Salon du Terroir de Télécom Paris est rendu possible grâce au soutien exceptionnel de nos partenaires. Nous tenons à les remercier chaleureusement pour leur engagement et leur aide précieuse.
                </p>

                <RevealOnScroll>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', alignItems: 'center', justifyItems: 'center', width: '100%', maxWidth: '1000px', backgroundColor: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        {partners.map((partner) => (
                            <div key={partner.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px', width: '100%' }}>
                                <img
                                    src={partner.src}
                                    alt={partner.alt}
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </main>
    );
};

export default Partners;
