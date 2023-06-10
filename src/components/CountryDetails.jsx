import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
  const { countryId } = useParams(); // Access the alpha3Code parameter from the URL

  // Find the country object based on the alpha3Code
  const country = props.countries.find(
    (country) => country.alpha3Code === countryId
  );

  // Return JSX to display country details
  return (
    <div>
      <Link className="list-group-item list-group-item-action" to={`/countries/${countryId}`}>
        {country.name.common}
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
      </Link>
      <p>Country's Official Name: {country.name.official}</p>
      <p>Country's Capital: {country.capital}</p>
      <p>Country's Region: {country.region}</p>

      
    </div>
  );
}

export default CountryDetails;


  
