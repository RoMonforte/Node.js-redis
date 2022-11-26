const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list)
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);

// Internal functions
function list(req, res) {
    Controller.list()
        .then((lista) => {
            response.sucess(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}

function get(req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            response.sucess(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}

function upsert(req, res) {
    Controller.upsert(req.body)
        .then((user) => {
            response.sucess(req, res, user, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}

module.exports = router;