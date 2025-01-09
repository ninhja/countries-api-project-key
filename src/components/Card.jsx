export default function Card({ name, flag, alt, population, capital, region }) {
  return (
    <div className="Card">
      <img src={flag} alt={alt} />
      <div className="country-info">
        <h3>{name}</h3>
        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
      </div>
    </div>
  );
}
