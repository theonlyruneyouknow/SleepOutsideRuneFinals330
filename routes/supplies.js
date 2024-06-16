const router = require('express').Router()
const suppliesController = require('../controllers/supplies')
const {validateSupplier, validation} = require('../middleware/validate')
const { isAuthenticated } = require('../middleware/authenticate')

//const suppliesController = require('../controllers/supplies')

router
    .get('/', suppliesController.getAllItems)
    .get('/:id', suppliesController.getSingleItem)
    .post('/', isAuthenticated, validateSupplier(), validation, suppliesController.createItem)
    .put('/:id', isAuthenticated, validateSupplier(), validation, suppliesController.updateItem)
    .delete('/:id', isAuthenticated, suppliesController.deleteItem)

module.exports = router