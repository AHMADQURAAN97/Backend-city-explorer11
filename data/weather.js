
const axios = require("axios");






 async function getWeatherHandler (request,response){
let searchQuery = request.query.searchQuery;
let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&city=${searchQuery}`

try {
    axios.get(url).then((weatherResult)=> {
    let weatherArray = weatherResult.data.data.map((item)=>{

        return new country (item);
    
    });
    response.send(weatherArray)
});
} catch(error) {
    console.log('error from axios',error)
    response.send(error)

}
}

class country  {
    constructor(countryData){

        this.description = countryData.weather.description;
        this.date = countryData.valid_date;
       
    }
}

module.exports=getWeatherHandler;