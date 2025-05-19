import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define the locationData object
const locationData = {
  USA: {
    California: {
      'Los Angeles': [
        { name: 'Cinema LA1', timings: ['10:00 AM', '2:00 PM'] },
        { name: 'Cinema LA2', timings: ['1:00 PM', '4:00 PM'] },
      ],
      'Sacramento': [
        { name: 'Cinema SAC1', timings: ['11:00 AM', '4:30 PM'] },
      ],
      'San Diego': [
        { name: 'Cinema SD1', timings: ['10:30 AM', '1:30 PM'] },
      ],
      'San Francisco': [
        { name: 'Cinema SF1', timings: ['12:00 PM', '5:00 PM'] },
        { name: 'Cinema SF2', timings: ['3:00 PM', '7:00 PM'] },
      ],
    },
    Florida: {
      'Miami': [
        { name: 'Cinema MIA1', timings: ['11:00 AM', '5:00 PM'] },
        { name: 'Cinema MIA2', timings: ['1:30 PM', '7:30 PM'] },
      ],
      Orlando: [
        { name: 'Cinema ORL1', timings: ['9:30 AM', '12:30 PM'] },
      ],
      Tampa: [
        { name: 'Cinema TPA1', timings: ['10:30 AM', '3:30 PM'] },
      ],
    },
    Illinois: {
      Chicago: [
        { name: 'Cinema CHI1', timings: ['9:30 AM', '2:30 PM'] },
        { name: 'Cinema CHI2', timings: ['12:30 PM', '5:30 PM'] },
      ],
      Springfield: [
        { name: 'Cinema SPR1', timings: ['10:00 AM', '1:00 PM'] },
      ],
    },
    Nevada: {
      LasVegas: [
        { name: 'Cinema LV1', timings: ['11:00 AM', '2:00 PM'] },
        { name: 'Cinema LV2', timings: ['1:30 PM', '4:30 PM'] },
      ],
    },
    NewYork: {
      'New York City': [
        { name: 'Cinema NYC1', timings: ['9:00 AM', '12:00 PM'] },
        { name: 'Cinema NYC2', timings: ['3:00 PM', '6:00 PM'] },
      ],
      Albany: [
        { name: 'Cinema ALB1', timings: ['1:30 PM', '4:30 PM'] },
      ],
      Buffalo: [
        { name: 'Cinema BUF1', timings: ['11:00 AM', '2:00 PM'] },
      ],
    },
    Texas: {
      Austin: [
        { name: 'Cinema AUS1', timings: ['10:45 AM', '3:15 PM'] },
      ],
      Dallas: [
        { name: 'Cinema DAL1', timings: ['11:30 AM', '4:00 PM'] },
      ],
      Houston: [
        { name: 'Cinema HTX1', timings: ['10:30 AM', '2:30 PM'] },
        { name: 'Cinema HTX2', timings: ['12:00 PM', '5:00 PM'] },
      ],
    },
  },
  Canada: {
    BritishColumbia: {
      Vancouver: [
        { name: 'Vancouver IMAX', timings: ['1:30 PM', '8:00 PM'] },
        { name: 'Vancouver Cinema', timings: ['10:30 AM', '4:30 PM'] },
      ],
    },
    Ontario: {
      Ottawa: [
        { name: 'Ottawa Cinema', timings: ['9:30 AM', '1:30 PM'] },
      ],
      Toronto: [
        { name: 'Scotiabank Theatre', timings: ['10:00 AM', '5:00 PM'] },
        { name: 'Royal Cinema', timings: ['12:00 PM', '3:00 PM'] },
      ],
    },
    Quebec: {
      Montreal: [
        { name: 'Cinema Montreal', timings: ['12:00 PM', '6:00 PM'] },
        { name: 'Cineplex Montreal', timings: ['3:00 PM', '9:00 PM'] },
      ],
      QuebecCity: [
        { name: 'Quebec City Cinema', timings: ['11:00 AM', '5:00 PM'] },
      ],
    },
  },
  Australia: {
    NewSouthWales: {
      Sydney: [
        { name: 'Event Cinemas', timings: ['10:00 AM', '3:30 PM'] },
        { name: 'Reading Cinemas', timings: ['1:00 PM', '6:30 PM'] },
      ],
    },
    Queensland: {
      Brisbane: [
        { name: 'Brisbane IMAX', timings: ['2:00 PM', '6:00 PM'] },
        { name: 'Cinema Brisbane', timings: ['1:30 PM', '5:30 PM'] },
      ],
    },
    Victoria: {
      Melbourne: [
        { name: 'Village Cinemas', timings: ['12:00 PM', '7:00 PM'] },
        { name: 'Hoyts Melbourne', timings: ['10:30 AM', '4:00 PM'] },
      ],
    },
  },
  India: {
    AndhraPradesh: {
      Visakhapatnam: [
        { name: 'INOX Vizag', timings: ['10:00 AM', '6:00 PM'] },
        { name: 'PVR Vizag', timings: ['11:30 AM', '5:30 PM'] },
      ],
      Vijayawada: [
        { name: 'Cinepolis Vijayawada', timings: ['12:00 PM', '8:00 PM'] },
        { name: 'Cineplex Vijayawada', timings: ['2:00 PM', '7:30 PM'] },
      ],
      Tirupati: [
        { name: 'INOX Tirupati', timings: ['10:30 AM', '6:00 PM'] },
        { name: 'PVR Tirupati', timings: ['12:30 PM', '8:00 PM'] },
      ],
      Kakinada: [
        { name: 'Kakinada Cineplex', timings: ['11:00 AM', '5:00 PM'] },
      ],
      Rajahmundry: [
        { name: 'Rajahmundry Cinema', timings: ['1:00 PM', '6:30 PM'] },
      ],
      Guntur: [
        { name: 'Cine Guntur', timings: ['2:00 PM', '7:30 PM'] },
      ],
      Nellore: [
        { name: 'Nellore Cinemas', timings: ['12:00 PM', '5:00 PM'] },
      ],
      Anantapur: [
        { name: 'Anantapur Multiplex', timings: ['10:30 AM', '4:30 PM'] },
      ],
      Chittoor: [
        { name: 'Chittoor Movieplex', timings: ['11:00 AM', '6:00 PM'] },
      ],
      Eluru: [
        { name: 'Eluru Cinema', timings: ['1:00 PM', '7:00 PM'] },
      ],
    },
    ArunachalPradesh: {
      Itanagar: [
        { name: 'Itanagar Cineplex', timings: ['11:00 AM', '4:00 PM'] },
        { name: 'Itanagar Multiplex', timings: ['1:00 PM', '6:30 PM'] },
      ],
      Naharlagun: [
        { name: 'Naharlagun Cinema', timings: ['10:30 AM', '5:30 PM'] },
      ],
      Ziro: [
        { name: 'Ziro Movie Theater', timings: ['12:00 PM', '6:00 PM'] },
      ],
      Tawang: [
        { name: 'Tawang Cineplex', timings: ['11:30 AM', '5:30 PM'] },
      ],
      Pasighat: [
        { name: 'Pasighat Cinema', timings: ['1:00 PM', '7:00 PM'] },
      ],
      Seppa: [
        { name: 'Seppa Cinema Hall', timings: ['9:30 AM', '3:30 PM'] },
      ],
      Bomdila: [
        { name: 'Bomdila Cinemas', timings: ['10:00 AM', '4:00 PM'] },
      ],
      Tezpur: [
        { name: 'Tezpur Theater', timings: ['2:00 PM', '7:30 PM'] },
      ],
      Roing: [
        { name: 'Roing Movieplex', timings: ['12:30 PM', '5:00 PM'] },
      ],
      Aalo: [
        { name: 'Aalo Cinema', timings: ['10:30 AM', '6:00 PM'] },
      ],
    },
    Assam: {
      Guwahati: [
        { name: 'PVR Guwahati', timings: ['12:00 PM', '7:00 PM'] },
        { name: 'INOX Guwahati', timings: ['1:00 PM', '9:00 PM'] },
      ],
      Dibrugarh: [
        { name: 'Dibrugarh Cinema', timings: ['10:30 AM', '4:30 PM'] },
      ],
      Jorhat: [
        { name: 'Jorhat Movie Theater', timings: ['12:00 PM', '6:00 PM'] },
      ],
      Silchar: [
        { name: 'Silchar Cineplex', timings: ['11:00 AM', '5:30 PM'] },
      ],
      Nagaon: [
        { name: 'Nagaon Cinemas', timings: ['2:00 PM', '7:00 PM'] },
      ],
      Tezpur: [
        { name: 'Tezpur Cinema', timings: ['10:30 AM', '6:00 PM'] },
      ],
      Bongaigaon: [
        { name: 'Bongaigaon Cinema', timings: ['11:30 AM', '5:00 PM'] },
      ],
      Barpeta: [
        { name: 'Barpeta Movieplex', timings: ['12:30 PM', '7:00 PM'] },
      ],
      Karimganj: [
        { name: 'Karimganj Cinema', timings: ['1:00 PM', '6:00 PM'] },
      ],
      Golaghat: [
        { name: 'Golaghat Cineplex', timings: ['11:00 AM', '5:00 PM'] },
      ],
    },
    Bihar: {
      Patna: [
        { name: 'Cinepolis Patna', timings: ['10:30 AM', '5:00 PM'] },
        { name: 'PVR Patna', timings: ['1:00 PM', '9:00 PM'] },
      ],
      Bhagalpur: [
        { name: 'Bhagalpur Cinemas', timings: ['12:00 PM', '6:00 PM'] },
      ],
      Muzaffarpur: [
        { name: 'Muzaffarpur Movie Theater', timings: ['2:00 PM', '7:00 PM'] },
      ],
      Gaya: [
        { name: 'Gaya Cineplex', timings: ['10:00 AM', '5:00 PM'] },
      ],
      Munger: [
        { name: 'Munger Cinema', timings: ['11:30 AM', '4:30 PM'] },
      ],
      Patliputra: [
        { name: 'Patliputra Movieplex', timings: ['12:00 PM', '6:30 PM'] },
      ],
      Darbhanga: [
        { name: 'Darbhanga Cineplex', timings: ['1:00 PM', '5:30 PM'] },
      ],
      Hajipur: [
        { name: 'Hajipur Cinema', timings: ['11:00 AM', '7:00 PM'] },
      ],
      Samastipur: [
        { name: 'Samastipur Cinemas', timings: ['9:30 AM', '3:00 PM'] },
      ],
      Bhawanipur: [
        { name: 'Bhawanipur Theater', timings: ['2:00 PM', '6:30 PM'] },
      ],
    },
    Chhattisgarh: {
      Raipur: [
        { name: 'INOX Raipur', timings: ['1:00 PM', '6:30 PM'] },
        { name: 'PVR Raipur', timings: ['11:30 AM', '8:00 PM'] },
      ],
      Bilaspur: [
        { name: 'Bilaspur Cinema', timings: ['12:00 PM', '5:30 PM'] },
      ],
      Durg: [
        { name: 'Durg Cineplex', timings: ['2:00 PM', '7:00 PM'] },
      ],
      Korba: [
        { name: 'Korba Cinema Hall', timings: ['10:30 AM', '4:30 PM'] },
      ],
      Raigarh: [
        { name: 'Raigarh Cinemas', timings: ['1:00 PM', '5:00 PM'] },
      ],
      Jagdalpur: [
        { name: 'Jagdalpur Movieplex', timings: ['12:30 PM', '6:00 PM'] },
      ],
      Rajnandgaon: [
        { name: 'Rajnandgaon Cinema', timings: ['1:30 PM', '7:00 PM'] },
      ],
      
      Kawardha: [
        { name: 'Kawardha Theater', timings: ['12:00 PM', '6:30 PM'] },
      ],
      Ambikapur: [
        { name: 'Ambikapur Cineplex', timings: ['1:00 PM', '7:00 PM'] },
      ],
    },
    Goa: {
      Panaji: [
        { name: 'Cine Panaji', timings: ['11:00 AM', '3:00 PM'] },
        { name: 'PVR Panaji', timings: ['2:00 PM', '7:00 PM'] },
      ],
      Margao: [
        { name: 'Margao Cinema', timings: ['10:30 AM', '4:00 PM'] },
      ],
      Vasco: [
        { name: 'Vasco Cineplex', timings: ['12:00 PM', '6:00 PM'] },
      ],
      Mapusa: [
        { name: 'Mapusa Movie Theater', timings: ['11:30 AM', '5:30 PM'] },
      ],
      Quepem: [
        { name: 'Quepem Cinema', timings: ['1:00 PM', '7:00 PM'] },
      ],
      Ponda: [
        { name: 'Ponda Multiplex', timings: ['10:00 AM', '4:30 PM'] },
      ],
      Bicholim: [
        { name: 'Bicholim Cinemas', timings: ['12:30 PM', '6:00 PM'] },
      ],
      Canacona: [
        { name: 'Canacona Movie Theater', timings: ['2:00 PM', '7:00 PM'] },
      ],
      Cuncolim: [
        { name: 'Cuncolim Cinema', timings: ['10:30 AM', '5:00 PM'] },
      ],
      Carambolim: [
        { name: 'Carambolim Cinemas', timings: ['1:00 PM', '6:30 PM'] },
      ],
    },
    Gujarat: {
      Ahmedabad: [
        { name: 'PVR Ahmedabad', timings: ['10:00 AM', '8:00 PM'] },
        { name: 'INOX Ahmedabad', timings: ['12:00 PM', '7:00 PM'] },
      ],
      Surat: [
        { name: 'Cinepolis Surat', timings: ['11:30 AM', '5:30 PM'] },
      ],
      Vadodara: [
        { name: 'Vadodara Cineplex', timings: ['12:00 PM', '6:00 PM'] },
      ],
      Rajkot: [
        { name: 'Rajkot Movie Theater', timings: ['1:00 PM', '7:30 PM'] },
      ],
      Bhavnagar: [
        { name: 'Bhavnagar Cinemas', timings: ['11:00 AM', '4:30 PM'] },
      ],
      Jamnagar: [
        { name: 'Jamnagar Cineplex', timings: ['12:30 PM', '6:30 PM'] },
      ],
      Gandhinagar: [
        { name: 'Gandhinagar Cinema', timings: ['1:00 PM', '7:00 PM'] },
      ],
      Anand: [
        { name: 'Anand Movie Theater', timings: ['10:30 AM', '5:00 PM'] },
      ],
      Valsad: [
        { name: 'Valsad Multiplex', timings: ['11:30 AM', '6:00 PM'] },
      ],
      Bharuch: [
        { name: 'Bharuch Cinemas', timings: ['12:00 PM', '6:30 PM'] },
      ],
    },
    Haryana: {
      Gurgaon: [
        { name: 'Ambience Mall Cinema', timings: ['12:00 PM', '6:00 PM'] },
        { name: 'PVR Gurgaon', timings: ['2:00 PM', '8:00 PM'] },
      ],
      Faridabad: [
        { name: 'Faridabad Cinemas', timings: ['11:30 AM', '5:30 PM'] },
      ],
      Karnal: [
        { name: 'Karnal Movieplex', timings: ['12:00 PM', '6:00 PM'] },
      ],
      Panipat: [
        { name: 'Panipat Cinema', timings: ['10:30 AM', '4:30 PM'] },
      ],
      Hisar: [
        { name: 'Hisar Cineplex', timings: ['1:00 PM', '7:00 PM'] },
      ],
      Rohtak: [
        { name: 'Rohtak Movie Theater', timings: ['11:00 AM', '6:00 PM'] },
      ],
      Ambala: [
        { name: 'Ambala Cinemas', timings: ['2:00 PM', '7:00 PM'] },
      ],
      Sirsa: [
        { name: 'Sirsa Cinema', timings: ['12:00 PM', '6:00 PM'] },
      ],
      Yamunanagar: [
        { name: 'Yamunanagar Movie Theater', timings: ['10:30 AM', '5:00 PM'] },
      ],
      Sonipat: [
        { name: 'Sonipat Cineplex', timings: ['1:00 PM', '7:00 PM'] },
      ],
    },
  },
  
  Mexico: {
    CDMX: {
      MexicoCity: [
        { name: 'Cinemex Mexico City', timings: ['11:00 AM', '4:00 PM'] },
        { name: 'Cinepolis Mexico City', timings: ['12:30 PM', '5:30 PM'] },
      ],
    },
    Jalisco: {
      Guadalajara: [
        { name: 'Cinepolis Guadalajara', timings: ['9:30 AM', '6:30 PM'] },
        { name: 'Cinemark Guadalajara', timings: ['10:00 AM', '2:00 PM'] },
      ],
    },
  },
  SouthAfrica: {
    Gauteng: {
      Johannesburg: [
        { name: 'Cineworld Johannesburg', timings: ['11:00 AM', '5:00 PM'] },
        { name: 'Ster-Kinekor Johannesburg', timings: ['2:00 PM', '6:30 PM'] },
      ],
    },
    WesternCape: {
      CapeTown: [
        { name: 'Ster-Kinekor Cape Town', timings: ['9:30 AM', '6:30 PM'] },
        { name: 'Cineplex Cape Town', timings: ['11:00 AM', '4:00 PM'] },
      ],
    },
  },
  UK: {
    England: {
      London: [
        { name: 'London Central', timings: ['10:30 AM', '3:30 PM'] },
        { name: 'Curzon Soho', timings: ['12:30 PM', '6:00 PM'] },
      ],
      Manchester: [
        { name: 'Manchester Cinema', timings: ['11:00 AM', '5:00 PM'] },
      ],
    },
    Scotland: {
      Edinburgh: [
        { name: 'Edinburgh IMAX', timings: ['12:00 PM', '6:30 PM'] },
        { name: 'Cineworld Edinburgh', timings: ['2:00 PM', '7:30 PM'] },
      ],
    },
  },
};


const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  if (!movie) return <div>Movie not found</div>;

  const { name } = movie;

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedTiming, setSelectedTiming] = useState('');

  const getStates = () => selectedCountry ? Object.keys(locationData[selectedCountry]) : [];
  const getCities = () => selectedState ? Object.keys(locationData[selectedCountry][selectedState]) : [];
  const getCinemas = () => selectedCity ? locationData[selectedCountry][selectedState][selectedCity] : [];

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: 'white', padding: '40px' }}>
      <h1>Book Tickets for <em>{name}</em></h1>

      {/* Country Select */}
      <div style={{ marginBottom: '20px' }}>
        <label>Select Country: </label>
        <select value={selectedCountry} onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedState('');
          setSelectedCity('');
          setSelectedCinema(null);
          setSelectedTiming('');
        }}>
          <option value="">-- Choose Country --</option>
          {Object.keys(locationData).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      {/* State Select */}
      {selectedCountry && (
        <div style={{ marginBottom: '20px' }}>
          <label>Select State: </label>
          <select value={selectedState} onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedCity('');
            setSelectedCinema(null);
            setSelectedTiming('');
          }}>
            <option value="">-- Choose State --</option>
            {getStates().map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      )}

      {/* City Select */}
      {selectedState && (
        <div style={{ marginBottom: '20px' }}>
          <label>Select City: </label>
          <select value={selectedCity} onChange={(e) => {
            setSelectedCity(e.target.value);
            setSelectedCinema(null);
            setSelectedTiming('');
          }}>
            <option value="">-- Choose City --</option>
            {getCities().map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}

      {/* Cinemas */}
      {selectedCity && (
        <>
          <h2>Select Cinema</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {getCinemas().map(cinema => (
              <div
                key={cinema.name}
                onClick={() => {
                  setSelectedCinema(cinema);
                  setSelectedTiming('');
                }}
                style={{
                  padding: '10px 20px',
                  backgroundColor: selectedCinema?.name === cinema.name ? '#007bff' : '#333',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                {cinema.name}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Timings */}
      {selectedCinema && (
        <>
          <h3 style={{ marginTop: '20px' }}>Available Timings</h3>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {selectedCinema.timings.map((time, index) => (
              <div
                key={index}
                onClick={() => setSelectedTiming(time)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedTiming === time ? '#28a745' : '#555',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                {time}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Continue Button */}
      {selectedCountry && selectedState && selectedCity && selectedCinema && selectedTiming && (
        <div style={{ marginTop: '30px' }}>
          <button
            onClick={() =>
              navigate('/seats', {
                state: {
                  movie,
                  cinema: selectedCinema.name,
                  timing: selectedTiming,
                  location: `${selectedCity}, ${selectedState}, ${selectedCountry}`,
                },
              })
            }
            style={{
              padding: '12px 24px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Select Seats
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
