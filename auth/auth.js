const express = require('express')

const router = express.Router()



router.get('/',(req,res)=>{
    res.render('login')
})

router.post('/login',(req,res)=>{
    res.render('login')
    const { username, password } = req.body;
    console.log(username,password)
})

module.exports = router