import React from 'react'

export const Movie = ({ movies }) => {
  console.log(movies);
  return (
    <>
      {
        movies.map(movie => (
          <div className='movie' key={movie.id}>
            {/* <p>{movie.title}</p> */}
            <img className='' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
        ))
      }
    </>
  )
}
