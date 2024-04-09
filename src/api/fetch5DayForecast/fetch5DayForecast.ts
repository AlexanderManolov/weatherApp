import { fiveDayForecastEndpoint, openWeatherApiBaseURL } from '../../constants/api'
import ResponseError from '../response-error'

const fetch5DayForecast = async (query: string) => {
  const API_KEY = process.env.VITE_OPEN_WEATHER_API_KEY

  try {
    const response = await fetch(
      `${openWeatherApiBaseURL}${fiveDayForecastEndpoint}?${query}&units=metric&appid=${API_KEY}`
    )
    if (!response.ok) {
      throw new ResponseError(`Fetching 5-day weather forecast returned an error: ${response.status}`, response)
    }

    return await response.json()
  } catch (error) {
    console.error((error as Error)?.message)
    return
  }
}

export default fetch5DayForecast
