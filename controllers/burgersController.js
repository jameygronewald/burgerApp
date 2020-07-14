const burger = require('../models/burger');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAllBurgers(data => {
        console.log(data);
        let burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render('index', burgerObject);
    })
});

router.post('/api/burgers', (req, res) => {
    console.log(req.body);
    res.json({ id: result.insertId });
})


router.put('/api/burgers/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.json(id);
})

module.exports = router;