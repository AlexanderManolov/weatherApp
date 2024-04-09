import { test, expect, vi } from 'vitest'
import fetchCoordinatesByCityName from '../../src/api/fetchCoordinatesByCityName/fetchCoordinatesByCityName'
import { coordinatesEndpoint, openWeatherApiBaseURL } from '../../src/constants/api'

test('fetches coordinates for a valid city name', async () => {
  const mockResponse = {
    coord: { lat: 51.505, lon: -0.09 }, // Sample coordinates for London
  }
  // No need for jest.mock, directly mock the fetch API
  global.fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify(mockResponse)))

  const coordinates = await fetchCoordinatesByCityName('q=London')

  expect(global.fetch).toBeCalledWith(expect.stringContaining(`${openWeatherApiBaseURL}${coordinatesEndpoint}?q=London`))
  expect(coordinates).toEqual(mockResponse)
})

test('throws error for non-ok response status', async () => {
  const mockError = new Error('Network error')
  global.fetch = vi.fn().mockRejectedValue(mockError)

  await expect(fetchCoordinatesByCityName('UnknownCity')).rejects.toThrowError('Network error')
})
