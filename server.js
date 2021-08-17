'use strict';

const express = require ('express');
require('dotenv').config(); 
const cors = require ('cors');
const server = express();
const PORT=process.env.PORT; 
server.use(cors());
// const axios = require("axios");
const weatherData = require('./data/weather.json')


// class Forecast {
//     constructor(item) {
    
//         this.date = item.datetime;
//         this.description = item.weatherData.description;
    
//     }
//     }


// http://localhost:3001/weather?cName=seattle
server.get('/weather',(request,response)=> {
  
console.log(request.query);
let gName = request.query.cName;
let cites = weatherData.find(item => {
if (item.city_name.toLowerCase() === gName.toLowerCase()){

return item;

}})
// try {

//     let ForecastArr = cites.data.map((item) => {
    

//     return new Forecast(item);
// })
// response.send(ForecastArr)
// } catch{
//     response.send("NOT FOUND:Error We can't find your data")
// }
response.send(cites)
});


server.get('*',(request,response)=>{
    response.status(404).send('not found')
})




server.listen (PORT,()=> {
console.log(`listning on PORT ${PORT}`)
})


