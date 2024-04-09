import { ThreeHourForecastCityDetails, ThreeHourForecast } from '../../api/fetch5DayForecast.types'

export type MainForecastInfoProps = {
  cityDetails: ThreeHourForecastCityDetails
  fiveDaysMainForecastDetails: ThreeHourForecast[][]
}
