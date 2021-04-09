const uuid = require('uuid')
const N1qlQuery = require('couchbase').N1qlQuery
const bucket = require('../app').bucket

function CategorieModel () {}

CategorieModel.getAll = function (callback) {
  const statement = 'SELECT META(categorie).id, categorie.*' +
  'FROM `' + bucket._name + '` AS categorie WHERE categorie.type = "categorie"'
  const query = N1qlQuery.fromString(statement)
  bucket.query(query, function (error, result) {
    if (error) {
      console.log(error)
      return callback(error, null)
    }
    callback(null, result)
  })
}

CategorieModel.create = function (data, callback) {
  const categorie = {
    nom: data.nom,
    type: 'categorie',
    created_at: (new Date())
  }
  const id = data.id ? data.id : uuid.v4()
  bucket.upsert(id, categorie, function (error, result) {
    if (error) {
      console.log(error)
      return callback(error, null)
    }
    callback(null, result)
  })
}

CategorieModel.getCategorieById = function (data, callback) {
  bucket.get(data.id, function (error, result) {
    if (error) {
      return callback(error, null)
    }
    callback(null, result.value)
  })
}

CategorieModel.deleteCategorieById = function (categorieId, callback) {
  bucket.remove(categorieId, function (error, result) {
    if (error) {
      return callback(error, null)
    }
    callback(null, result)
  })
}

CategorieModel.getAllArticlesByCategories = function (categorie, callback) {
  const statement = 'SELECT META(articles).id, articles.nom, articles.contenu FROM  `' + bucket._name + '` as articles ' +
   'WHERE ANY cat IN articles.categorie SATISFIES lower(cat) = ? END'
  const query = N1qlQuery.fromString(statement)
  bucket.query(query, [categorie], function (error, result) {
    if (error) {
      console.log(error)
      return callback(error, null)
    }
    callback(null, result)
  })
}
module.exports = CategorieModel
