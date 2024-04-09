import { PropsWithChildren, useState } from 'react'
import DayList from '../DayList/DayList'
import ForecastSummary from '../ForecastSummary/ForecastSummary'
import { MainForecastInfoProps } from './MainForecastInfo.types'
import { ForecastDetailsWrapper } from './MainForecastInfo.styled'
import TwoColumnsLayout from '../layout/TwoColumnsLayout/TwoColumnsLayout.styled'
import DetailedWeatherInfo from '../DetailedWetherInfo/DetailedWetherInfo'

const MainForecastInfo = (props: PropsWithChildren<MainForecastInfoProps>) => {
  const { cityDetails, fiveDaysMainForecastDetails } = props
  const [selectedDay, setSelectedDay] = useState(0)

  return (
    <TwoColumnsLayout $gap='2rem'>
      <ForecastDetailsWrapper>
        {/*
          With more time I'd change the whole page's background image to color.
          From there will add an image here which will change based on the wind type.
          E.g. if it's cloudy to display clouds with sunset, if it's rainy to show rainy landscape, same for snow etc.
          That would cover the free space now which is disturbing my well-being...
        */}
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
      <DetailedWeatherInfo selectedDayDetails={fiveDaysMainForecastDetails[selectedDay]} />
    </TwoColumnsLayout>
  )
}

export default MainForecastInfo