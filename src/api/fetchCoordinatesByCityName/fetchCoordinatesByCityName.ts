import { coordinatesEndpoint, openWeatherApiBaseURL } from '../../constants/api'
import ResponseError from '../response-error'
/*
  Query looks like q={city name},{state code},{country code}&limit={limit}
  City name, state code and country code divided by comma. Please use ISO 3166 country codes.
  Number of the locations in the API response (up to 5 results can be returned in the API response)
*/
const fetchCoordinatesByCityName = async (query: string) => {
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

  try {
    const response = await fetch(
      `${openWeatherApiBaseURL}${coordinatesEndpoint}?${query}&appid=${API_KEY}`
    )
    if (!response.ok) {
      throw new ResponseError(`Fetching city coordinates returned an error: ${response.status}`, response)
    }

    return await response.json()
  } catch (error) {
    console.error((error as Error)?.message)
    return
  }
}

export default fetchCoordinatesByCityName