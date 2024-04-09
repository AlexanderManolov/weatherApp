import { useContext, useEffect, useState } from 'react'
import fetchCoordinatesByCityName from '../api/fetchCoordinatesByCityName/fetchCoordinatesByCityName'
import { toQueryString } from '../utils'
import { CoordinatesByCityNameResponse } from '../api/fetchCoordinatesByCityName/fetchCoordinatesByCityName.types'
import { GlobalContext } from '../contexts/GlobalContext/GlobalContext'

export const useCityCoordinates = (searchInputValue?: string) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { weatherQueryParams: { longitude, latitude, setLongitude, setLatitude } } = useContext(GlobalContext)

  useEffect(() => {
    if (searchInputValue && setLatitude && setLongitude) {
      fetchCoordinatesByCityName(toQueryString({ q: searchInputValue }))
        .then((res: CoordinatesByCityNameResponse) => {
          setLatitude(res[0].lat)
          setLongitude(res[0].lon)
        })
    }
  }, [searchInputValue, setLatitude, setLongitude])

  useEffect(() => {
    if (searchInputValue && longitude && latitude) {
      setIsLoaded(true)
    }
  }, [latitude, longitude, searchInputValue])

  if (!isLoaded) return {}

  return { latitude, longitude }
}
