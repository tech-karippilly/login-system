const express = require('express')
const session = require('express-session');

const hostName = 'http://localhost'
const port  = 3000

const app = express()

app.set('view engine','pug');
app.set('views','views')

app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });

app.use(session({
    secret: 'login-from',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


const authRouter = require('./auth/auth')
app.use('/',authRouter)

const homeRoute = require('./home/index');

app.use('/home',homeRoute)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`)
})

