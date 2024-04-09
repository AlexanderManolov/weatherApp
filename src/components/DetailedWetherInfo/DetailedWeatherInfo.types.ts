import { ThreeHourForecast } from '../../api/fetch5DayForecast/fetch5DayForecast.types'

export type DetailedWeatherInfoProps = {
  selectedDayDetails: ThreeHourForecast[]
}

export interface FormElements extends HTMLFormControlsCollection {
  searchQuery: HTMLInputElement
}

export interface SearchFormFormElement extends HTMLFormElement {
  readonly elements: FormElements
}
