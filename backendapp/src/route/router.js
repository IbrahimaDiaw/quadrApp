const CategorieModel = require('../model/Categorie')
const ArticlesModel = require('../model/Articles')

const appRouter = function (app) {
  // la partie  qui toutes les categories
  app.get('/categories', function (req, res) {
    CategorieModel.getAll(function (error, result) {
      if (error) {
        return res.status(400).send(error)
      }
      res.send(result)
    })
  })

  app.post('/categories', function (req, res) {
    if (!req.body.nom) {
      return res.status(400).send({ status: 'error', message: 'Le champs nom est obligatoire' })
    }
    CategorieModel.create(req.body, function (error, result) {
      if (error) {
        return res.status(400).send(error)
      }
      res.send(result)
    })
  })

  app.get('/categories/:id', function (req, res) {
    CategorieModel.getCategorieById(req.params, function (error, result) {
      if (error) {
        return res.status(400).send(error)
      }
      res.send(result)
    })
  })

  app.post('categories/:id', function (req, res) {
    CategorieModel.getCategorieById(req.params.id, function (error, categorie) {
      if (error) {
        return res.status(400).send(error)
      }
      categorie.nom = req.body.nom
      CategorieModel.create(categorie, function (error, result) {
        if (error) {
          console.log(error)
          return res.status(400).send(error)
        }
        res.send(categorie)
      })
    })
  })

  app.post('/categorie/delete/:id', function (req, res) {
    CategorieModel.deleteCategorieById(req.params.id, function (error, result) {
      if (error) {
        return res.status(400).send(error)
      }
      res.send(result)
    })
  })

  // la partie qui gere les articles
  app.get('/articles', function (req, res) {
    ArticlesModel.getAll(function (error, result) {
      if (error) {
        return res.status(400).send(error)
      }
      res.send(result)
    })
  })
  app.post('/articles', function (req, res) {
    if (!req.body.nom) {
      return res.status(400).send({ status: 'error', message: 'Le champs nom est obligatoire' })
    }
    if (!req.body.contenu) {
      return res.status(400).send({ status: 'error', message: 'Le champs contenu est obligatoire' })
    }
    if (!req.body.categorie) {
      return res.status(400).send({ status: 'error', message: 'Le champs categorie est obligatoire' })
    }
    ArticlesModel.create(req.body, function (error, result) {
      if (error) {
        return res.status(400).send(error)
      }
      res.send(result)
    })
  })

  app.get('/articles/categories/:id', function (req, res) {
    CategorieModel.getAllArticlesByCategories(req.params, function (error, result) {
      if (error) {
        return res.status(400).send(error)
      }
      res.send(result)
    })
  })
}

module.exports = appRouter
