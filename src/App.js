import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a8f11b8489d2141435a902ed83df15e2`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main);
      console.log(resjson);
    }

    if (search.trim() !== "") {
      fetchApi();
    }
  }, [search]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setSearch(event.target.value);
    }
  };

  return (
    <div>
      <div className='big'>
        <h1 className='heading'>SkyCast</h1>
        <div className='container'>
          <div className='heading'>
            <h2>SkyCast</h2>
          </div>
          <div>
            <input
              className='input'
              type='search'
              placeholder='Enter City'
              onKeyPress={handleKeyPress}
            />
          </div>
          {!city ? null : (
            <div className='content'>
              <h3>{search}</h3>
              <h4>Temperature: {city.temp}°F</h4>
              <h4>Pressure: {city.pressure}hPa</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
