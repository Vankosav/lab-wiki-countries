import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function CountriesList(props) {
    const [countries, setCountries] = useState([]);
 
    useEffect(() => {
      setCountries(props.countries);                  
    }, [props.countries]); 
  return (
    <div className="container">

        <h3>List of Countries</h3>

        <div className="row">

         {countries.map((country) => {
          return(
            
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group ">
              <Link className="list-group-item list-group-item-action" to={`/countries/${country.alpha3Code}`}>{country.name.common}
              
             
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}  alt="flag" 
                
              />
              </Link>
            </div>
            </div>
          )


          })}

        </div>

    </div>
  )
}

export default CountriesList;


