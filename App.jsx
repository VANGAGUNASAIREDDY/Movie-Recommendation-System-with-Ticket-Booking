import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MovieDetailsPage from './components/MovieDetailsPage';
import BookingPage from './components/BookingPage';
import LoginPage from './LoginPage';


const movies = [
  {
    name: 'Salaar',
    releaseDate: '2023-12-22',
    category: 'Tollywood',
    poster: '/images/Salaar.jpg',
    info: 'A gang leader tries to keep a promise made to his dying friend and takes on other criminal gangs.',
    castAndCrew: ['Prabhas', 'Shruti Haasan', 'Prashanth Neel (Director)']
  },
  {
    name: 'RRR',
    releaseDate: '2022-03-25',
    category: 'Tollywood',
    poster: '/images/RRR.jpg',
    info: 'Two legendary revolutionaries and their journey far away from home.',
    castAndCrew: ['N. T. Rama Rao Jr.', 'Ram Charan', 'Alia Bhatt', 'S. S. Rajamouli (Director)']
  },
  {
    name: 'Ala Vaikunthapurramuloo',
    releaseDate: '2020-01-12',
    category: 'Tollywood',
    poster: '/images/Ala.jpg',
    info: 'A man discovers that he was switched at birth with a millionaire’s son.',
    castAndCrew: ['Allu Arjun', 'Pooja Hegde', 'Trivikram Srinivas (Director)']
  },
  {
    name: 'Baahubali: The Beginning',
    releaseDate: '2015-07-10',
    category: 'Tollywood',
    poster: '/images/BahubaliTheBegining.jpg',
    info: 'In ancient India, an adventurous man uncovers his royal heritage.',
    castAndCrew: ['Prabhas', 'Rana Daggubati', 'S. S. Rajamouli (Director)']
  },
  {
    name: 'Master',
    releaseDate: '2021-01-13',
    category: 'Tamil',
    poster: '/images/Master.jpg',
    info: 'An alcoholic professor is sent to a juvenile school, where he clashes with a gangster.',
    castAndCrew: ['Vijay', 'Vijay Sethupathi', 'Lokesh Kanagaraj (Director)']
  },
  {
    name: 'Kabali',
    releaseDate: '2016-07-22',
    category: 'Tamil',
    poster: '/images/Kabali.jpg',
    info: 'A gangster returns from prison and seeks revenge and redemption.',
    castAndCrew: ['Rajinikanth', 'Radhika Apte', 'Pa. Ranjith (Director)']
  },
  {
    name: 'Avengers: Endgame',
    releaseDate: '2019-04-26',
    category: 'Hollywood',
    poster: '/images/EndGame.jpg',
    info: 'The Avengers assemble once more in order to reverse Thanos\' actions.',
    castAndCrew: ['Robert Downey Jr.', 'Chris Evans', 'Joe & Anthony Russo (Directors)']
  },
  {
    name: 'The Dark Knight',
    releaseDate: '2008-07-18',
    category: 'Hollywood',
    poster: '/images/darkknight.jpg',
    info: 'Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.',
    castAndCrew: ['Christian Bale', 'Heath Ledger', 'Christopher Nolan (Director)']
  },
  {
    name: 'Dangal',
    releaseDate: '2016-12-23',
    category: 'Bollywood',
    poster: '/images/Dangal.jpg',
    info: 'A former wrestler trains his daughters to become world-class wrestlers.',
    castAndCrew: ['Aamir Khan', 'Fatima Sana Shaikh', 'Nitesh Tiwari (Director)']
  },
  {
    name: 'Avatar 3',
    releaseDate: '2025-12-20',
    category: 'Hollywood',
    poster: '/images/Avatar3.webp',
    info: 'The saga of Pandora continues with new adventures in the Avatar universe.',
    castAndCrew: ['Sam Worthington', 'Zoe Saldana', 'James Cameron (Director)']
  },
  {
    name: 'Guardians of the Galaxy Vol. 4',
    releaseDate: '2025-05-03',
    category: 'Hollywood',
    poster: '/images/GuardiansVol4.jpg',
    info: 'The Guardians face a new cosmic threat across the galaxy.',
    castAndCrew: ['Chris Pratt', 'Zoe Saldana', 'James Gunn (Director)']
  },
  {
    name: 'Jawan',
    releaseDate: '2025-08-15',
    category: 'Bollywood',
    poster: '/images/Jawan.jpg',
    info: 'A thrilling story of a vigilante seeking justice.',
    castAndCrew: ['Shah Rukh Khan', 'Nayanthara', 'Atlee (Director)']
  },
  {
    name: 'Mission: Impossible 8',
    releaseDate: '2025-07-04',
    category: 'Hollywood',
    poster: '/images/MissionImpossible8.avif',
    info: 'Ethan Hunt returns for another impossible mission.',
    castAndCrew: ['Tom Cruise', 'Rebecca Ferguson', 'Christopher McQuarrie (Director)']
  },
  {
    name: 'The Flash 2',
    releaseDate: '2026-06-23',
    category: 'Hollywood',
    poster: '/images/Flash2.jpg',
    info: 'Barry Allen continues his adventures across the multiverse.',
    castAndCrew: ['Ezra Miller', 'Ben Affleck', 'Andy Muschietti (Director)']
  },
  {
    name: 'Furious 11',
    releaseDate: '2025-11-07',
    category: 'Hollywood',
    poster: '/images/Furious11.jpg',
    info: 'Dom and his crew face their most dangerous threat yet.',
    castAndCrew: ['Vin Diesel', 'Michelle Rodriguez', 'Louis Leterrier (Director)']
  },
  {
    name: 'Dune: Part Two',
    releaseDate: '2025-03-14',
    category: 'Hollywood',
    poster: '/images/DunePart2.jpg',
    info: 'Paul Atreides unites the Fremen to rise against House Harkonnen.',
    castAndCrew: ['Timothée Chalamet', 'Zendaya', 'Denis Villeneuve (Director)']
  },
  {
    name: 'Indian 2',
    releaseDate: '2025-11-05',
    category: 'Tamil',
    poster: '/images/Indian2.jpg',
    info: 'Senapathy returns to fight against corruption in modern India.',
    castAndCrew: ['Kamal Haasan', 'Rakul Preet Singh', 'S. Shankar (Director)']
  },
  {
    name: 'Pushpa 2: The Rule',
    releaseDate: '2025-08-15',
    category: 'Tollywood',
    poster: '/images/Pushpa2.jpg',
    info: 'The rise of Pushpa continues as he battles enemies to assert dominance.',
    castAndCrew: ['Allu Arjun', 'Rashmika Mandanna', 'Sukumar (Director)']
  },
];


function HomePage() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSortChange = () => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

  const filteredMovies = categoryFilter === 'All'
    ? movies
    : movies.filter(m => m.category === categoryFilter);

  const searchFilteredMovies = filteredMovies.filter(movie =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedMovies = searchFilteredMovies.sort((a, b) => {
    return sortOrder === 'asc'
      ? new Date(a.releaseDate) - new Date(b.releaseDate)
      : new Date(b.releaseDate) - new Date(a.releaseDate);
  });

  return (
    <div className="App" style={{ padding: '20px' }}>
      {/* Filter + Sort */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <button onClick={handleSortChange}>Sort by Date</button>
          {['All', 'Tollywood', 'Tamil', 'Bollywood', 'Hollywood'].map(cat => (
            <button key={cat} onClick={() => setCategoryFilter(cat)}>{cat}</button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '5px', width: '200px' }}
        />
      </div>

      {/* Movies Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {sortedMovies.map((movie, index) => (
          <div
            key={index}
            style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}
          >
            <img
              src={movie.poster}
              alt={movie.name}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <h3>{movie.name}</h3>
            <p><strong>Release:</strong> {movie.releaseDate}</p>
            <p><strong>Category:</strong> {movie.category}</p>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
              <button onClick={() => navigate(`/booking/${movie.name}`, { state: { movie } })}>Book</button>
              <button onClick={() => navigate(`/movie/${movie.name}`, { state: { movie } })}>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movie/:name" element={<MovieDetailsPage movies={movies} />} />
        <Route path="/booking/:name" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}
