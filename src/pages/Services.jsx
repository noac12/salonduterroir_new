import React, { useEffect } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const services = [
    {
        id: 'loading-help',
        title: 'Aide au chargement',
        paragraphs: [
            'Vous ne souhaitez pas vous déplacer avec tous vos achats pendant le salon ?',
            'Pas de souci : vous pouvez nous laisser vos produits, revenir ensuite en voiture, et nous vous aiderons à tout charger dans votre voiture.'
        ]
    },
    {
        id: 'smell-workshop',
        title: 'Atelier des senteurs',
        paragraphs: [
            'Essayez de deviner ce qui se cache dans ces verres !'
        ]
    },
    {
        id: 'cheerleading-show',
        title: 'Spectacle de cheerleading',
        paragraphs: [
            'L\'équipe de cheerleading de Télécom Paris, championne du GOST 2026, vous prépare un show à ne pas rater !'
        ]
    },
    {
        id: 'groupe-bernier',
        title: 'Exposition de véhicules',
        paragraphs: [
            <>Le <a href="https://www.groupe-bernier.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Groupe Bernier</a> viendra exposer ses véhicules sur place :</>,
            <>• <b>VP</b> : Nouvelle 308 et Nouveau E-3008</>,
            <>• <b>VU</b> : E-Partner et Expert</>
        ]
    }
];

const Services = () => {
    useEffect(() => {
        document.title = 'Services & Activités | Salon du Terroir 2026 – Télécom Paris';
    }, []);
    return (
        <main className="services-page">
            <div className="container">
                <h1 className="services-main-title">Nos services et activités</h1>
                <p className="services-intro">
                    Entre deux dégustations, profitez d&apos;animations conviviales et de services pratiques pour vivre
                    pleinement votre visite.
                </p>

                <RevealOnScroll>
                    <div className="services-grid">
                        {services.map((service) => (
                            <article key={service.id} className="service-card">
                                <h2 className="service-title">{service.title}</h2>
                                {service.paragraphs.map((paragraph, index) => (
                                    <p key={`${service.id}-${index}`}>{paragraph}</p>
                                ))}
                            </article>
                        ))}
                    </div>
                </RevealOnScroll>

                <p className="services-note">D&apos;autres activités vous attendent, pour les grands et les petits !</p>
            </div>
        </main>
    );
};

export default Services;
