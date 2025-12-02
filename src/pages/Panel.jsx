import { useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Dashboard } from './Dashboard'
import { MobileMenu, Sidebar } from './elements'
import { useLanguage } from '../i18n/LanguageContext'

export function Panel() {
  const { setLanguage } = useLanguage()

  useEffect(() => {
    setLanguage('es')
  }, [setLanguage])

  return (
    <Box
      minH="100vh"
      px={{ base: 4, md: 8 }}
      py={{ base: 6, md: 10 }}
      position="relative"
      bg="gray.50"
    >
      <Box
        position="absolute"
        top="-120px"
        left="-80px"
        w="240px"
        h="240px"
        bg="brand.100"
        rounded="full"
        filter="blur(120px)"
        opacity={0.8}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-160px"
        right="-140px"
        w="320px"
        h="320px"
        bg="purple.100"
        rounded="full"
        filter="blur(160px)"
        opacity={0.6}
        zIndex={0}
      />

      <Box
        maxW="1200px"
        mx="auto"
        bg="whiteAlpha.900"
        border="1px solid"
        borderColor="blackAlpha.100"
        rounded="2xl"
        boxShadow="2xl"
        backdropFilter="blur(12px)"
        position="relative"
        zIndex={1}
        overflow="hidden"
        p={{ base: 4, md: 6 }}
      >
        <MobileMenu />

        <Flex flex="1" gap={{ base: 0, md: 6 }} align="flex-start">
          <Sidebar />
          <Dashboard />
        </Flex>
      </Box>
    </Box>
  )
}
