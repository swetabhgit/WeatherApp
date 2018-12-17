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

router.get('/weather/:state',function(req,res,next){
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.state},IN&appid=${config.apiKey}`;
    axios.get(url).then((response)=>{
            console.log(response.data);
            let city= response.data.name;
            console.log(city)
            let temp = response.data.main.temp;
            let press = response.data.main.pressure;
            let humidity = response.data.main.humidity;
            let temp_min = response.data.main.temp_min;
            let temp_max= response.data.main.temp_max;
            let status = response.data.weather[0].main;
            let description = response.data.weather[0].description;
            let icon = response.data.weather[0].icon;
            console.log(icon);
            res.send({city:city,temp:temp,press:press,humidity:humidity,temp_min:temp_min,temp_max:temp_max,status:status,description:description,icon:icon});      
        })
        .catch((err)=>{
            next(err);
        });
})
module.exports= router;