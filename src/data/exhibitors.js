import zoeBiomadPdf from '../assets/ZOE BIOMAD_260314_123303.pdf';

export const categories = [
    //Thomas tu peux changer les catégories vu que tu connais mieux les exposants.
    "Vin",
    "Champagne",
    "Viande et Charcuterie",
    "Fromage",
    "Spiritueux",
    "Autres produits",
    "Épicerie fine",
    "Association"
];

export const exhibitors = [
    // Exemple de structure :
    // {
    //     id: 1,
    //     name: "Nom de l'exposant",
    //     category: "Vin",               // Une des catégories ci-dessus, ou bien un tableau : ["Vin", "Spiritueux"]
    //     region: "Région d'origine",
    //     description: "Description courte de l'exposant.",
    //     website: "https://www.example.com",  // URL du site web (optionnel)
    //     logo: "/logos/nom-exposant.png"       // Chemin vers le logo (optionnel). Ici, /logos/nom-exposant.png veut dire public//logos/nom-exposant.png
    //     active: false                         // Optionnel : masque l'exposant du site sans le supprimer
    // },
    {
        "id": 1,
        "name": "Choco & Co",
        "category": "Autres produits",
        "region": "Essonne",
        "description": "Artisan chocolatier proposant des créations originales et gourmandes.",
        "website": "https://arnaud-dupuis.com/",
        "logo": null
    },
    {
        "id": 2,
        "name": "Châtaignes Gourmandes",
        "category": "Autres produits",
        "region": "Dordogne",
        "description": "Producteur de châtaignes en Dordogne",
        "website": "https://www.producteur-chataignes-varaignes.fr/",
        "logo": null
    },
    {
        "id": 3,
        "name": "Château Le Brézéguet",
        "category": "Vin",
        "region": "Lot",
        "description": "Producteur de vin de Cahors et Côtes du Lot",
        "website": "https://www.chateaulebrezeguet.fr/",
        "logo": null
    },
    {
        "id": 4,
        "name": "Zoe Biomad",
        "category": "Épicerie fine",
        "region": "Yvelines",
        "description": "Sélection de produits d'épicerie fine, épices et saveurs du monde.",
        "website": zoeBiomadPdf,
        "logo": null,
        "active": false
    },
    {
        "id": 5,
        "name": "Château Les Gazelles",
        "category": "Vin",
        "region": "Bordeaux",
        "description": "Producteur de Vins de Lalande-de-Pomerol, près de Saint-Émilion",
        "website": "https://www.chateaulesgazelles.ovh/",
        "logo": null
    },
    {
        "id": 6,
        "name": "Frenchic Attitude",
        "category": "Épicerie fine",
        "region": "",
        "description": "Sélection de produits d'artisans Français",
        "website": "https://frenchicattitude.fr",
        "logo": null
    },
    // {
    //     "id": 7,
    //     "name": "drouet",
    //     "category": "charcuterie",
    //     "region": "",
    //     "description": "",
    //     "website": "",
    //     "logo": null
    // },
    {
        "id": 8,
        "name": "Domaine La Doussiniere",
        "category": "Vin",
        "region": "Dordogne",
        "description": "Vins rouges bio de vieilles vignes au coeur du Périgord",
        "website": "https://ladoussiniere.fr/",
        "logo": null
    },
    {
        "id": 9,
        "name": "Champagne Brimont & Fils",
        "category": "Champagne",
        "region": "Reims",
        "description": "Entreprise familiale productrice de Champagne",
        "website": "https://www.champagnebrimont.fr/",
        "logo": null
    },
    {
        "id": 10,
        "name": "Bois de corail",
        "category": "Spiritueux",
        "region": "Seine-et-Marne",
        "description": "Créateur de rhums arrangés. Découvrez nos recettes exotiques et originales 100% naturelles !",
        "website": "https://www.boisdecorail.fr/",
        "logo": null
    },
    {
        "id": 11,
        "name": "Mes Délices 91",
        "category": "Épicerie fine",
        "region": "Essonne",
        "description": "Sélection raffinée de produits d'épicerie fine et condiments du monde.",
        "website": "https://www.instagram.com/mesdelices.91/",
        "logo": null
    },
    {
        "id": 12,
        "name": "Inkraft Beer Company",
        "category": "Autres produits",
        "region": "Essonne",
        "description": "Brasseur artisanal proposant une gamme de bières originales",
        "website": "https://www.instagram.com/inkraftbeer/",
        "logo": null
    },
    {
        "id": 13,
        "name": "La Savonnerie Du Gâtinais",
        "category": "Autres produits",
        "region": "Essonne",
        "description": "Savons artisanaux crées au sein du parc du Gâtinais",
        "website": "https://lasavonneriedugatinais.fr/",
        "logo": null
    },
    {
        "id": 14,
        "name": "Domaine Tour Scala",
        "category": "Vin",
        "region": "Aude",
        "description": "Vigneron indépendant producteur de vins issus des Corbières",
        "website": "https://www.domainetourscala.fr/",
        "logo": null
    },
    {
        "id": 15,
        "name": "Apihappy",
        "category": "Autres produits",
        "region": "Essonne",
        "description": "Apiculteur récoltant proposant des miels naturels et produits de la ruche.",
        "website": "https://apihappy.fr",
        "logo": null,
        "active": false
    },
    {
        "id": 16,
        "name": "Champagne Marcel Vézien",
        "category": "Champagne",
        "region": "Champagne",
        "description": "Maison de Champagne familiale élaborant des cuvées d'exception.",
        "website": "https://champagne-vezien.com/",
        "logo": null
    },
    {
        "id": 17,
        "name": "Domaine Gogué",
        "category": "Vin",
        "region": "Centre Val de Loire",
        "description": "Producteur de Sauvignon et de Pinot Noir de Ménetou-Salon",
        "website": "",
        "logo": null
    },
    {
        "id": 18,
        "name": "So'délices",
        "category": "Autres produits",
        "region": "Essonne",
        "description": "Gourmandises sucrées artisanales : nougat, pâtes à tartiner et petites douceurs \"fait maison\"",
        "website": "",
        "logo": null,
        "active": false
    },
    {
        "id": 19,
        "name": "Corsicabreizh",
        "category": ["Vin", "Fromage", "Viande et Charcuterie"],
        "region": "Corse",
        "description": "Producteur de vins, fromages et charcuteries corses. Fromages issus de l'exploitation familiale à Penta Di Casinca. Charcuterie de La Castagniccia.",
        "website": "https://www.corsicabreizh.com/",
        "logo": null
    },

    {
        "id": 20,
        "name": "Maison Romy",
        "category": "Autres produits",
        "region": "Seine-et-Marne",
        "description": "Pâtisseries fines, confiseries et produits d’épicerie fine artisanaux, ",
        "website": "https://maisonromy.com/",
        "logo": null
    },
    {
        "id": 21,
        "name": "Domaine du Trait Vert",
        "category": "Vin",
        "region": "Muscadet",
        "description": "Le Domaine du Trait Vert cultive le Muscadet en biodynamie avec un profond respect du vivant. Sa philosophie privilégie la traction animale et les interventions naturelles pour exprimer la pureté du terroir.",
        "website": "https://www.domainedutraitvert.com/",
        "logo": null
    },
    {
        "id": 22,
        "name": "Gusto latino",
        "category": "Autres produits",
        "region": "Île-de-France",
        "description": "Spécialiste de l'empanada artisanale",
        "website": "",
        "logo": null
    },
    {
        "id": 23,
        "name": "Domaine Lou Gaillot",
        "category": "Vin",
        "region": "Lot",
        "description": "Vins IGP Agenais BIO blanc, rosé et rouge. Des créations originales: Vin pétillant houblonné, Bière de raisin.",
        "website": "https://www.lougaillot.com/",
        "logo": null
    },
    {
        "id": 24,
        "name": "TIA Artisanal, Épice de Madagascar & Co",
        "category": "Épicerie fine",
        "region": "Île-de-France",
        "description": "Sélection de produits artisanaux de Madagascar mais aussi de bijoux fantaisie, chaussures, textiles et accessoires de mode",
        "website": "",
        "logo": null
    },
    {
        "id": 25,
        "name": "Les Vergers de Cousancelles",
        "category": "Autres produits",
        "region": "Lorraine",
        "description": "Producteur de fruits issus d'une agriculture biologique",
        "website": "https://les-vergers-de-cousancelles.fr/",
        "logo": null
    },
    {
        "id": 26,
        "name": "Terroirs & Traditions",
        "category": "bretzel",
        "region": "",
        "description": "Spécialités artisanales: bretzels garnis salés et sucrés, ainsi que différentes douceurs sucrées",
        "website": "https://terroirsettraditions.com/fr",
        "logo": null,
        "active": false
    },
    {
        "id": 27,
        "name": "Domaine Schlegel Boeglin",
        "category": "Vin",
        "region": "Alsace",
        "description": "Domaine viticole familial proposant une large gamme de vins d’Alsace : Edelzwicker, Sylvaner, Crémant d’Alsace, Riesling, Gewurztraminer, Pinot Noir, Pinot Gris, Pinot Blanc…",
        "website": "https://schlegel-boeglin.fr/",
        "logo": null
    },
    {
        "id": 28,
        "name": "Les Blouses Roses",
        "category": "Association",
        "region": "France",
        "description": "Présentation de l'association et recueil de dons. Distraire les malades et apporter des moments de bonheur.",
        "website": "https://www.lesblousesroses.asso.fr/fr/",
        "logo": null,
        "active": false
    },
    {
        "id": 29,
        "name": "Gloria Kora",
        "category": "Épicerie fine",
        "region": "Bénin",
        "description": "Produits d'exception du Bénin : du café épicé au beurre de karité en passant par le jus d'hibiscus",
        "website": "",
        "logo": null
    },
    {
        "id": 30,
        "name": "Parezanin/Ô Comptoir Des Gourmands",
        "category": "Viande et Charcuterie",
        "region": "Essonne",
        "description": "Rôtisserie/Charcuterie/Conserverie/Traiteur",
        "website": "",
        "logo": null
    },
    {
        "id": 31,
        "name": "FIFI & BOUTIN",
        "category": "Viande et Charcuterie",
        "region": "",
        "description": "Sirops de fruits frais exotiques",
        "website": "https://fifietboutin.fr/",
        "logo": null
    }
];
