import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SeatSelectionPage = () => {
  const { state } = useLocation();
  const { movie, cinema, timing, location } = state || {};

  const seats = Array.from({ length: 30 }, (_, i) => `Seat ${i + 1}`);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  if (!movie || !cinema || !timing) return <div>Missing booking information</div>;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${movie.poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '40px',
        position: 'relative',
      }}
    >
      {/* Dark Overlay for readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2>Select Seats for {movie.name}</h2>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Cinema:</strong> {cinema}</p>
        <p><strong>Time:</strong> {timing}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '10px',
          marginTop: '30px',
        }}>
          {seats.map((seat) => (
            <div
              key={seat}
              onClick={() => toggleSeat(seat)}
              style={{
                padding: '10px',
                textAlign: 'center',
                backgroundColor: selectedSeats.includes(seat) ? '#28a745' : '#ccc',
                borderRadius: '5px',
                cursor: 'pointer',
                color: 'black',
              }}
            >
              {seat}
            </div>
          ))}
        </div>

        {selectedSeats.length > 0 && (
          <div style={{ marginTop: '30px' }}>
            <h3>Selected Seats:</h3>
            <p>{selectedSeats.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatSelectionPage;
