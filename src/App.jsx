import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import SavedCountries from "./pages/SavedCountries/SavedCountries";
import IndividualCountry from "./pages/IndividualCountry.jsx";

function App() {
  const [countries, setCountries] = useState([]);
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
      })
      .catch((error) => setError("Error: " + error.message));
  };

  useEffect(() => {
    getCountriesData();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home countries={countries} />} />
        <Route path="/saved" element={<SavedCountries />} />
        <Route
          path="/country/:country"
          element={<IndividualCountry countries={countries} />}
        />
      </Routes>
    </>
  );
}

export default App;
