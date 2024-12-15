import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const [city,setCity]=useState("");
    const [error,setError] =useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d93d46eb0feb3f2e15196e066f95fbec";
   
    let getWeatherInfo=async()=>{
        try{
            setError(false);
       let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse= await response.json();
       console.log(jsonResponse);
       
       let result={
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description

       };
       console.log(result);
       return result;
    }catch(err){
        throw err;
    }
    }
    
    
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit= async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
      let newinfo=  await getWeatherInfo();
        updateInfo(newinfo);
        }
        catch(err){
            setError(true);

        }
    }
    return(
        <div>
            
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type="submit">Search </Button>
             {error? <p style={{color:"red"}}>No such place exists!</p>:null}
            </form>
        </div>
    )
}