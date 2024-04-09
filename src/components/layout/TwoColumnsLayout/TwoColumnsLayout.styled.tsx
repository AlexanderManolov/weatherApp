import styled from 'styled-components'
import { TwoColumnsLayoutProps } from './TwoColumnsLayout.types'
import { breakpoint } from '../../../constants/styles/breakpoints'

const TwoColumnsLayout = styled.div<TwoColumnsLayoutProps>`
  width: 500px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(55, 54, 47, 0.70);
  ${({ $gap }) => `gap: ${$gap};`}
  
  ${breakpoint.laptop`
    width: 850px;
    padding: 3rem;
    flex-direction: row;
  `}
`

export default TwoColumnsLayout
