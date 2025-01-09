import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import SavedCountries from "./pages/SavedCountries/SavedCountries";
import IndividualCountry from "./pages/IndividualCountry.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedCountries />} />
        <Route path="/country/:country" element={<IndividualCountry />} />
      </Routes>
    </>
  );
}

export default App;
