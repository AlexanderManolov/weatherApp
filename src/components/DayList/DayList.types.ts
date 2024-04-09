import { ThreeHourForecast } from '../../api/fetch5DayForecast/fetch5DayForecast.types'

export type DayListProps = {
  selectedDay: number
  fiveDaysMainForecastDetails: ThreeHourForecast[][]
  setSelectedDay: (state: number) => void
}