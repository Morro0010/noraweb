import { Box } from '@chakra-ui/react'
import { Header, MainCards } from './elements'

export function Dashboard() {
  return (
    <Box flex="1" p={{ base: 4, md: 8 }}>
      <Header />
      <MainCards />
    </Box>
  )
}
