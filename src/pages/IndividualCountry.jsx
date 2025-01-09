import "../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export default function IndividualCountry() {
  const countryName = useParams().country;
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const getCountryData = () => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
      })
      .catch((error) => console.log("Error: " + error.message));
  };

  useEffect(() => {
    getCountryData();
  }, []);
  console.log(country, country.flags);

  return (
    <main>
      <Link to="/" className="button">
        Back
      </Link>
      {country && (
        <div className="IndividualCountry">
          <img src={country.flags.svg} alt={country.flags.alt} />
          <div className="country-info">
            <h2>{country.name.common}</h2>

            <p>Population: {country.population.toLocaleString()}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <button>Save</button>
          </div>
        </div>
      )}
    </main>
  );
}
