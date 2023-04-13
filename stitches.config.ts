import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
      pink200: 'rgb(255, 183, 197)',
      pink400: 'rgb(255, 133, 157)',
      purple200: 'rgb(146, 117, 255 )',
      purple400: 'rgb(114, 76, 255 )',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
  },
});