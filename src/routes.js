const { Router } = require('express');

const OrderController = require('./controllers/OrderController');

const router = Router();

router.get('/orders', OrderController.index);
router.post('/orders', OrderController.store);
router.patch('/orders/:id/status', OrderController.update);

router.get('/status', OrderController.status); //! Brincar de montar o controller do status

module.exports = router;
