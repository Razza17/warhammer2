# Warhammer
Warhammer jeu de rôle web app : La web app afin de gérer les personages de votre groupe et la création de ceux-ci.
Les joueurs pourront aussi gérer dynamiquement leur personnage pendant le jeu.

# Installation avant de run l'app
* Se mettre dans le dossier warhammer2 puis faire npm install
* Ensuite se mettre dans le dossier warhammer2/client et faire npm install

# Lancer le server
* Se mettre dans le dossier warhammer2 puis faire npm run start-dev
* ou si cela ne fonctionne pas :
* dans le dossier warhammer2 : nodemon
* dans le dossier warhammer2/client : npm start

# Chemin de la BDD MongoDB
* la BDD est hébergée sur le Cloud de MongoDB.

# Reste à faire
- [x] Architecture de l'app
- [x] Mettre en place Redux
- [x] Mettre en place la BDD MongoDB
- [x] Mettre en place les fichiers du serveur
- [x] GET les données de la BDD dans la page personnage
- [x] GET les données de la BDD dans la page équipement
- [x] GET les données de la BDD de l'inventaire
- [x] UPDATE les données du personnage
- [x] POST, UPDATE and DELETE les données de l'équipement
- [x] POST, UPDATE and DELETE les données de l'inventaire
- [x] Page Combat (Regroupement des composants utiles à la phase de combat)
- [x] Page Login et mot de passe (avec Firebase).
- [x] Page Création de personnage et POST dans la BDD
- [x] Page Création : Talents, Armes, Armures
- [x] Page Création : Munitions, Argent, Folies, Inventaire
- [x] Page récap avec update possible
- [x] Récupération des données du personnage selon l'utilisateur
- [x] Choix du personnage à afficher selon l'utilisateur
- [x] Design global
- [x] Page "mon compte" GET user datas
- [x] Changer les appels à la BDD l'id de l'user en localStorage
- [x] Modifier les datas de l'utilisateur + le nom du personnage (page "Mon Compte")
- [x] Refacto du code de la page recap
- [x] Ajouter l'expérience en BDD lors de la création du personnage
- Ajouter le tableau de l'expérience
- DELETE Personnage(s)
