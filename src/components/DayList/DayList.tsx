import { PropsWithChildren } from 'react'
import moment from 'moment'
import { DayButton, DayListWrapper, StyledSpan } from './DayList.styled'
import { DayListProps } from './DayList.types'

const DayList = (props: PropsWithChildren<DayListProps>) => {
  const now = moment().utc()
  const { selectedDay, setSelectedDay, fiveDaysMainForecastDetails } = props

  return (
    <DayListWrapper>
      {fiveDaysMainForecastDetails.map((currentDayDetails, i) => {
        const buttonDate = i === 0 ? now : moment(now.add(1, 'day'))

        return (
        <li key={currentDayDetails[0].dt} style={{width: '100%'}}>
          <DayButton type='button' aria-label={`${buttonDate.format('MMM DD')} button`} $selected={selectedDay === i} onClick={() => setSelectedDay(i)}>
            <StyledSpan>{buttonDate.format('MMM') + ' '}</StyledSpan>
            <StyledSpan>{buttonDate.date()}</StyledSpan>
          </DayButton>
        </li>
        )
      }) }
    </DayListWrapper>
  )
}

export default DayList