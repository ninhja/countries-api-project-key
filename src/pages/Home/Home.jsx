import { useState, useEffect } from "react";
import Card from "../../components/Card";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [error, setError] = useState(null);

  const getCountriesData = () => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region"
    )
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) =>
          a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase())
        );
        setCountries(sortedData);
        setFilteredCountries(sortedData);
      })
      .catch((error) => setError("Error: " + error.message));
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm.trim() === "") {
      // Reset to full countries list if input is empty
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((item) =>
        item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };
  return (
    <main>
      <div className="menu">
        <input
          name="searchBar"
          type="text"
          placeholder="Search for a country..."
          onChange={handleSearch}
        ></input>
      </div>

      <div className="card-container">
        {filteredCountries.map((country) => (
          <Card
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            alt={country.flags.alt}
            population={country.population.toLocaleString()}
            capital={country.capital}
            region={country.region}
          />
        ))}
      </div>
    </main>
  );
}
