var express = require('express');
var axios= require('axios');
var config = require('../Config/config');
var router = express.Router();
router.get('/weather',function(req,res,next){
    // axios.get('http://api.openweathermap.org/data/2.5/weather?q=Ranchi,IN&appid=ff3caca60243063df2699aea35d6a319').then((response)=>{
    //     //console.log(response.data);
    //     let city= response.data.name;
    //     console.log(city)
    //     let temp = response.data.main.temp;
    //     let press = response.data.main.pressure;
    //     let humidity = response.data.main.humidity;
    //     let temp_min = response.data.main.temp_min;
    //     let temp_max= response.data.main.temp_max;
    //     res.render('../Pages/Welcome',{city:city,temp:temp,press:press,humidity:humidity,temp_min:temp_min,temp_max:temp_max});      
    // })
    // .catch((err)=>{
    //     next(err);
    //});
 res.render('../Pages/Welcome');    
})
module.exports= router;