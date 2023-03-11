import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

const key = import.meta.env.VITE_MOVIE_KEY;
const url = 'https://api.themoviedb.org/3';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const PopularMovies = ({loading, setLoading}) => {

  const [popularMovies, setPopularMovies] = useState([])
  // const [genresMovie, setGenresMovie] = useState({})

  // function getGenreById(ids){
  //   const genresThisMovie = {};
  //   console.log(ids);
  //   console.log(genresMovie);
  //   ids.forEach((genreId) => {
  //     const objetoEncontrado = genresMovie.find((obj) => obj.id === genreId)
  //     console.log(objetoEncontrado);
  //     if(objetoEncontrado){
  //       genresThisMovie[genreId] = { ...genresThisMovie,...objetoEncontrado}
  //     }
  //     console.log(genresThisMovie);
  //   })
  // }

  useEffect(() => {
      fetch(`${url}/movie/popular?api_key=${key}&language=en-US&limit=10`)
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))

      setLoading(true)
  }, [])


  return (
    <>
      {/* <h2>Top Rated movies:</h2> */}
      <Carousel infiniteLoop={true} autoPlay={true} stopOnHover={false} swipeable={true} emulateTouch={true} transitionTime={3} showStatus={false} showThumbs={false} height={'100px'}
>
        {
          loading && (
            popularMovies.map(movie => (
              <div>
                <img className='rounded' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                <p className="legend">{ movie && movie.title}</p>
              </div>
            ))
          )
        }
      </Carousel>
    </>
  )
}