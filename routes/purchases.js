const { Router } = require('express')
const { createPurchase, getPurchase, patchPurchase } = require('../controllers/purchases');

const route = Router()

route.post('/purchases', createPurchase)
route.get('/purchases/:dni', getPurchase)
route.patch('/purchases/:id', patchPurchase)



module.exports = route 