import React from 'react';
import Card from './Card';

const WeatherForecast = (props) => {
    
    const {weather} = props.weather;
    
    const forecast = weather.forecast.map((dailyForecast, index) => {
        return (
            <Card dailyForecast={dailyForecast} key={index}/>
        )

    });

    const screenChange = () => {
        props.handleScreenChange('homepage');
    }
    
    return (
        <div className='new-page-container tile'>
            
            <div className="forecast-details">
                <div>
                    <h2>{weather.city}</h2>
                    <div>{weather.forecast[0].temp} &#8451;</div>
                </div>
                <div className="forecast-description">
                    <div>{weather.description}</div>
                    <img src={`http://localhost:4000/${weather.imgPath}`} alt="weather" />
                </div>
            </div>
            <div className='forecast-container'>
                {forecast}
            </div>
            
            <button onClick={screenChange}>Back to homePage</button>
        </div>
    )
}

export default WeatherForecast;
