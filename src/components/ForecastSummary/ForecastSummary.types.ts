import { ThreeHourForecast, ThreeHourForecastCityDetails } from '../../api/fetch5DayForecast/fetch5DayForecast.types'

export type ForecastSummaryProps = {
  cityDetails: ThreeHourForecastCityDetails
  threeHourStepMainDetails: ThreeHourForecast
}
