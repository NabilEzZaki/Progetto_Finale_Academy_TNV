const express = require('express');
const router = express.Router();
const DataEntry = require('../models/index').dataEntry;

router.get('/', function (req, res, next) {
    DataEntry.findAll({})
        .then(dataEntry => res.json(dataEntry))
        .catch(err => res.json(err))
    ;
});

router.get('/:id', function (req, res, next) {
    DataEntry.findOne({
            where: {
                id: req.params.id
            }
        }
    )
        .then(dataEntry => res.json(dataEntry))
        .catch(err => res.json(err));
});