// Inside of API
// "/api/" prepended

const express = require('express');
// invoke router allows us to have new instance on app
const router = express.Router();
// all of the routes here have /prepended to it due to route

const todoRoutes = require('./todos');
router.use('/todos', todoRoutes);

router.get('/', (req, res) => res.send("I am inside /api"));
// arrow callback function after of what it sends

module.exports = router;