import data from "../../data.json";
import Card from "../components/Card";

export default function Home() {
  return (
    <main>
      <h2>Home</h2>

      <div className="card-container">
        {data.map((country) => (
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
