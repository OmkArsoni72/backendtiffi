const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.verifyUser, cartController.getCart);
router.post('/', authMiddleware.verifyUser, cartController.addItemToCart);
router.delete('/:id', authMiddleware.verifyUser, cartController.removeItemFromCart);

module.export = cart;
