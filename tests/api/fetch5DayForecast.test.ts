import { test, expect, vi } from 'vitest'
import fetch5DayForecast from '../../src/api/fetch5DayForecast/fetch5DayForecast'
import { fiveDayForecastEndpoint, openWeatherApiBaseURL } from '../../src/constants/api'

test('fetches 5-day forecast for a valid city name', async () => {
  const mockResponse = {
    list: [ // Sample forecast data
      { dt: 1654812800, temp: { min: 10, max: 20 } },
      { dt: 1654899200, temp: { min: 8, max: 18 } },
    ],
  }
  const mockFetch = vi.fn().mockResolvedValue(new Response(JSON.stringify(mockResponse)))
  global.fetch = mockFetch

  const forecastData = await fetch5DayForecast('lon=1234&lat=5678')

  expect(mockFetch).toBeCalledWith(expect.stringContaining(
    `${openWeatherApiBaseURL}${fiveDayForecastEndpoint}?lon=1234&lat=5678&units=metric`
  ))
  expect(forecastData).toHaveProperty('list')
})

test('throws error for non-ok response status', async () => {
  const mockError = new Error('Network error')
  const mockFetch = vi.fn().mockRejectedValue(mockError)
  global.fetch = mockFetch

  await expect(fetch5DayForecast('longitude=ssd&latitude=fake')).rejects.toThrowError('Network error')
})
