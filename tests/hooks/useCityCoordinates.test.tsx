import { describe, expect, test, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { ContextProvider } from '../utils'
import { useCityCoordinates } from '../../src/hooks/useCityCoordinates'
// import * as contextUtils from '../../src/contexts/GlobalContext/GlobalContext'

describe('useCityCoordinates hook', () => {
  test('should return an empty object initially', () => {
    const { result } = renderHook(() => useCityCoordinates())
    expect(result.current).toEqual({})
  })

  test('should fetch coordinates and update context when searchInputValue is provided', async () => {
    const mockFetch = vi.fn()
    global.fetch = mockFetch.mockResolvedValue(new Response(JSON.stringify([{ lat: 51.505, lon: -0.09 }])))

    // const mockSetLatitude = vi.fn()
    // const mockSetLongitude = vi.fn()

    // vi.spyOn(contextUtils, 'GlobalContextProvider').mockImplementation(() => {
    //   return {
    //     ...contextUtils.initialGlobalContextValue,
    //     weatherQueryParams: {
    //       ...contextUtils.initialGlobalContextValue.weatherQueryParams,
    //       setLongitude: mockSetLongitude,
    //       setLatitude: mockSetLatitude,
    //     }
    //   }
    // })

    const { result } = renderHook(() =>
      useCityCoordinates('London'), { wrapper: ContextProvider })

    await waitFor(() => {
      expect(result.current).toEqual({ latitude: 51.505, longitude: -0.09 })
    })

    // TODO: Validate setters are called correctly. Maybe a bump down to react 17 would be needed
    // for react-hooks to work properly.
    // expect(mockSetLatitude).toHaveBeenCalledWith(51.505)
    // expect(mockSetLongitude).toHaveBeenCalledWith(-0.09)
  })

  // Add more tests for error scenarios, 
  // behavior without searchInputValue, 
  // and handling of isLoaded state.
})
