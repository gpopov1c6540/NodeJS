const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/',verify,(req,res) => {
    res.send(req.user);
    User.findbyOne({_in:req.user})
});



module.exports = router;