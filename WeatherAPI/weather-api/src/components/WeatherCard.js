import React from 'react'

function WeatherCard({ weather }) {
    return (
        <div>
            <div className="card" style={{ width: "10rem", backgroundColor: 'lightgray', margin: '10px' }}>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} style={{ width: '100px', height: '100px', margin: '0 auto' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{weather.day}</h5>
                    <p className='card-text'>
                        Min : {weather.temp.max} C°
                        <br/>
                        Max : {weather.temp.min} C°
                    </p>

                </div>
            </div>

        </div>
    )
}

export default WeatherCard