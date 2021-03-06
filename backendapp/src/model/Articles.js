const uuid = require('uuid')
const N1qlQuery = require('couchbase').N1qlQuery
const bucket = require('../app').bucket

function ArticlesModel () {}

ArticlesModel.getAll = function (callback) {
  const statement = 'SELECT META(articles).id, articles.* FROM `' + bucket._name + '` AS articles WHERE articles.type="articles"'
  const query = N1qlQuery.fromString(statement)
  bucket.query(query, function (error, result) {
    if (error) {
      console.log(error)
      return callback(error, null)
    }
    callback(null, result)
  })
}
ArticlesModel.create = function (data, callback) {
  const articles = {
    nom: data.nom,
    contenu: data.contenu,
    created_at: (new Date()),
    categorie: data.categorie,
    type: 'articles'
  }
  const id = uuid.v4()
  bucket.insert(id, articles, function (error, result) {
    if (error) {
      console.log(error)
      return callback(error, null)
    }
    articles.id = id
    callback(null, articles)
  })
}

ArticlesModel.getArticlesById = function (data, callback) {
  bucket.get(data.id, function (error, result) {
    if (error) {
      return callback(error, null)
    }
    callback(null, result.value)
  })
}

ArticlesModel.deleteById = function (articleId, callback) {
  bucket.remove(articleId, function (error, result) {
    if (error) {
      return callback(error, null)
    }
    callback(null, result.value)
  })
}
module.exports = ArticlesModel
