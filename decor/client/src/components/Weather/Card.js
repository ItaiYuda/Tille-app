import React from 'react'

const Card = (props) => {
    const {dailyForecast} = props;
    const dayInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   
    return (
        <div className='card' >
            <h3>{dayInWeek[dailyForecast.day]}</h3>
            <div className='card-temp'> 
                {dailyForecast.temp} &#8451;
            </div>
        </div>
    )
}

export default Card;
