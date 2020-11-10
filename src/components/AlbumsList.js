import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const AlbumsList = () => {
  const { albums } = useContext(GlobalContext);
  console.log(albums);
  return (
    <div className='row'>
      {albums &&
        albums.map((album) => (
          <div
            key={album.id}
            className='card border-secondary mb-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0'
          >
            <img
              src={album.image}
              alt=''
              class='d-block user-select-none'
              width='100%'
              height='200'
            />
            <div className='card-body'>
              <h4 className='card-title'>{album.name}</h4>
              <p className='card-text'>
                Release year: <strong>{album.year}</strong>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AlbumsList;
