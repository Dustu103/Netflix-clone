const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGMzMDY2NmI4NWY4YzY3Y2UxODZjNzk5OGQ5OTY0NSIsInN1YiI6IjY1OWQxNWRhZjg1OTU4MDBlZjNlYWIwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qwzm81oShbXfiT9VqpCk5Tdx96H0Hx5FQhmg5Itsyc0'
    }
  };


const auth='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGMzMDY2NmI4NWY4YzY3Y2UxODZjNzk5OGQ5OTY0NSIsInN1YiI6IjY1OWQxNWRhZjg1OTU4MDBlZjNlYWIwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qwzm81oShbXfiT9VqpCk5Tdx96H0Hx5FQhmg5Itsyc0'

const requrl = {
popular :'https://api.themoviedb.org/3/movie/popular',
 top_rated:'https://api.themoviedb.org/3/movie/top_rated',
upcoming:'https://api.themoviedb.org/3/movie/upcoming',
nowplaying:'https://api.themoviedb.org/3/trending/movie/day'
}

exports.requrl =requrl
exports.options=options
exports.auth=auth