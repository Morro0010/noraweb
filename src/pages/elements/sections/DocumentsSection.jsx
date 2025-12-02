import { AttachmentIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Flex, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react'
import { useLanguage } from '../../../i18n/LanguageContext'

export function DocumentsSection() {
  const { t } = useLanguage()

  const onedriveBaseUrl = 'https://onedrive.live.com/tu-carpeta'

  return (
    <Box mt={8}>
      <Box
        bgGradient="linear(to-r, #fef5f7, white)"
        border="1px solid"
        borderColor="blackAlpha.100"
        rounded="2xl"
        p={{ base: 5, md: 6 }}
        boxShadow="xl"
      >
        <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'center' }} gap={6}>
          <Stack spacing={3} flex="1">
            <HStack spacing={2}>
              <Badge colorScheme="brand" rounded="full" px={3} py={1}>
                {t('docsTitle')}
              </Badge>
              <Badge variant="outline" colorScheme="gray" rounded="full" px={3} py={1}>
                Cloud · Secure
              </Badge>
            </HStack>
            <Heading size="lg">{t('docsText')}</Heading>
            <Text color="gray.600">{t('docsHint')}</Text>
          </Stack>

          <Stack spacing={3} align={{ base: 'stretch', md: 'flex-end' }}>
            <Button
              as={Link}
              href={onedriveBaseUrl}
              leftIcon={<AttachmentIcon />}
              colorScheme="brand"
              variant="solid"
              isExternal
              px={6}
            >
              {t('docsButton')}
            </Button>
            <Text fontSize="xs" color="gray.500" textAlign={{ base: 'left', md: 'right' }}>
              {t('docsHint')}
            </Text>
          </Stack>
        </Flex>
      </Box>
    </Box>
  )
}
