import { Link } from "react-router-dom";   // <== IMPORT
 
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
      <ul>
        <Link className="navbar-brand" to="/"> LAB - WikiCountries</Link> 
        
      </ul>  
      </div> 
    </nav>
  );
}
 
export default Navbar;


 

