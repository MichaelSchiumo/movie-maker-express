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
    <div>
      <MovieFilter />
      <Movies />
    </div>
  );
};

export default Home;
