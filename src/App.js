
import './App.css';

import countriesData from "../src/countries.json";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { useEffect } from 'react';

import { Routes, Route, useNavigate } from "react-router-dom";  
import CountryDetails from './components/CountryDetails';

function App() {

 const navigate = useNavigate()
 useEffect(() => {
  navigate('/countries')
 }, []);

  return (
    <div className="App">
     <Navbar />
     
     <Routes>
     
     <Route path="/countries" element={<CountriesList countries={countriesData}/>} />
     <Route path="/countries/:countryId" element={<CountryDetails countries={countriesData} />} />
     </Routes>
  
    
  


    </div>
   
  );
}

export default App;
