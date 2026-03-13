import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

const faqs = [
    {
        question: "En quoi consiste le Salon du Terroir de Télécom Paris ?",
        answer: "Le Salon du Terroir de Télécom Paris est un événement convivial qui met à l’honneur des producteurs et artisans venus présenter leurs spécialités régionales. Les exposants proposent des dégustations pour faire découvrir la richesse de leurs produits et partager leur savoir-faire. Les visiteurs peuvent également acheter directement sur place les produits qu’ils ont appréciés. C’est un moment de découverte, d’échange et de gourmandise autour du patrimoine gastronomique."
    },
    {
        question: "Quand et où se déroule le salon ?",
        answer: "Le Salon du Terroir 2026 aura lieu les 27 et 28 mars 2026 dans le Grand Hall de Télécom Paris, situé à Palaiseau sur le plateau de Saclay."
    },
    {
        question: "L'entrée est-elle payante ?",
        answer: <>L'entrée au salon est 100% gratuite ! Nous vous recommandons cependant de bien vouloir réserver votre place via notre <a href="/#billetterie" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>billetterie en ligne</a> afin de fluidifier l'accès.</>
    },
    {
        question: "Qui sont les exposants ?",
        answer: <>Nos exposants sont des producteurs et artisans venus présenter leurs spécialités régionales. Vous y trouverez des viticulteurs, des producteurs de charcuterie et fromages, des brasseurs, et bien d'autres encore. La liste complète des exposants est disponible sur la page <Link to="/exhibitors" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Exposants</Link>.</>
    },
    {
        question: "Peut-on acheter les produits sur place ?",
        answer: "Oui, tout à fait ! La majorité de nos exposants (viticulteurs, producteurs de charcuterie et fromages, brasseurs...) proposent la vente directe de leurs produits sur leurs stands."
    },
    {
        question: "Comment se rendre à Télécom Paris ?",
        answer: <>L'école est très facile d'accès en transports en commun (RER B Massy-Palaiseau puis bus) ou en voiture (plusieurs parkings gratuits à proximité). Consultez la rubrique <a href="/#access" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Infos Pratiques</a> pour tous les détails.</>
    },
    {
        question: "Y a-t-il des activités spéciales ?",
        answer: <>Oui ! En plus des dégustations classiques, nous proposons des activités comme l'Atelier des senteurs et des spectacles. N'hésitez pas à consulter notre page <Link to="/services" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Services & Activités</Link>.</>
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} style={{
            borderBottom: '1px solid #eee',
            padding: '1.5rem 0',
            cursor: 'pointer'
        }} onClick={() => setIsOpen(!isOpen)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: isOpen ? 'var(--color-primary)' : 'var(--color-text)' }}>
                    {question}
                </h3>
                <span style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                    +
                </span>
            </div>
            <div style={{
                maxHeight: isOpen ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out',
                opacity: isOpen ? 1 : 0,
                transitionProperty: 'max-height, opacity',
                transitionDuration: '0.3s'
            }}>
                <p style={{ marginTop: '1rem', color: '#555', lineHeight: '1.6' }}>
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    useEffect(() => {
        document.title = 'Foire Aux Questions (FAQ) | Salon du Terroir 2026';
    }, []);

    return (
        <main className="faq-page" style={{ backgroundColor: '#f9f9f9', padding: '4rem 0', minHeight: '80vh' }}>
            <RevealOnScroll>
                <div className="container" style={{ maxWidth: '800px', backgroundColor: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                    <h1 style={{ marginBottom: '1rem', color: 'var(--color-primary)', textAlign: 'center' }}>Foire Aux Questions</h1>
                    <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-secondary)' }}>
                        Retrouvez ici les réponses aux questions les plus fréquemment posées sur le salon.
                    </p>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <p style={{ color: '#666' }}>Vous avez d'autres questions ?</p>
                        <a href="mailto:contact@salonduterroir.fr" style={{ color: 'var(--color-primary)', textDecoration: 'underline', fontWeight: 'bold' }}>
                            Contactez-nous directement
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </main>
    );
};

export default FAQ;
