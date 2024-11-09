const express = require('express')

const hostName = 'http://localhost'
const port  = 3000

const app = express()

app.set('view engine','pug');
app.set('views','views')

app.use(express.urlencoded({ extended: true }));

const authRouter = require('./auth/auth')
app.use('/',authRouter)

const homeRoute = require('./home/index')
app.use('/home',homeRoute)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`)
})

