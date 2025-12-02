import { Badge, Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useLanguage } from '../../../i18n/LanguageContext'

export function Header() {
  const { t } = useLanguage()

  return (
    <Box mb={8}>
      <Box
        bg="white"
        border="1px solid"
        borderColor="blackAlpha.100"
        rounded="2xl"
        p={{ base: 5, md: 7 }}
        boxShadow="xl"
      >
        <Flex
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 5, md: 8 }}
        >
          <Stack spacing={3}>
            <Badge colorScheme="brand" px={3} py={1} rounded="full" fontWeight="700" w="fit-content">
              {t('appTitle')}
            </Badge>

            <Heading size="2xl" lineHeight="1.1">
              {t('appTitle')}
            </Heading>
            <Text color="gray.600" maxW="3xl">
              {t('appSubtitle')}
            </Text>

            <HStack spacing={3} flexWrap="wrap">
              <Badge variant="outline" colorScheme="brand" px={3} py={1} rounded="full">
                {t('navSchedule')}
              </Badge>
              <Badge variant="outline" colorScheme="purple" px={3} py={1} rounded="full">
                {t('navClients')}
              </Badge>
              <Badge variant="outline" colorScheme="gray" px={3} py={1} rounded="full">
                {t('navDocuments')}
              </Badge>
            </HStack>
          </Stack>

          <Stack spacing={3} align={{ base: 'flex-start', md: 'flex-end' }}>
            <Text fontSize="sm" color="gray.600">
              {t('quickLinks')}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {t('navSchedule')} · {t('navClients')} · {t('navDocuments')}
            </Text>
          </Stack>
        </Flex>
      </Box>
    </Box>
  )
}
