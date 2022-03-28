import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";


function App() {
  const [lat, setLat] = useState([41.0082]);
  const [long, setLong] = useState([28.9784]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="App">
       {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
    </div>
  );
}

export default App;
