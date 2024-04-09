import { PropsWithChildren } from 'react'
import moment from 'moment'
import { ForecastSummaryProps } from './ForecastSummary.types'
import { SummaryColumn, SummaryRow, TempHeading } from './ForecastSummary.styled'

const SUMMARY_DATE_TIME_FORMAT = 'h:mma - dddd, MMMM Do YYYY'

const formattedCurrentDateTime = () => moment().format(SUMMARY_DATE_TIME_FORMAT)
const buildIconURL = (iconCode: string) => 'http://openweathermap.org/img/w/' + iconCode + '.png'

const ForecastSummary = (props: PropsWithChildren<ForecastSummaryProps>) => {
  const { cityDetails, threeHourStepMainDetails } = props
  const weatherData = threeHourStepMainDetails.weather[0]
  const formattedDate = formattedCurrentDateTime()
  const [timeAndWeekday, dayOfTheMonth] = formattedDate.split(', ')

  return (
    <SummaryRow>
      <TempHeading>{Math.round(threeHourStepMainDetails.main.temp)}°</TempHeading>
      <SummaryColumn>
        <h2>{cityDetails.name}</h2>
        <span>{timeAndWeekday}</span>
        <span>{dayOfTheMonth}</span>
      </SummaryColumn>
      <SummaryColumn>
        <img src={buildIconURL(weatherData.icon)} alt="Weather icon" />
        <span>{weatherData.main}</span>
      </SummaryColumn>
    </SummaryRow>
  )
}

export default ForecastSummary