const axios = require("axios");

let inMemory = {};

async function getMoveHandler(request,response){
    let searchQuery = request.query.searchQuery;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchQuery}&include_adult=false`


    if (inMemory[searchQuery] !== undefined) {
        console.log('cache hit - Movies')
        response.send(inMemory[searchQuery])
    } else {
        console.log("cache miss - Movies");
        try {
            axios.get(url).then((weatherResult)=> {
            let moviesArray = weatherResult.data.results.map((item) => {
        
                return new Movies(item);
            });
            inMemory[searchQuery]=moviesArray
            response.send(moviesArray)
        });
    }catch(error) {
            console.log('error from axios',error)
            response.send(error)
        }
    }
    }

    

class Movies {
    constructor(movieData){

        this.title = movieData.title;
        this.poster = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;

    }
}



module.exports=getMoveHandler;