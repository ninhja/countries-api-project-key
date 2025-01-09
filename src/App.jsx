import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedCountries />} />
      </Routes>
    </>
  );
}

export default App;
