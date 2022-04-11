import React from 'react'
import WeatherCard from './WeatherCard';
import { useWeather } from '../context/WeatherContext'
import {retrieveDay} from '../constants/Days'

function WeatherList() {

    const { weathers } = useWeather()


    return (
        <div className='card-group'>
            {
                weathers.map((weather, index) => {
                    let date = new Date();
                    date.setDate(date.getDate() + index);
                    let day = date.toLocaleString('en-us', { weekday: 'long' });
                    day = retrieveDay(day)
                    weather = {...weather,day}

                    return <WeatherCard key={index} weather={weather} />
                })
            }
        </div>
    )
}

export default WeatherList