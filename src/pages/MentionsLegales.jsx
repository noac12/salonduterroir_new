import React, { useEffect } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const MentionsLegales = () => {
    useEffect(() => {
        document.title = 'Mentions Légales | Salon du Terroir 2027 – Télécom Paris';
    }, []);

    return (
        <main className="mentions-legales-page" style={{ backgroundColor: '#f9f9f9', padding: '4rem 0', minHeight: '80vh' }}>
            <RevealOnScroll>
                <div className="container" style={{ maxWidth: '800px', backgroundColor: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                    <h1 style={{ marginBottom: '2.5rem', borderBottom: '2px solid #6b1428', paddingBottom: '1rem', color: '#6b1428' }}>Mentions Légales</h1>

                    <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: '#666' }}>Dernière mise à jour : Février 2026</p>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>1. Éditeur du site</h2>
                        <p>Le site <strong>salonduterroir.fr</strong> est édité par l'association étudiante <strong>Salon du Terroir</strong>, régie par la loi du 1er juillet 1901.</p>
                        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', lineHeight: '1.6' }}>
                            <li><strong>Siège social :</strong> Télécom Paris, 19 Place Marguerite Perey, 91120 Palaiseau, France</li>
                            <li><strong>Email de contact :</strong> contact@salonduterroir.fr</li>
                            <li><strong>Téléphone :</strong> +33 6 02 17 16 69  </li>
                            <li><strong>Directeur de la publication :</strong> Eliott Dionnet</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>2. Hébergement</h2>
                        <p>Le site est hébergé par :</p>
                        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', lineHeight: '1.6' }}>
                            <li><strong>Nom de l'hébergeur :</strong> Rézel (Association des élèves de Télécom Paris)</li>
                            <li><strong>Adresse :</strong> 19 Place Marguerite Perey, 91120 Palaiseau</li>
                            <li><strong>Site web :</strong> <a href="https://rezel.net" target="_blank" rel="noopener noreferrer" style={{ color: '#6b1428' }}>rezel.net</a></li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>3. Propriété intellectuelle</h2>
                        <p style={{ lineHeight: '1.6' }}>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            <br /><br />
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>4. Responsabilité</h2>
                        <p style={{ lineHeight: '1.6' }}>
                            Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet, ne sauraient engager la responsabilité de l'association Salon du Terroir.
                            Nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées sur le site.
                        </p>
                    </section>
                </div>
            </RevealOnScroll>
        </main>
    );
};

export default MentionsLegales;
