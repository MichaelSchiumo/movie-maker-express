import React, { useState, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';

const MovieForm = () => {
  const movieContext = useContext(MovieContext);

  const [movie, setMovie] = useState({
    img_url: '',
    desc: '',
    id: '',
  });

  const { img_url, desc, id } = movie;

  const onChange = (event) =>
    setMovie({ ...movie, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    movieContext.addMovie(movie);
    setMovie({
      img_url: '',
      desc: '',
      id: '',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Movie</h2>
      <input
        type='text'
        placeholder='img_url'
        name='img_url'
        value={img_url}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='desc'
        name='desc'
        value={desc}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='id'
        name='id'
        value={id}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value='Add Movie'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default MovieForm;
