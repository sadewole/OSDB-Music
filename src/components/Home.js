import React from 'react';
import AlbumsList from './AlbumsList';

const Home = () => {
  return (
    <div className='container'>
      <header className='m-auto my-3'>
        <div className='d-flex justify-content-center align-items-center mt-2'>
          <span className='display-4 mr-3'>
            <i className='fas fa-music fa-1x'></i>
          </span>
          <h1>
            Search for a song <br />{' '}
            <small className='text-muted'>
              Empower your mind with the world’s largest music
            </small>
          </h1>
        </div>
        <div className='my-5 row justify-content-center'>
          <form className='col-7'>
            <div className='form-group d-flex align-items-center border p-2'>
              <span>
                <i className='fas fa-search fa-2x text-muted'></i>
              </span>
              <input
                className='form-control form-control-lg borderless focus-0'
                type='text'
                placeholder='Search'
              />
            </div>
          </form>
        </div>
      </header>
      <main>
        <h1 className='text-center'>Top 10 Albums</h1>
        <AlbumsList />
      </main>
    </div>
  );
};

export default Home;
