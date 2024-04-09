export type ThreeHourForecastMainDetails = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export type ThreeHourForecastWeatherDetails = {
  id: number
  main: string
  description: string
  icon: string
}

export type ThreeHourForecastCityDetails = {
  coord: {
    lat: number,
    lon: number
  }
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}

export type ThreeHourForecast = {
  dt: number,
  main: ThreeHourForecastMainDetails,
  weather: ThreeHourForecastWeatherDetails[],
  clouds: {
    all: number
  },
  wind: {
    speed: number
    deg: number
    gust: number
  },
  visibility: number
  pop: number
  sys: {
    pod: string
  }
  dt_txt: string
}

export type FiveDayForecastResponse = {
  cod: string
  city: ThreeHourForecastCityDetails
  message: number
  cnt: number
  list: ThreeHourForecast[]
}