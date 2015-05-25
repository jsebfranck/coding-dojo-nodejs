
### Etape 0 : Installation de Node.js

- Pour les utilisateurs de windows, vous pouvez passer directement par l'installeur classique. En bonus ça serait mieux d'avoir une ligne de commande user friendly, par exemple cygwin.
- Pour les autres, je vous préconise d'installer Node Version Manager qui vous permettra de facilement changer de version de Node.js, mais vous pouvez aussi passer par l'installeur classique.

Pour valider votre installation, vous pouvez lancer les commandes suivantes :

```
node --version
npm --version
npm install -g grunt-cli
grunt --version`
```

Nous réutiliserons les commandes node, npm et grunt dans les étapes suivantes.

### Etape 1 : Hello world

Créez un fichier hello.js qui affiche "hello world" dans la console puis exécutez ce fichier avec la commande node.

### Etape 2 : Votre premier projet

Lancez la commande "npm init" et suivez les différentes étapes de création du projet.

Féliciations vous venez de créer votre premier projet Node.js. Jetez un coup d'oeil au fichier package.json qui vient d'être généré.

### Etape 3 : Votre premier serveur HTTP

[Express|https://github.com/strongloop/express] est un module qui permet de créer un serveur web en Node.js.

En une seule commande npm, installez ce module dans votre projet et faites en sorte que le module soit automatiquement référencé dans le fichier package.json.
Jetez à présent un coup d'oeil au contenu de votre projet, un nouveau répertoire vient d'être créé. Jetez y un coup d'oeil.

Créez un fichier server.js à la racine de votre projet et utilisez le module Express. Votre objectif : faire en sorte que votre serveur
renvoie une liste d'animaux sur l'url /pets :

```
$ curl http://localhost:3000/pets
[{"name":"Heidi","kind":"Dog","age":3},{"name":"Pluto","kind":"Dog","age":14},{"name":"Heidi","kind":"Dog","age":4}]
```

### Etape 4 : Un peu d'outillage

Fatigué de redémarrer votre serveur ? Créez un fichier gruntfile.js à la racine de votre projet avec le contenu suivant :


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


### Etape 5 : Un backend

Firebase est une base de données NoSQL dans le cloud (https://www.firebase.com/docs/web/quickstart.html).

- création du compte dans Firebase
- installation du module
- écriture des données dans Firebase
- lecture des données dans Firebase

### Etape 6 : une vue

[Swig|https://github.com/paularmstrong/swig] est un module permettant de faire du templating HTML en Node.js.
Il s'intègre très bien à Express : http://paularmstrong.github.io/swig/docs/#express.

Attention au cache

angular?


### TODO

- découpage route / controller / service
- modification des données
- promeses / Q
- tests