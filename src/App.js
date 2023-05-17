import React, { useState } from 'react';
import MovieList from './Movielist';
import Filter from './Filter';
import MovieForm from './Movieform';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4.5,
    },
    {
      title: 'Movie 2',
      description: 'Description for Movie 2',
      posterURL: 'https://via.placeholder.com/150',
      rating: 3.8,
    },
    
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const filterMovies = (title, rating) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
      );
    });
    setFilteredMovies(filtered);
  };

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
    filterMovies('', 0); 
  };

  return (
    <div>
      <h1>Movie App</h1>
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
      <h2>Add New Movie</h2>
      <MovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default App;
