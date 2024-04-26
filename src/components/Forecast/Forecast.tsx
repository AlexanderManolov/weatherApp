import { useCallback, useContext, useEffect, useState } from 'react'
import { FiveDayForecastResponse } from '../../api/fetch5DayForecast/fetch5DayForecast.types'
import fetch5DayForecast from '../../api/fetch5DayForecast/fetch5DayForecast'
import LoadingSpinner from '../LoadingSpinner'
import MainForecastInfo from '../MainForecastInfo/MainForecastInfo'
import { sortFiveDays, toQueryString } from '../../utils'
import { GlobalContext } from '../../contexts/GlobalContext/GlobalContext'
import { Location } from './Forecast.types'

const Forecast = () => {
  const { weatherQueryParams: {
    longitude,
    latitude,
    setLongitude,
    setLatitude,
  } } = useContext(GlobalContext)
  const [shouldUseGeolocation, setShouldUseGeolocation] = useState(false)
  const [fiveDayWeatherData, setFiveDayWeatherData] = useState<FiveDayForecastResponse>()
  const isForecastLoaded = !!fiveDayWeatherData

  useEffect(() => {
    if (shouldUseGeolocation) {
      if (window.navigator.geolocation && setLatitude && setLongitude) {
        window.navigator.geolocation.getCurrentPosition((location: Location) => {
          setLatitude(location.coords.latitude)
          setLongitude(location.coords.longitude)
        })
      }
    }
  }, [setLatitude, setLongitude, shouldUseGeolocation])

  useEffect(() => {
    if (longitude && latitude) {
      const queryObject = {
        lat: latitude,
        lon: longitude,
      }
  
      fetch5DayForecast(toQueryString(queryObject))
        .then((data: FiveDayForecastResponse) => {
          setFiveDayWeatherData(data)
        })
    }
  }, [latitude, longitude])

  const getGeolocationPermission = useCallback(() => {
    setShouldUseGeolocation(true)
  }, [])

  return (
        isForecastLoaded
        ? <>
          <button onClick={getGeolocationPermission}>Use my location</button>
          <MainForecastInfo
              cityDetails={fiveDayWeatherData.city}
              fiveDaysMainForecastDetails={sortFiveDays(fiveDayWeatherData.list)}
            />
        </>
        : <LoadingSpinner />
  )
}

export default Forecast
