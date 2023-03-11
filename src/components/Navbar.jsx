
import { useState } from "react";
import { HiOutlineMenuAlt1 as MenuIcon } from "react-icons/hi";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState(false)
  function handleMenu() {
    if(!menu){
      setMenu(true);
      return;
    }
    setMenu(false);
  }
  return (
    <nav className='w-full h-16 flex flex-row gap-4 text-xl bg-black sticky top-0 z-50 justify-around items-center'>
      <MenuIcon onClick={handleMenu} className="text-3xl lg:hidden"/>
      <div>
        <Link to={'/'}>MoviePlay</Link>
      </div>
      {
        menu && (
        <div className='absolute top-12 left-0 lg:flex bg-black p-4'>
          <ul className="space-y-2 text-xl">
            <li><NavLink to={'/popularmovies'}>Popular</NavLink></li>
            <li><NavLink to={'/ratingmovies'}>Rating</NavLink></li>
            <li><NavLink to={'/newsmovies'}>Estrenos</NavLink></li>
            <li><NavLink to={'/genremovies'}>Categorias</NavLink></li>
          </ul>
        </div>
        )
      }
      
      <div className='hidden lg:flex'>
        <ul className="flex flex-row gap-4">
          <li><NavLink to={'/popularmovies'}>Popular</NavLink></li>
          <li><NavLink to={'/ratingmovies'}>Rating</NavLink></li>
          <li><NavLink to={'/newsmovies'}>Estrenos</NavLink></li>
          <li><NavLink to={'/genremovies'}>Categorias</NavLink></li>
        </ul>
      </div>
      <div className="flex gap-2">
        <button>
          <SearchIcon className="text-xl text-white rounded"/>
        </button>
        <input className="border-none rounded p-2 text-indigo-900 text-sm" type="search" name="search" id="" placeholder='Buscar...'/>
      </div>
    </nav>
  )
}
