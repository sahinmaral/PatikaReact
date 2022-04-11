import React from 'react'
import { cities } from '../constants/Cities'
import { useCity } from '../context/CityContext'


function CityFilter() {

    const { setCity, city } = useCity()

    const handleCities = (event) => {
        setCity(cities.find((city) => city.id === Number(event.target.value)))
    }


    return (
        <div>
            <select
                className="form-select border border-primary w-50"
                defaultValue={city.id}
                name="cities" style={{ margin: '0 auto', marginBottom: '20px' }}
                onChange={handleCities}>
                {
                    cities.map((city_in) => {
                        return <option
                            key={city_in.id}
                            value={city_in.id}
                        >{city_in.name}</option>
                    })
                }
            </select>

        </div>
    )
}

export default CityFilter