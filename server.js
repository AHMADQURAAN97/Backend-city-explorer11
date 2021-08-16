'use strict';

const express = require ('express');
const weatherData = require('./data/weather.json')
const server = express();
const PORT = 3001;   

// localhost:3001/weather?cName=seattle
server.get('/weather',(request,response)=> {
  
console.log(request.query);
let gName = request.query.cName;

let weatherInfo = weatherData.find(item => {


if (item.city_name.toLowerCase() === gName.toLowerCase()){

return item;

}

})
response.send(weatherInfo);
})


server.get('*',(request,response)=>{
    response.status(404).send('not found')
})







// if (item.city_name === 'Seattle' || item.city_name === 'Paris' || item.city_name === 'Amman'){

//     return item;
    
//     }













server.listen (PORT,()=> {
console.log(`listning on PORT ${PORT}`)
})