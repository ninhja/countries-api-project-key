import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <Link to="/saved">Saved Countries</Link>
      </nav>
    </header>
  );
}
