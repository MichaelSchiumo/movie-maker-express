import React, { useState, useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';

const MovieForm = () => {
  const movieContext = useContext(MovieContext);

  const { addMovie } = movieContext;

  const [movie, setMovie] = useState({
    img_url: '',
    desc: '',
    title: '',
  });

  const { img_url, desc, title } = movie;

  const onChange = (event) =>
    setMovie({ ...movie, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    addMovie(movie);
    setMovie({
      img_url: '',
      title: '',
      desc: '',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 className='text-center underline'>Add Movie</h1>
      <input
        type='text'
        placeholder='Movie Poster URL'
        name='img_url'
        value={img_url}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Synopsis'
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
