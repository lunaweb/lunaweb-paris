
```
  _                    __          __  _        _____                            _                 
 | |                   \ \        / / | |      / ____|                          (_)                
 | |    _   _ _ __   __ \ \  /\  / /__| |__   | |     __ _ _ __ ___  _ __   __ _ _  __ _ _ __  ___ 
 | |   | | | | '_ \ / _` \ \/  \/ / _ \ '_ \  | |    / _` | '_ ` _ \| '_ \ / _` | |/ _` | '_ \/ __|
 | |___| |_| | | | | (_| |\  /\  /  __/ |_) | | |___| (_| | | | | | | |_) | (_| | | (_| | | | \__ \
 |______\__,_|_| |_|\__,_| \/  \/ \___|_.__/   \_____\__,_|_| |_| |_| .__/ \__,_|_|\__, |_| |_|___/
                                                                    | |             __/ |          
                                                                    |_|            |___/           
```


## Présentation

Site **Middleman** dédié à **LunaWeb Paris**.


## Liens utiles

Le site n'est pas encore en production (mode sandbox).

* Administration DatoCMS : https://lunaweb-paris.admin.datocms.com/
* Pas encore d'url de prototype


## Pré-requis

* Ruby 2.3.1
* Bundler 2
* Node 8.11.1


## Installation

```
git clone git@codebasehq.com:lunaweb/luna/lw-paris-admin.git lw-paris-admin
cd lw-paris-admin

# Dépendances de l'application
bundle install --path=vendor/bundle
npm install
```


## Utilisation

* `npm run dev` : lance le serveur de développement local

* `npm run build` : construit l'ensemble du projet

* `npm run deploy` : Déploie le projet sur le serveur (selon `.config.rb`)

* `npm run deliver` : Zip le projet sous la forme d'un livrable
  * `build`

Il est toujours possible d'utiliser `foreman start` pour lancer le serveur et développer localement.


## Administration (DatoCMS)

### Informations

DatoCMS est installé via la gem middleman-dato présent dans le fichier Gemfile : `gem 'middleman-dato'`.  
Le CMS est ensuite activé via `activate :dato` dans `./config.rb`.  

### Clé API

Ajouter un fichier `.env` avec le contenu suivant :

```
DATO_API_TOKEN=[cle_api]
```

Vous trouverez la clé d'API dans Admin area > API tokens > Read Only API token de l'administration de votre projet (cf. Liens utiles).

Plus d'informations sur Middleman/DatoCMS : https://www.datocms.com/docs/static-generators/middleman