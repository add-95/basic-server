const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log("Router Loaded..");

router.get('/', homeController.home);
// router.get('/home', homeController.homeWeb);

router.use('/users', require('./users'));
// router.use('/routerName', require('./routerfile'));

module.exports = router;