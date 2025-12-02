import { AttachmentIcon, CalendarIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useLanguage } from '../../../i18n/LanguageContext'

export function Sidebar() {
  const { t } = useLanguage()

  return (
    <Box
      as="aside"
      w={{ base: 0, md: '270px' }}
      bg="white"
      color="gray.900"
      p={6}
      borderRightWidth="1px"
      borderColor="blackAlpha.100"
      display={{ base: 'none', md: 'block' }}
      roundedLeft="2xl"
    >
      <Flex align="center" justify="space-between" mb={10}>
        <Box>
          <Heading size="md" letterSpacing="-0.04em" color="gray.900">
            {t('appTitle')}
          </Heading>
          <Text fontSize="xs" color="gray.600">
            {t('appSubtitle')}
          </Text>
        </Box>
        <Box
          bg="brand.400"
          color="white"
          px={3}
          py={1}
          rounded="full"
          fontSize="xs"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="0.08em"
        >
          Live
        </Box>
      </Flex>

      <VStack align="stretch" spacing={3}>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          leftIcon={<CalendarIcon />}
          color="gray.900"
          fontWeight="700"
          _hover={{ bg: 'blackAlpha.50', transform: 'translateX(4px)' }}
          transition="all 0.2s ease"
        >
          {t('navSchedule')}
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          leftIcon={<CheckCircleIcon />}
          color="gray.900"
          fontWeight="700"
          _hover={{ bg: 'blackAlpha.50', transform: 'translateX(4px)' }}
          transition="all 0.2s ease"
        >
          {t('navClients')}
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          leftIcon={<AttachmentIcon />}
          color="gray.900"
          fontWeight="700"
          _hover={{ bg: 'blackAlpha.50', transform: 'translateX(4px)' }}
          transition="all 0.2s ease"
        >
          {t('navDocuments')}
        </Button>
      </VStack>

      <Box mt={10} p={4} bg="blackAlpha.50" rounded="xl" border="1px solid" borderColor="blackAlpha.100">
        <Text fontSize="sm" color="gray.900" fontWeight="600" mb={1}>
          {t('scheduleText')}
        </Text>
        <Text fontSize="xs" color="gray.600">
          {t('scheduleHint')}
        </Text>
      </Box>
    </Box>
  )
}
