const express =require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    if (req.session.username) {
        res.render('home')
    } else {
        res.redirect('/');
    }
    
})



module.exports = route