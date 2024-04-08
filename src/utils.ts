import moment from 'moment'
import { ThreeHourForecast } from './api/fetch5DayForecast.types'

export const toQueryString = (obj: Record<string, string | number | boolean | string[] | undefined>): string => {
  const parts: string[] = [];
  for (const key in obj) {
    const value = obj[key];

    if (value) {
      if (Array.isArray(value)) {
        value.forEach(item => parts.push(`${key}=${encodeURIComponent(item)}`));
      } else {
        parts.push(`${key}=${encodeURIComponent(value.toString())}`);
      }
    }
  }

  return parts.join('&');
}

export const formatFiveDays = (list: ThreeHourForecast[]) => {
  const fiveDaysForecast: ThreeHourForecast[][] = []

  let dayToFulfill: number = moment().date()
  let currentDay3HourStepStack: ThreeHourForecast[] = []

  list.map((threeHourStepObject) => {
    const currentDay: number = moment(threeHourStepObject.dt_txt).date()
    if (dayToFulfill == currentDay) {
      currentDay3HourStepStack.push(threeHourStepObject)
    } else {
      fiveDaysForecast.push(currentDay3HourStepStack)
      currentDay3HourStepStack = []
      dayToFulfill = currentDay
    }
  })
  return fiveDaysForecast
}
