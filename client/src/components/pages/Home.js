import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Movies from '../movies/Movies';
import MovieForm from '../movies/MovieForm';
import MovieFilter from '../movies/MovieFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  const { isAdmin } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        {isAdmin ? (
          <a
            className='btn btn-primary btn-block text-center'
            href='/add_movies'
          >
            Add Movies
          </a>
        ) : (
          ''
        )}
      </div>
      <MovieFilter />
      <div className='grid-3'>
        <Movies />
      </div>
    </div>
  );
};

export default Home;
