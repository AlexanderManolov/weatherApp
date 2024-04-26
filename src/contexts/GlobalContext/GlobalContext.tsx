import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from 'react'

export type GlobalContext = {
  theme: string
  weatherQueryParams: {
    latitude: number
    longitude: number
    setLatitude?: Dispatch<SetStateAction<number>>
    setLongitude?: Dispatch<SetStateAction<number>>
  }
}

export const initialGlobalContextValue = {
  theme: 'dark',
  weatherQueryParams: {
    longitude: 43.2073873,
    latitude: 27.9166653,
    setLatitude: () => {},
    setLongitude: () => {}
  }
}

const DEFAULT_LONGITUDE = 43.2073873
const DEFAULT_LATITUDE = 27.9166653

export const GlobalContext = createContext<GlobalContext>(initialGlobalContextValue)

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [latitude, setLatitude] = useState<number>(DEFAULT_LATITUDE)
  const [longitude, setLongitude] = useState<number>(DEFAULT_LONGITUDE)

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
