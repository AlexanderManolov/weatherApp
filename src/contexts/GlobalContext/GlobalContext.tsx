import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from 'react'

type GlobalContext = {
  theme: string
  weatherQueryParams: {
    latitude?: number
    longitude?: number
    setLatitude?: Dispatch<SetStateAction<number|undefined>>
    setLongitude?: Dispatch<SetStateAction<number|undefined>>
  }
}

const initialGlobalContextValue = {
  theme: 'dark',
  weatherQueryParams: {
    setLatitude: () => {},
    setLongitude: () => {}
  }
}

export const GlobalContext = createContext<GlobalContext>(initialGlobalContextValue)

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()

  const value = useMemo(() => ({
    theme: 'dark',
    weatherQueryParams: {
      longitude,
      latitude,
      setLatitude,
      setLongitude,
    }
  }), [latitude, longitude])

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
