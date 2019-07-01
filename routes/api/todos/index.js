// inside of routes/api/todos

const express = require('express');
const router = express.Router();

// const connection = require('./../../../config/connection.js');
// MVC structure
const todosController = require('./../../../controllers/todosController');
// has /api/todos prependedto all of its routes

router.route('/')
    // invoke findall in todoscontroller
    .get(todosController.findAll);

router.route('/:id')
    // can also add a .put and do all kinds of stuff!!
    .delete(todosController.deleteById)
    .get(todosController.findById);

// router.get('/', (req, res) => {
//     // can make async 
// connection.query('SELECT * FROM todos;', (err, todos) => {
//     res.json(todos);
// });
// });

// // /api/todos/:id
// router.get('/:id', (req, res) => {
//     const query = 'SELECT * FROM todos WHERE id = ?;';
//     connection.query(query, req.params.id, (err, todos) => {
//         res.json(todos);
//     });
// });

// router.delete('/:id', (req, res) => {
//     let query = 'DELETE FROM todos WHERE id = ?;';
//     connection.query(query, req.params.id, (err, todos) => {
//         if (err) throw err;
//         connection.query('SELECT * FROM todos', (err, todos) => {
//             if (err) throw err;
//             res.json(todos);
//         });
//     })
// });

module.exports = router;