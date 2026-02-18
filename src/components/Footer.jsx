import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-column">
                    <h3 className="footer-heading">Salon du Terroir</h3>
                    <p className="footer-subheading">Association de Télécom Paris</p>
                    <p>19 Place Marguerite Perey, 91120 Palaiseau</p>
                </div>
                <div className="footer-column">
                    <h4 className="footer-subheading">Contact</h4>
                    <p>Email: contact@salonduterroir.fr</p>
                </div>
                <div className="footer-column">
                    <p>&copy; 2026 Salon du Terroir. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
