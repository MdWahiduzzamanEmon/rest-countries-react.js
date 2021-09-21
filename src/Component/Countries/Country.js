import React, { useEffect, useState } from 'react';
import CountryAll from '../Country/CountryAll';
import './Country.css'
const Country = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
          .then((res) => res.json())
          .then((data) => setCountries(data));
    }, [])
    return (
      <div>
        <header className="header">
          <span>Total Country : {countries.length} </span>
            </header>
        <div className="grid-style">
                {countries.map((country) =>
                    <CountryAll key={country.name } country={country}>
                  
            </CountryAll>
          )}
        </div>
      </div>
    );
};

export default Country;