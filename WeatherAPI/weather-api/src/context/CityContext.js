import React, { createContext, useContext, useState, useEffect } from "react";
import { cities } from '../constants/Cities'
import axios from 'axios'

const CityContext = createContext()

export const CityProvider = ({ children }) => {

    const navigatorSuccess = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=tr`

        axios.get(geoApiUrl).then((res) => {
            setCity(cities.find((city) => city.name === res.data.city))
        })
    }

    const navigatorError = () => {
        console.log('Unable to retrieve your location')
    }

    const [city, setCity] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(navigatorSuccess, navigatorError)
    }, [])

    const values = {
        city, setCity
    }

    return <CityContext.Provider value={values}>
        {children}
    </CityContext.Provider>
}

export const useCity = () => useContext(CityContext)