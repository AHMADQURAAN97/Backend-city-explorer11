const axios = require("axios");

async function getMoveHandler(request,response){
    let searchQuery = request.query.searchQuery;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchQuery}&include_adult=false`
    try {
        axios.get(url).then((weatherResult)=> {
        let moviesArray = weatherResult.data.results.map((item) => {
    
            return new Movies(item);
        });
    
        response.send(moviesArray)
    });
}catch(error) {
        console.log('error from axios',error)
        response.send(error)
    
    }
}

class Movies {
    constructor(movieData){

        this.title = movieData.title;
        this.poster = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;

    }
}



module.exports=getMoveHandler;