import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(300).send('hello!!!');
});

module.exports = router;
