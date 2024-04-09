import styled from 'styled-components'

export const SummaryRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  gap: 2rem;
`

export const SummaryColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: calc(1rem / 3);
`

export const TempHeading = styled.h1`
  font-size: 5rem;
`