import React from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetailsPage = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) return <div style={{ padding: '20px' }}>Movie not found.</div>;

  return (
    <div style={{ padding: '40px', backgroundColor: 'black', minHeight: '100vh' }}>
      <h1>{movie.name}</h1>
      <img
        src={movie.poster}
        alt={movie.name}
        style={{ width: '300px', height: '450px', objectFit: 'cover', borderRadius: '10px' }}
      />
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      <p><strong>Category:</strong> {movie.category}</p>
      <p><strong>Description:</strong> {movie.info}</p>
      <p><strong>Cast & Crew:</strong></p>
      <ul>
        {movie.castAndCrew.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetailsPage;
