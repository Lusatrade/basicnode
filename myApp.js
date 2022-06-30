let express = require('express');
let app = express();
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()


console.log("Hello World");

const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip} `)
    next()
}

const timer = (req,res,next)=>{
    req.time = new Date().toString()
    next()
}

// Middleware
app.use('/public',express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(logger)




console.log(path.join(__dirname, 'public'));

app.get('/',(req,res)=>{
    const path = __dirname + '/views/index.html'
    res.sendFile(path)
})

app.get('/now',timer,(req,res)=>{
    res.status(200).json({time: req.time})
})

app.get('/name',(req,res)=>{
    const q = req.query
    const result = {
        name : `${q.first} ${q.last}`
    }
    res.status(200).json(result)

})

app.post('/name',(req,res)=>{
    q = req.body;
    const result = {
        name : `${q.first} ${q.last}`
    }
    res.status(200).json(result)

})

app.get('/:word/echo',(req,res)=>{
    res.status(200).json({echo:req.params.word})

})

app.get('/json',(req,res)=>{
    const result = {"message": process.env.MESSAGE_STYLE=='uppercase'?"Hello json".toUpperCase():"Hello json"}
    res.status(200).json(result)
})


































 module.exports = app;
