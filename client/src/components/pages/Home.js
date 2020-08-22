import React from 'react';
import Movies from '../movies/Movies';
import MovieForm from '../movies/MovieForm';
import MovieFilter from '../movies/MovieFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <MovieForm />
      </div>
      <div>
        <MovieFilter />
        <Movies />
      </div>
    </div>
  );
};

export default Home;
