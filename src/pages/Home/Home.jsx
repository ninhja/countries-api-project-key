import data from "../../../data.json";
import Card from "../../components/Card";
import { useEffect, useState } from "react";

export default function Home({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);

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
