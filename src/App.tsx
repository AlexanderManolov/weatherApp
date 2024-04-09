import { useEffect, useState } from 'react'
import fetch5DayForecast from './api/fetch5DayForecast'
import { sortFiveDays, toQueryString } from './utils'
import { FiveDayForecastResponse } from './api/fetch5DayForecast.types'
import GlobalStyle from './components/GlobalStyle'
import LoadingSpinner from './components/LoadingSpinner'
import MainForecastInfo from './components/MainForecastInfo/MainForecastInfo'
import { BodyWrapper } from './components/layout/BodyLayout.styled'

type Location = {
  coords: GeolocationCoordinates
  timestamp: number
}

function App() {
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()
  const [fiveDayWeatherData, setFiveDayWeatherData] = useState<FiveDayForecastResponse>()
  const isForecastLoaded = !!fiveDayWeatherData

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((location: Location) => {
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude)
      })
    }
  }, [])

  useEffect(() => {
    if (longitude && latitude && !fiveDayWeatherData) {
      const queryObject = {
        lat: latitude,
        lon: longitude,
      }
  
      fetch5DayForecast(toQueryString(queryObject))
      .then((data: FiveDayForecastResponse) => {
        setFiveDayWeatherData(data)
      })
    }
  })

  return (
    <>
      <BodyWrapper>
        {isForecastLoaded
        ? <MainForecastInfo
          cityDetails={fiveDayWeatherData.city}
          fiveDaysMainForecastDetails={sortFiveDays(fiveDayWeatherData.list)}
          />
        : <LoadingSpinner />}
      </BodyWrapper>
      <GlobalStyle />
    </>
  )
}

export default App
