import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import moment from 'moment'
import { ForecastSummaryProps } from '../../src/components/ForecastSummary/ForecastSummary.types'
import ForecastSummary from '../../src/components/ForecastSummary/ForecastSummary'

vi.mock('moment') // Mock moment.js for predictable date formatting

describe('ForecastSummary component', () => {
  const mockProps: ForecastSummaryProps = {
    cityDetails: {
      name: 'London',
    },
    threeHourStepMainDetails: {
      main: {
        temp: 22.5,
      },
      weather: [
        {
          icon: '01d',
          main: 'Clear',
        }
      ],
    },
  } as ForecastSummaryProps

  beforeEach(() => {
    const mockMoment = {
      format: vi.fn().mockReturnValue('08:00 AM - Tuesday, April 09 2024'),
    }
    vi.mocked(moment).mockReturnValueOnce(mockMoment as never)
  })

  test('should render temperature, city name, date, and weather icon', () => {
    render(<ForecastSummary {...mockProps} />)

    const temperature = screen.getByText(/23°/i) // Match temperature with +/- 1 degree
    const cityName = screen.getByText('London')
    const timeAndWeekday = screen.getByText('08:00 AM - Tuesday')
    const dayOfTheMonth = screen.getByText('April 09 2024')
    const weatherIcon = screen.getByRole('img', { name: /Weather icon/i })

    expect(temperature).toBeInTheDocument()
    expect(cityName).toBeInTheDocument()
    expect(timeAndWeekday).toBeInTheDocument()
    expect(dayOfTheMonth).toBeInTheDocument()
    expect(weatherIcon).toBeInTheDocument()
  })

  test('should build the weather icon URL correctly', () => {
    render(<ForecastSummary {...mockProps} />)

    const weatherIcon: HTMLImageElement = screen.getByAltText('Weather icon')
    expect(weatherIcon.src).toBe('http://openweathermap.org/img/w/01d.png')
  })
})