const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/',(req,res,next)=>{

    res.render(path.join(__dirname, '..', 'views','index.ejs'));

});

module.exports = router;