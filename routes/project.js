const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', authMiddleware.verifyAdmin, productController.createProduct);
router.put('/:id', authMiddleware.verifyAdmin, productController.updateProduct);
router.delete('/:id', authMiddleware.verifyAdmin, productController.deleteProduct);

module.export = router;
