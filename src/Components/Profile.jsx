import { useEffect, useState } from "react"
import axios from "axios";

export default function Trending() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=da9c4514e37d4cd238d6e0205a120ed9").then(response =>(
      setMovies(response.data.results)
    )).catch(err=>{console.log(err)})
  }, [])

  const getPosterURL =(posterpath) => {
    return `https://image.tmdb.org/t/p/w500${posterpath}`
  }

  return (
    <div>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
          <div className="movieImage">
            {movies.map((movie, index) => {
              return (
                <div md={3} className="movieWrapper movieImage" id="trending" key={index} {...movie}>
                  <card className="movieImage">
                    <img src={getPosterURL(movie.poster_path)} alt="test" className="images" />
                    <div className="bg-dark">
                      <div className="p-1 m-1 text-white">
                        <h3 className="text-center">{movie.title}</h3>
                        <p className="text-left">
                          {movie.overview}
                        </p>
                        <p className="text-left">
                          {movie.first_air_date}
                        </p>
                      </div>
                    </div>
                  </card>
                </div>
              )
            })}
          </div>
    </div>
  )
}