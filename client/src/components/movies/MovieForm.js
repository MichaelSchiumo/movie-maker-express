import React, { useState, useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';

const MovieForm = () => {
  const movieContext = useContext(MovieContext);

  const { addMovie } = movieContext;

  const [movie, setMovie] = useState({
    img_url: '',
    desc: '',
    id: '',
  });

  const { img_url, desc, title } = movie;

  const onChange = (event) =>
    setMovie({ ...movie, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    movieContext.addMovie(movie);
    setMovie({
      img_url: '',
      title: '',
      desc: '',
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
        placeholder='title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='desc'
        name='desc'
        value={desc}
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
