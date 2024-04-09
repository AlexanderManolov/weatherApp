import { FormEvent, PropsWithChildren, useCallback, useState } from 'react'
import moment from 'moment'
import { ThreeHourForecast } from '../../api/fetch5DayForecast/fetch5DayForecast.types'
import { DetailedWeatherInfoWrapper, DetailsBodyRow, DetailsHeaderRow } from './DetailedWeatherInfo.styled'
import SearchForm from '../SearchForm/SearchForm'
import { DetailedWeatherInfoProps, SearchFormFormElement } from './DetailedWeatherInfo.types'
import { useCityCoordinates } from '../../hooks/useCityCoordinates'

const DetailedWeatherInfo = (props: PropsWithChildren<DetailedWeatherInfoProps>) => {
  const { selectedDayDetails } = props
  const [searchInputValue, setSearchInputValue] = useState<string|undefined>()
  const onFormSubmitHandler = useCallback((event: FormEvent<SearchFormFormElement>) => {
    setSearchInputValue(event.currentTarget.searchQuery.value)
    event.preventDefault()
  }, [])

  useCityCoordinates(searchInputValue)

  return (
    <DetailedWeatherInfoWrapper>
      <DetailsBodyRow $justification='flex-start'>
        <SearchForm onSubmitHandler={onFormSubmitHandler}/>
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