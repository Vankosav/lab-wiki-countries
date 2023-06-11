import { useParams, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams(); 

useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
    .then((res) => res.json())
    .then((data) => setCountry(data));
}, [countryId]);

if(!country) {
    return <h2>Loading...</h2>
}



  // Return JSX to display country details
  return (
    <div className="col-7">
      <Link className="list-group-item list-group-item-action" to={`/countries/${countryId}`}>
        {country.name.common}
        <br></br>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
      </Link>
      <table className="table">
      <thead></thead>
              <tbody>
      <tr>
      <td style={{width: 30}}>Country's Official Name: </td>
      <td style={{width: 30}}>{country.name.official}</td>
      </tr>
      <tr>
      <td style={{width: 30}}>Country's Capital:</td>
      <td style={{width: 30}}> {country.capital}</td>
      </tr>
      <tr>
      <td style={{width: 30}}>Country's Area:</td>
      <td style={{width: 30}}> {country.area} km<sup>2</sup></td>
      </tr>
      <tr>
  <td style={{width: 30}}>Borders</td>
  <td style={{width: 30}}>
    <ul>
      {country.borders.map((border) => (
        <li key={border}>
          <Link to={`/countries/${border}`}>{border}</Link>
        </li>
      ))}
    </ul>
  </td>
</tr>
</tbody>
      </table>
    </div>
  );
}

export default CountryDetails;


  
