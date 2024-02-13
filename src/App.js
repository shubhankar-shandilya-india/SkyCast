import './App.css';
import { useState, useEffect } from 'react';
const App = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("null");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a8f11b8489d2141435a902ed83df15e2`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main);
      console.log(resjson);
    }
    fetchApi();
  }, [search])

  return (
    <div>
      

      <div className='big'>
        {/* whole weather conatiner  */}
        <div className='container'>
          <div className='heading'>
            <h2>SkyCast</h2>
          </div>
          <div >
            <input className='input' type='search' onChange={(event) => { setSearch(event.target.value) }} />
          </div>
          {
            !city ? (
              <p>No data yet</p>
            ) :
              <div className='content'>
                <h3>{search}</h3>
                <h4>Temperature: {city.temp}</h4>
                <h4>Pressure: {city.pressure}</h4>
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
