const burger = require('../models/burger');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAllBurgers(data => {
        const burgerObject = {
            burger: data
        };
        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.createBurger('burger_name', req.body.name, result => {
        res.json({ id: result.insertId });
        console.log(`Added ${req.body.name}!`);
    });
});


router.put('/api/burgers/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Burger ${id} has been devoured!`);
    burger.updateBurger('devoured', req.body.devoured, id, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } 
        else {
            res.status(200).end();
        };
    });
});

module.exports = router;