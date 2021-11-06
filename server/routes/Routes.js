const express = require('express');

const router = express.Router();

const { createFile, getAllFiles } = require('../controller/Controller');
router.post('/createfile',  createFile);
router.get('/getallfiles', getAllFiles);


module.exports = router;