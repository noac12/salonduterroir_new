# Guide de Déploiement

Ce fichier documente la procédure pour mettre à jour le site web `salonduterroir.fr`.

## Prérequis

- Accès SSH au serveur : `ssh root@2a09:6847:fa10:1410::141`
- Le dépôt GitHub : `git@github.com:Petitfilou36/salonduterroir_new.git`

## Workflow de Mise à Jour

1.  **Développement Local**
    Faites vos modifications en local, testez avec `npm run dev`.

2.  **Push vers GitHub**
    Commitez et poussez vos changements sur la branche principale.
    ```bash
    git add .
    git commit -m "Description des changements"
    git push origin main
    ```

3.  **Mise à jour sur le Serveur**
    Connectez-vous au serveur et récupérez les changements.

    ```bash
    # 1. Connexion SSH
    ssh root@2a09:6847:fa10:1410::141

    # 2. Aller dans le dossier du projet
    cd /var/www/salonduterroir_new

    # 3. Récupérer la dernière version
    git pull origin main

    # 4. Installer les nouvelles dépendances (si besoin)
    npm install

    # 5. Construire le projet
    npm run build

    # 6. Mettre en ligne (Remplacer l'ancien site)
    # Copie le contenu de dist/ vers le dossier public du serveur web
    rsync -av --delete dist/ /var/www/html/
    ```

## En cas de problème

- **Les pages ne chargent pas (404)** : Vérifiez la config Nginx (`/etc/nginx/sites-available/default`) et assurez-vous que `try_files $uri $uri/ /index.html;` est présent.
- **Erreur de build** : Vérifiez que vous utilisez bien Node.js 18+ (`node -v`).
