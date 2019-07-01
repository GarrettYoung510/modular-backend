// inside routes
const express = require('express');
// invoke router allows us to have new instance on app
const router = express.Router();
// all of the routes here have /prepended to it due to route
const apiRoutes = require('./api');
// prepends /api to index.js
router.use('/api', apiRoutes);

// this is response sent
router.get('/', (req, res) => res.send("HELLO"));

// make it available 
module.exports = router;