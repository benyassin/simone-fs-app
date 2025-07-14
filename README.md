## Application Frontend - Simone ##

Ce projet est une application frontend Angular permettant la gestion des examens avec affichage des informations telles que la date, l'heure, le point de rendez-vous, l'étudiant concerné, ainsi que le statut de l’examen.


## Points d’amélioration identifiés (à discuter) ##

Certaines fonctionnalités n’ont pas été finalisées ou pourraient être améliorées :

- **Ajouter des tests unitaires** pour les services et composants Angular (actuellement absents)
- **Ajouter des Toastr** pour notifier l'utilisateur en cas de :
  - Succès d'une action (examen ajouté, etc.)
  - Erreur métier (champ manquant, etc.)
  - Erreur technique (erreur 500, réseau, etc.)
- **Implémenter le lazy loading** pour optimiser le temps de chargement initial de l’application
- **Mettre en place NgRx** pour une gestion centralisée et prévisible du state
- **Rendre l’interface responsive** pour un affichage optimal sur mobile et tablettes
- **Configurer `i18n` (ngx-translate)** pour prendre en charge l'internationalisation
- **Ajouter des fichiers `environments`** pour gérer les secrets et différencier les environnements (`dev`, `preprod`, `prod`)
- **Ajouter un `HTTP Interceptor`** pour :
  - Gérer globalement les erreurs des appels API
  - Ajouter des en-têtes communs (token, etc.)
  - Gérer les redirections 401/403


## Auteur ##
Ayoub BENYASSIN
