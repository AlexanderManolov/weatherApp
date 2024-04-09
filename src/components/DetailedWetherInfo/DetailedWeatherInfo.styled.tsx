import styled from 'styled-components'

export const DetailedWeatherInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`
export const DetailsHeaderRow = styled.div`
  padding: 0.5rem 0;
`

type DetailsBodyRowProps = {
  $justification: string
}

export const DetailsBodyRow = styled.div<DetailsBodyRowProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ $justification }) => $justification};
  gap: 0.5rem;
`

export const CitySearch = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  padding-left: 2.2rem;
  width: 100%;
  outline: none;
  background: #B3B3B3;
  color: #FFFFFF;
  border: 1px solid #C4D1EB;
  border-radius: 1px;
  box-shadow: 1px 1px 1px 0px #E2E2E2;
  transition: .3s ease;

  &:focus {
    background: #767565;
    border: 1px solid #000000;
    border-radius: 0px;
  }
`

export const StyledImg = styled.img`
  height: 1.3rem;
  position: absolute;
  margin: 0.5rem;
`
