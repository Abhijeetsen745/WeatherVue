import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"WonderLand",
        temp: 25.05,
        tempMin:25.05,
        tempMax: 25.05,
        humidity: 47,
        feelsLike:24.84,
        weather: "haze"
    });
    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }

    return(
        <div style={{background:weatherInfo.humidity > 80 ? 'gray' : weatherInfo.temp > 15 ? 'yellow' : 'aqua'}}>   
            <h1 >Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}  />
        </div>
    )
}