import { extendTheme } from '@chakra-ui/react'

const brand = {
  50: '#ffecef',
  100: '#ffd4dc',
  200: '#ffb0c0',
  300: '#ff8da5',
  400: '#fa6d8c',
  500: '#e65273',
  600: '#c83d5f',
  700: '#9d2f4b',
  800: '#742338',
  900: '#511829',
}

const theme = extendTheme({
  colors: {
    brand,
  },
  fonts: {
    heading: "'Space Grotesk', 'Manrope', system-ui, -apple-system, sans-serif",
    body: "'Manrope', system-ui, -apple-system, sans-serif",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        margin: 0,
        color: '#0f1015',
        backgroundColor: '#f8f7fb',
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(250, 109, 140, 0.16), transparent 35%),
          radial-gradient(circle at 85% 0%, rgba(99, 102, 241, 0.12), transparent 30%),
          linear-gradient(180deg, #fdfcff 0%, #f6f8fb 60%, #f7f6fb 100%)
        `,
      },
      'h1, h2, h3, h4': {
        letterSpacing: '-0.02em',
      },
      '::selection': {
        background: brand[100],
        color: '#0f1015',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'full',
        fontWeight: '600',
      },
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: '-0.02em',
      },
    },
  },
})

export default theme
