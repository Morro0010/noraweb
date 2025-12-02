import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const brand = {
  50: { value: '#ffecef' },
  100: { value: '#ffd4dc' },
  200: { value: '#ffb0c0' },
  300: { value: '#ff8da5' },
  400: { value: '#fa6d8c' },
  500: { value: '#e65273' },
  600: { value: '#c83d5f' },
  700: { value: '#9d2f4b' },
  800: { value: '#742338' },
  900: { value: '#511829' },
}

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand,
      },
      fonts: {
        heading: { value: "'Space Grotesk', 'Manrope', system-ui, -apple-system, sans-serif" },
        body: { value: "'Manrope', system-ui, -apple-system, sans-serif" },
      },
    },
  },
  globalCss: {
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
      background: brand[100].value,
      color: '#0f1015',
    },
  },
})

const theme = createSystem(defaultConfig, customConfig)

export default theme
