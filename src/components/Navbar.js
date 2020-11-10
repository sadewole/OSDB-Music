import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        OSDB Music
      </a>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item active'>
          <a
            href='https://github.com/sadewole/OSDB-Music'
            className='text-white'
          >
            <i class='fab fa-github-square fa-2x'></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
