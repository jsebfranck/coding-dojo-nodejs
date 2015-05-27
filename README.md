
### Etape 0 : Installation de Node.js

- Pour les utilisateurs de windows, vous pouvez passer directement par l'installeur classique. En bonus ça serait mieux d'avoir une ligne de commande user friendly, par exemple cygwin.
- Pour les autres, je vous préconise d'installer Node Version Manager qui vous permettra de facilement changer de version de Node.js, mais vous pouvez aussi passer par l'installeur classique.

Pour valider votre installation, vous pouvez lancer les commandes suivantes :

```
node --version
npm --version
npm install -g grunt-cli
npm install -g bower
grunt --version
```

Nous réutiliserons les commandes node, npm, grunt et bower dans les étapes suivantes.

### Etape 1 : Hello world

Créez un fichier hello.js qui affiche "hello world" dans la console puis exécutez ce fichier avec la commande node.

### Etape 2 : Votre premier projet

Lancez la commande "npm init" et suivez les différentes étapes de création du projet.

Féliciations vous venez de créer votre premier projet Node.js. Jetez un coup d'oeil au fichier package.json qui vient d'être généré.

### Etape 3 : Votre premier serveur HTTP

[Express](https://github.com/strongloop/express) est un module qui permet de créer un serveur web en Node.js.

En une seule commande npm, installez ce module dans votre projet et faites en sorte que le module soit automatiquement référencé dans le fichier package.json.
Jetez à présent un coup d'oeil au contenu de votre projet, un nouveau répertoire vient d'être créé. Jetez y un coup d'oeil.

Créez un fichier server.js à la racine de votre projet et utilisez le module Express. Votre objectif : faire en sorte que votre serveur
renvoie une liste d'animaux sur l'url /pets :

```
$ curl http://localhost:3000/pets
[{"name":"Heidi","kind":"Dog","age":3},{"name":"Pluto","kind":"Dog","age":14},{"name":"Heidi","kind":"Dog","age":4}]
```

### Etape 4 : Un peu d'outillage

Fatigué de redémarrer votre serveur à chaque modification du code ? Créez un fichier gruntfile.js à la racine de votre projet avec le contenu suivant :


```
module.exports = function(grunt) {
  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'server.js'
      }
    }
  });

  grunt.loadNpmTasks("grunt-nodemon");

  grunt.registerTask("default", ["nodemon:dev"]);
};
```

Désormais, vous pouvez lancer la commande grunt pour démarrer votre serveur et toute modification du code sera prise immédiatement en compte.

Une alternative à grunt est gulp. Grunt ou Gulp permettent de gérer toutes les tâches autour de votre projet : exécution des tests, build, minification, gestion des feuilles de style etc.


### Etape 5 : Intégration d'un backend

Firebase est une base de données NoSQL dans le cloud. Les données y sont stockées en JSON. Elle est particulièrement appréciée pour la synchronisation
des données en temps réel sur chacun des clients et pour son hébergement de Single Page Application.

Ici, nous allons utiliser la partie stockage des données, comme une alternative à une base de données MongoDB par exemple.

Pour commencer, créez vous un compte sur Firebase. C'est gratuit et vous ne le regretterez pas!

Ensuite, installez le module [Node.js](https://www.firebase.com/docs/web/quickstart.html) dans le projet.

Utilisez à présent les fonctions d'écriture et de lecture du module Firebase pour créer et lister des animaux.

### Etape 6 : un peu d'HTML

[Swig](https://github.com/paularmstrong/swig) est un module permettant de faire du templating HTML en Node.js.
Il s'intègre très bien à Express : http://paularmstrong.github.io/swig/docs/#express (attention à bien désactiver le cache).

Créez une page index.html qui affiche un hello world et affichez cette page sur l'url /.

Maintenant, récupérez dans Firebase la liste des animaux, passez cette liste dans le contexte swig, et affichez les noms des animaux dans la page index.html.

### Etape 7 : la stack MEAN.js

MEAN ou Mongo Express Angular Node.js est une stack très populaire alliant 4 outils qui manipulent du JSON et qui sont asynchrones.

Le projet [MEAN.js](https://github.com/meanjs/mean) propose de créer un projet complet avec tous les outils nécessaires
pour démarrer les développements ainsi qu'une structure respectant les bonnes pratiques de développement de Node.js et d'Angular.

Générez votre projet à partir de la [documentation de Mean.js](http://meanjs.org/generator.html).
Attention, le projet sera généré directement dans le répertoire courant. Il est donc préférable de lancer les commandes de génération
dans un répertoire vide.

Installez à présent une base MongoDB en local.

Puis lancez la commande grunt, et rendez vous à l'url http://localhost:3000/#!/signup.

Félicitations, vous avez bootstrappé un projet MEAN.js.

### TODO

- découpage route / controller / service
- modification des données
- promeses / Q
- tests
