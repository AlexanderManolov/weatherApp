import { fiveDayForecastEndpoint, openWeatherApiBaseURL } from '../../constants/api'
import ResponseError from '../response-error'

const fetch5DayForecast = async (query: string) => {
  const API_KEY = process.env.VITE_OPEN_WEATHER_API_KEY

  if (!API_KEY) throw new Error('Open weather API key is not set')

  try {
    const response = await fetch(
      `${openWeatherApiBaseURL}${fiveDayForecastEndpoint}?${query}&units=metric&appid=${API_KEY}`
    )
    if (!response.ok) {
      throw new ResponseError(`Fetching 5-day weather forecast returned an error: ${response.status}`, response)
    }

    return await response.json()
  } catch (error) {
    throw (error as Error)?.message
  }
}

export default fetch5DayForecast
