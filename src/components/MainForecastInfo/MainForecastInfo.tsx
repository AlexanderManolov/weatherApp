import { PropsWithChildren, useState } from 'react'
import DayList from '../DayList/DayList'
import ForecastSummary from '../ForecastSumary/ForecastSummary'
import { MainForecastInfoProps } from './MainForecastInfo.types'
import { ForecastDetailsWrapper } from './MainForecastInfo.styled'
import TwoColumnsLayout from '../layout/TwoColumnsLayout/TwoColumnsLayout.styled'
import DetailedWeatherInfo from '../DetailedWetherInfo/DetailedWetherInfo'

const MainForecastInfo = (props: PropsWithChildren<MainForecastInfoProps>) => {
  const { cityDetails, fiveDaysMainForecastDetails } = props
  const [selectedDay, setSelectedDay] = useState(0)
  console.log(selectedDay)
  return (
    <TwoColumnsLayout $gap='2rem'>
      <ForecastDetailsWrapper>
        <ForecastSummary
          cityDetails={cityDetails}
          threeHourStepMainDetails={fiveDaysMainForecastDetails[0][0]}
        />
        <DayList
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          fiveDaysMainForecastDetails={fiveDaysMainForecastDetails}
        />
      </ForecastDetailsWrapper>
      <DetailedWeatherInfo />
    </TwoColumnsLayout>
  )
}

export default MainForecastInfo