const express = require('express')

const router = express.Router()

function isLoggedIn(req,res,next){
    if(req.session.username){
        res.redirect('/home');
    }else{
        next()
    }
   
}


router.get('/',isLoggedIn,(req,res)=>{
    res.render('login')
})

router.post('/login',isLoggedIn,(req,res)=>{
    const { username, password } = req.body;
    if (username ==='user' && password ==='admin'){
        req.session.username = username;
        res.redirect('/home');
    }else{
        res.redirect('/');
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy((err) => {
        if (err) {
          console.error('Error destroying session:', err);
          return res.redirect('/home'); 
        }
        res.redirect('/'); 
      });
    
})

module.exports = router