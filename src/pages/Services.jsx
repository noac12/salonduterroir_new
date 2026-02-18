import React from 'react';

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
        id: 'wine-quiz',
        title: 'Concours d’œnologie',
        paragraphs: [
            'Vous souhaitez vérifier vos connaissances et les mesurer à celles des autres ?',
            'Alors venez au concours d’œnologie : des lots attendent les meilleurs !',
            'Attention, le nombre de places est limité.'
        ]
    },
    {
        id: 'smell-workshop',
        title: 'Atelier des senteurs',
        paragraphs: [
            'Essayez de deviner ce qui se cache dans ces verres !'
        ]
    }
];

const Services = () => {
    return (
        <main className="services-page">
            <div className="container">
                <h1 className="services-main-title">Nos services et activités</h1>
                <p className="services-intro">
                    Entre deux dégustations, profitez d&apos;animations conviviales et de services pratiques pour vivre
                    pleinement votre visite.
                </p>

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

                <p className="services-note">D&apos;autres activités vous attendent, pour les grands et les petits !</p>
            </div>
        </main>
    );
};

export default Services;
