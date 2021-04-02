const uuid = require('uuid')
const N1qlQuery = require('couchbase').N1qlQuery
const bucket = require('../app').bucket

function CategorieModel () {}

CategorieModel.getAll = function (callback) {
  const statement = 'SELECT META(categorie).id, categorie.*,' +
  '(SELECT nom, created_at  FROM`' + bucket._name + '` USE KEYS categorie.articles) AS articles FROM `' + bucket._name + '` AS categorie WHERE categorie.type = "categorie"'
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

CategorieModel.deleteCategorieById = function (data, callback) {
  bucket.remove(data.id, function (error, result) {
    if (error) {
      return callback(error, null)
    }
    callback(null, result)
  })
}
module.exports = CategorieModel
