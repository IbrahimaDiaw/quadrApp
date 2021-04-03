# frontendapp

> A Vue.js project

## Build Setup

``` bash


# Confuguration du backend folder. Veuillez modifier le nom d'utilisateur par rapport au tien et le password aussi ainsi que le nom du bucket dans le fichier app.js de backend
const cluster = new couchbase.Cluster("couchbase://localhost");
cluster.authenticate('votre_username', 'password')
const bucket = cluster.openBucket("votre_nombucket");

# exportation la base de couchbase avec 

cbbackup http://localhost:8091 technique_backup -u Ibrahima -p password -b technique

#import de la base de donnees

cbdocloader -c loclalhost:8091 -u Administrator -p password -b nomdubucket -m bucket-quota-MB -d fichieraimporter

# installer les dependences de chacun des dossiers frontend et backend
npm install

# demmarrer le serveur  frontend  localhost:8080
npm run dev

# demarrer le serveur backend avec cette commande localhost:5000
npm start

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
