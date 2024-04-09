import { ReactNode } from 'react'
import GlobalStyle from '../src/components/GlobalStyle'
import { GlobalContextProvider } from '../src/contexts/GlobalContext/GlobalContext'

type ElementProps = { children: ReactNode }

export const ContextProvider = ({ children }: ElementProps) => {
  return (
    <GlobalContextProvider>
      {children}
      <GlobalStyle />
    </GlobalContextProvider>
  )
}
