const express = require('express');

const response = require('../network/response');
const Store = require('../store/mysql');


const router = express.Router();

router.get('/:table', list);
router.get('/:table/:id',get);
router.post('/:table', insert);
router.put('/:table', upsert);

async function list(req,res,next) {
    const data =  await Store.list(req.params.table)
    response.sucess(req, res, data, 200); 
}

async function get(req,res,next) {
    const data =  await Store.get(req.params.id)
    response.sucess(req, res, data, 200); 
}

async function insert(req,res,next) {
    const data =  await Store.insert(req.params.table, req.body)
    response.sucess(req, res, data, 200);     
}

async function upsert(req,res,next) {
    const data =  await Store.upsert(req.params.table, req.body)
    response.sucess(req, res, data, 200);       
}


module.exports = router;
 
