import React, { useState } from 'react'
import { PopularMovies } from '../components/PopularMovies'

export const HomePage = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <div className='w-full p-8 space-y-4'>
          <PopularMovies loading={loading} setLoading={setLoading} />
          {/* <TopRatedMovies loading={loading} setLoading={setLoading} /> */}
      </div>
    </>
  )
}
