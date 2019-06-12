# Guidelines

## Architecture SCSS : ITCSS

ITCSS ou "Inverted Triangle CSS" est une architecture permettant d'organiser les fichiers CSS, SCSS, LESS… d'un projet avec pour objectif de séprarer les styles en fonction de leur utilité et de leur spécificité.

* **Settings** : Configuration des variables de l'application. Ne génère pas de CSS
* **Tools** : Définition des fonctions et mixins utiles pour l'application. Ne génère pas de CSS
* **Generic** : Contient la défnition des styles globaux tels que les `reset.css` ou `normalize.css`
* **Elements** : Définition des styles des balises (body, h1, a…).
* **Objects** : Éléments dénués d'UI servant principalement à la mise en forme
* **Components** : Éléments composants l'interface de l'application.
* **Utilities** : Classes utilitaires et helper permettant d'appliquer un style précis en fonction du besoin.

## Convention de nommage BEMIT

Le [BEMIT](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) est une convention de nommage, proposée par Harry Roberts, qui étend le [BEM](http://getbem.com/) en lui apportant des namespaces liés à la structure de ITCSS.

### BEM

BEM (Block Element Modifier) est une méthodologie permettant de créer des éléments d'interfaces réutilisables, maintenables et évolutifs en gardant une spécificité homogène.

le nommage est extrêmement simple puisqu'il se base sur le principe que chaque élément d'interface possède un nœud racine (Block), des nœuds descendant (Element) ainsi que des états ou variantes pour chacun de ces nœuds (Modifier).

Une fois le principe de Block, Element et Modifier acquis il suffit de suivre les règles suivantes :

Délimiter les noms de classe par des tirets : `.ma-classe` et non `.ma_classe` ou `.MaClasse`.

Utiliser dès que nécessaire la notation BEM (Block, Élément, Modifieur) :

```scss
.component {}
.component--modifieur {}
.component__element {}
.component__element--modifieur {}
```

`.component` représente la racine du composant/module, `.component__element` son descendant/enfant.
`.component--modifieur` et `.component__element--modifieur` représentent un état ou une version différente de `.component` et de `.component__element`.

Le résultat est assez verbeux mais cela apporte une clarté et un premier niveau de documentation du code par le nommage.

### Namespaces

Les [namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#the-namespaces) que propose le [BEMIT](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) ont pour principal objectifs préciser cette documentation par le nommage en ajoutant le préfixe correspondant à l'emplacement de la classe CSS dans l'architecture du projet.

* `o-`: Objects
* `c-`: Components
* `u-`: Utilities
* `t-`: Themes
* `s-`: Scope
* `is-`, `has-`: State JS
* `js-`: JS Selector
* `qa-`: Test classes

Sources:
[Site BEM](http://getbem.com/)
[CSSWizardry BEMIT](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
[CSSWizardry Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#the-namespaces)

## InuitCSS

[InuitCSS](https://github.com/inuitcss/inuitcss) est un framework CSS proposant :

* Une architecture ITCSS
* Le nommage BEMIT
* Une palette de fonction, mixins améliorant le confort de développement

Contrairement a des frameworks comme Bootstrap ou Foundation, InuitCSS a la particularité de ne pas embarquer d'UI.

Sources
[Github InuitCSS](https://github.com/inuitcss/inuitcss)

## Hooks JS

Utiliser des préfixes de classes `.js-` pour cibler les éléments via JavaScript. **Les classes `js-` ne doivent pas apparaitre dans les feuilles de style.**

Exemple :

```html
<ul class="c-tabs js-tabs"></ul>
```

Si le JavaScript est amené à modifier l'état de l'élément ciblé via des classes, préférer des classes comme `is-active`, `is-expanded`...
