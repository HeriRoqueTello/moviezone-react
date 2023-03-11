
import { useEffect, useState } from 'react';
import { Movie } from './Movie';

const key = import.meta.env.VITE_MOVIE_KEY;
const url = 'https://api.themoviedb.org/3';


export const TopRatedMovies = ({loading, setLoading}) => {

  const [topRatedMovies, setTopRatedMovies] = useState({})

  useEffect(() => {
    async function getData(){
      const res = await fetch(`${url}/movie/top_rated?api_key=${key}&language=en-US`);
	    const { results } = await res.json();
      setTopRatedMovies(results)
      setLoading(true)
    }
    getData()
  }, [])


  return (
    <>
      <h2>Top Rated movies:</h2>
      <div className='w-auto h-76 items-center overflow-x-auto overscroll-x-contain overflow-y-hidden flex space-x-4 md:scrollbar md:scrollbar-thumb-blue-700 md:scrollbar-track-blue-300 md:overflow-x-scroll dark:md:scrollbar-thumb-blue-100 dark:md:scrollbar-track-gray-700 md:scrollbar-h-2'>
        {
          loading && <Movie movies={topRatedMovies} />
        }
      </div>
    </>
  )
}
