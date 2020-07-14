const burger = require('../models/burger');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAllBurgers(data => {
        let burgerObject = {
            burger: data
        };
        res.render('index', burgerObject);
    })
});

router.post('/api/burgers', (req, res) => {
    burger.createBurger('burger_name', req.body.name, result => {
        res.json({ id: result.insertId });
    })
})


router.put('/api/burgers/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.json(id);
})

module.exports = router;