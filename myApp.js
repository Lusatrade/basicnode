let express = require('express');
let app = express();

console.log("Hello World");

app.get('/',(req,res)=>{
    const path = __dirname + '/views/index.html'
    res.sendFile(path)
})



































 module.exports = app;
