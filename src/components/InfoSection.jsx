import moneyIcon from '../assets/tarifs.png';

const InfoSection = () => {
    return (
        <section id="infos" className="info-section">
            <div className="container info-grid">
                <div className="info-card">
                    <svg className="info-icon" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
                    </svg>
                    <h3 className="info-title">Dates & Horaires</h3>
                    <p>Vendredi 27 Mars 2026</p>
                    <p className="info-highlight">14h - 19h</p>
                    <p>Samedi 28 Mars 2026</p>
                    <p className="info-highlight">10h - 19h</p>
                </div>

                <div className="info-card">
                    <svg className="info-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <h3 className="info-title">Adresse</h3>
                    <p>Télécom Paris</p>
                    <p>19 Place Marguerite Perey</p>
                    <p>91120 Palaiseau</p>
                </div>
                <div className="info-card">
                    <img
                        src={moneyIcon}
                        alt="Tarifs"
                        className="info-icon"
                    />
                    <h3 className="info-title">Tarifs</h3>
                    <p className="info-highlight">Entrée Gratuite pour tous</p>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
