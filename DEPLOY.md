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
    ssh-add ~/.ssh/id_egithub_mac  # Clé GitHub locale
    git add .
    git commit -m "Description des changements"
    git push origin main
    ```

3.  **Mise à jour sur le Serveur**
    Utilisez l'agent forwarding (`ssh -A`) pour transmettre votre clé GitHub locale au serveur.

    ```bash
    # 1. Ajouter les clés locales
    ssh-add ~/.ssh/idid_rezel_hosting_2  # Clé serveur
    ssh-add ~/.ssh/id_egithub_mac        # Clé GitHub

    # 2. Commande de déploiement complète (une seule ligne)
    ssh -A root@2a09:6847:fa10:1410::141 "cd /var/www/salonduterroir_new && GIT_SSH_COMMAND='ssh -o IdentitiesOnly=no' git pull origin main && npm install && npm run build && rm -rf /var/www/html/* && cp -r dist/* /var/www/html/"
    ```

## En cas de problème

- **Les pages ne chargent pas (404)** : Vérifiez la config Nginx (`/etc/nginx/sites-available/default`) et assurez-vous que `try_files $uri $uri/ /index.html;` est présent.
- **Erreur de build** : Vérifiez que le serveur utilise Node.js 18+ (`node -v`).
- **Permission denied (GitHub)** : Assurez-vous d'utiliser `ssh -A` (agent forwarding) et que `~/.ssh/id_egithub_mac` est chargée dans l'agent local.
