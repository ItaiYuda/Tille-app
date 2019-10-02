import React from 'react';
import './WeatherStyle.css';
import timePad from '../../utilities/timePad';


const WeatherTile = (props) => {
    const changeScreen = () => {
        props.handleScreenChange('weather');
    }
    
        
    const {weather, updateTime} = props.weather;
    let displayUpdateTime = timePad(updateTime);
    return (
        <div className="weather-tile tile" onClick={changeScreen}>
            <h2>Weather</h2>
            <div className='weather-container'>
                <div className='weather-city-temp'>
                    <div>
                        {weather.forecast[0].temp} &#8451;
                    </div>
                    <div>
                        {weather.city}
                    </div>
                </div>
                <div>
                    <img className="img-weather" src={`http://localhost:4000/${weather.imgPath}`} alt="weather" />
                </div>
            </div>
            <div className='update-time'>
                Last update: {displayUpdateTime}
            </div>
        </div>
    )
}
    



export default WeatherTile;