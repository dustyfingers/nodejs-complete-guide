const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<div>SHOP ITEMS GO HERE</div>');
});

module.exports = router;