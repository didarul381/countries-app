import React,{useState,useEffect} from 'react'
import Countries from './component/Countries';
import "./app.css";
import Serch from './component/Serch';


const url="https://restcountries.com/v3.1/all";
const App = () => {
  
  const[isloding,setIsloding]=useState(true);
  const[error,setError]=useState(true);
  const[countries,setCountries]=useState([]);
  const[filter,setFilter]=useState(countries);


  const fetchData= async (url) =>{
    setIsloding(true);

    try{
    const response=await fetch(url);
    const data=await response.json();
    setCountries(data);
    setFilter(data);
    setIsloding(false);
    setError(null);
    console.log(countries);
    }catch(error){
      setIsloding(false);
      setError(error);
    }

  };
  useEffect(()=>{
  fetchData(url)

  }, [])

  const handleRemove=(name)=>{
    const filters=filter.filter((country)=> country.name.common!==name);
    setFilter(filters);
  };
  const handleserch=(serchValue)=>{
    let value=serchValue.toLowerCase();
    const newCountry=countries.filter((country)=>{
      const countryName=country.name.common.toLowerCase();
      return  countryName.startsWith(value);
    });
    setFilter(newCountry);
  }

  return  <>
     <h1>Country App</h1>
     <Serch onSerch={handleserch}/>
     {isloding && <h3>Loding...</h3>}
     {error&& <h3>{error.message}</h3>}
      {countries&& <Countries countries={filter} onRemove={handleRemove}/>}
  </>;
 
};

export default App;