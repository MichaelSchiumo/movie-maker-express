import React, { useContext, useEffect } from 'react';
import Movies from '../movies/Movies';
import MovieForm from '../movies/MovieForm';
import MovieFilter from '../movies/MovieFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
