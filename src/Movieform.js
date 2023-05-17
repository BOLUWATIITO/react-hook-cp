import React, { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const movie = { title, description, posterURL, rating };
    onAddMovie(movie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Poster URL:
        <input
          type="text"
          value={posterURL}
          onChange={(event) => setPosterURL(event.target.value)}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          step="0.1"
          value={rating}
          onChange={(event) => setRating(parseFloat(event.target.value))}
        />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
