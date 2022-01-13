# Projet 6 - Développez une interface utilisateur pour une application web Python  
# *- JustStreamIt*  

---

####
# Description du programme  
Application web de streaming de films.

---

####
# 1. Importer le projet depuis github (fichiers Java, HTML, CSS)  
* Veuillez taper la commande suivante dans votre console  pour importer le dépôt :
  * git clone https://github.com/Mike-mg/juststreamit  
####
* Ce déplacer dans ce dossier "Juststreamit".  

---

####
# 2. Importation de l'API
* Importer le dépôt de l'api en tapant la commande suivante :
  * git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git dans le dossier courant "Juststreamit"  

---

####
# 3. Créer l'environnement virtuel puis activer le serveur :
* Ce déplacer dans ce dossier "OCMovies-API-EN-FR".  
* Créer l'environnement virtuel avec la commande du terminal suivante : 
  * python -m venv env
* Activez l'environnement virtuel sous windows :
  * env\Scripts\activate
* Ou activez l'environnement virtuel sous linux :
  * source env/bin/activate
* Installez les dépendances du projet avec la commande suivante :
  * pip install -r requirements.txt
* Créer et alimenter la base de données avec la commande suivante :
  * python manage.py create_db
* Et terminer en démarrant le serveur :
  * python manage.py runserver

---

####
# 4. Lancer le programme
* Il ne vous reste plus qu'à lancer le programme en ouvrant sur le fichier " *page.html* " du répertoire "juststreamit" à l'aide de votre navigateur.

---