import React from 'react';
import './CountryAll.css'
const CountryAll = (props) => {
  const { name, flag, capital,population } = props.country;
  
  return (
    <div className="country-card-style">
      <img src={flag} alt="" width="200px" />
      <h2>Country name: {name}</h2>
      <h3>Capital: {capital}</h3>
      {props.country.languages.map((language) => (
        <Languages name={language.name} key={language.nativeName}></Languages>
      ))}
          <h3>Currencies-Symbol: {props.country.currencies[0].symbol}</h3>
          <h2> Population: { population}</h2>
    </div>
  );
};
function Languages(props) {
    return (
        <div>
        <h2>
          Language name:{props.name}
        </h2>
        </div>
    )
}
export default CountryAll;