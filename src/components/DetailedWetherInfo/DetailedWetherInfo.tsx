import { PropsWithChildren } from 'react'
import moment from 'moment'
import { ThreeHourForecast } from '../../api/fetch5DayForecast.types'
import { CitySearch, DetailedWeatherInfoWrapper, DetailsBodyRow, DetailsHeaderRow, StyledImg } from './DetailedWeatherInfo.styled'
// TODO: Export in separate .types file
type DetailedWeatherInfoProps = {
  selectedDayDetails: ThreeHourForecast[]
}

const DetailedWeatherInfo = (props: PropsWithChildren<DetailedWeatherInfoProps>) => {
  const { selectedDayDetails } = props
  return (
    <DetailedWeatherInfoWrapper>
      <DetailsBodyRow $justification='flex-start'>
        <StyledImg src="https://cdn-icons-png.flaticon.com/512/711/711319.png" alt="Search Icon" />
        <CitySearch type="search"/>
      </DetailsBodyRow>
      <DetailsHeaderRow>
        <span>Weather Details</span>
        <hr />
      </DetailsHeaderRow>
      {/* TODO: Exporting that in a separate file would be best. */}
      <DetailsBodyRow $justification='space-between'>
        <span>Feels Like</span>
        <span>{Math.round(selectedDayDetails[0].main.feels_like)}° C</span>
      </DetailsBodyRow>
      <DetailsBodyRow $justification='space-between'>
        <span>Cloudy</span>
        <span>{selectedDayDetails[0].clouds.all}%</span>
      </DetailsBodyRow>
      <DetailsBodyRow $justification='space-between'>
        <span>Humidity</span>
        <span>{selectedDayDetails[0].main.humidity}%</span>
      </DetailsBodyRow>
      <DetailsBodyRow $justification='space-between'>
        <span>Wind</span>
        <span>{Math.round(selectedDayDetails[0].wind.speed)}km/h</span>
      </DetailsBodyRow>
      <DetailsHeaderRow>
        <span>Next Hours</span>
        <hr />
      </DetailsHeaderRow>
      {/* TODO: Exporting that in a separate file would be best. */}
      {selectedDayDetails.map((selectedThreeHourStep: ThreeHourForecast) => {
        const hourInUtc = moment.utc(selectedThreeHourStep.dt_txt)

        return (
          <DetailsBodyRow key={selectedThreeHourStep.dt} $justification='space-between'>
            <span>{hourInUtc.utcOffset(moment().utcOffset()).format('HH A')}</span>
            <span>{Math.round(selectedThreeHourStep.main.temp)}° C</span>
          </DetailsBodyRow>
        )
      })}
    </DetailedWeatherInfoWrapper>
  )
}

export default DetailedWeatherInfo