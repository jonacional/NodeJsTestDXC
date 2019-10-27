const { Router } = require('express');
const router= Router();

//routes
router.get('/',(req, res)=> {
    res.json({"tittle":"Test Api Rest"});
}); 
module.exports= router;