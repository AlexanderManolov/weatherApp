import { Interpolation, css } from 'styled-components'

export const breakpoints = {
  mobile: '26.5rem', // ~425px
  tablet: '48rem', // ~768px
  laptop: '64rem', // ~1024px
  laptopL: '90rem', // ~1440px
  desktop: '160rem', // ~2560px
}

type ShortRecord = Record<
  keyof typeof breakpoints,
  (l: TemplateStringsArray, ...p: string[]) => Interpolation<object>
>

export const breakpoint = Object.entries(breakpoints).reduce((acc, [size, breakpoint]) => {
  acc[size as keyof ShortRecord] = (
    literals: TemplateStringsArray,
    ...placeholders: string[]
  ): Interpolation<object> => css`
    @media (min-width: ${breakpoint}) {
      ${css(literals, ...placeholders)};
    }
  `
  return acc
}, {} as ShortRecord)

export default { breakpoints, breakpoint }
