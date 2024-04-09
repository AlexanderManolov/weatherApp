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
