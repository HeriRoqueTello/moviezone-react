import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TopRatedMovies } from './components/TopRatedMovies';
import { PopularMovies } from './components/PopularMovies';
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import { HomePage } from './routes/HomePage';

function App() {

  

  return (
    <>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />

        <Route path='/:category' element={<p>Categoria</p>} />

        <Route path='/search/name=:keyword' element={<p>CategoriaPage</p>} />

        <Route path='/:category/:id' element={<p>Detalles</p>} />

        <Route path="/*" element={<p>Not found 404</p>} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
