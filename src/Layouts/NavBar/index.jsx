import React from 'react'
import NavBarList from './navBarList';
import { navItemLeft,navItemRight } from './navitems';
export default function NavBar() {
  return (
    <React.Fragment>
      <nav className='h-16 bg-tmdbDarkBlue flex text-white font-semibold justify-between items-center max-w-[1300px] mx-auto px-10'>
        <NavBarList items={navItemLeft} />
        <NavBarList items={navItemRight} />
      </nav>
    </React.Fragment>
  )
}
