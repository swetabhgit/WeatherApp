var express =require('express');
var weatherRoute = require('./Router/weatherRouter')
var app = express();
app.set('view engine','ejs');
app.use('/',weatherRoute)

app.listen('8080',function(err){
    if(err)
    console.log(err);
    else
    console.log("server listing at port 8080")

})