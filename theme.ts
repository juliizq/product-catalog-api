import { extendTheme } from '@chakra-ui/react'
import "@fontsource/cormorant"
import "@fontsource/open-sans"
import "@fontsource/space-grotesk"
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const customTheme = extendTheme({
  colors: {
    primary: '#363636',
    secondary: '#ebe6e2',
    third: '#b8b5b1'
  },
  fonts: {
    heading: 'Cormorant, serif',
    body: 'Open Sans, sans-serif',
    detail: 'Space Grotesk, sans-serif'
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bgColor: mode('#ebe6e2', '#ebe6e2')(props)
      },
    }),
  }
  })

export default customTheme;
