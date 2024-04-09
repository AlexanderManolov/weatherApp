import styled from 'styled-components'

export const DayListWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

type DayButtonStyledProps = {
  $selected: boolean
}

export const DayButton = styled.button<DayButtonStyledProps>`
  font-size: 1rem;
  width: 100%;
  color: #f2f2f2;
  background-color: #b3b3b3;
  padding: 0.5rem;
  border: none;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 1px;
  transition : 500ms;
  transform: translateY(0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ $selected }) => $selected && `background-color: #767565;`}

  &:hover{
  transition : 550ms;
  transform : translateY(-0px);
  background-color: #d4d4d4;
  color: #ffffff;
  border: none;
  }
`

export const StyledSpan = styled.span`
  padding: 0 1rem 0 1rem;
`
