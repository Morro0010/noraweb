import { CalendarIcon, ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
import { useLanguage } from '../../../i18n/LanguageContext'

export function MainCards() {
  const { t } = useLanguage()

  const calendlyUrl = 'https://calendly.com/tu-enlace'
  const clientsPanelUrl = 'https://notion.so/tu-crm'
  const whatsappUrl = 'https://wa.me/XXXXXXXXXXX'

  return (
    <Stack spacing={5}>
      <Text fontSize="sm" color="gray.600" fontWeight="600">
        {t('quickLinks')}
      </Text>
      <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
        <ActionCard
          title={t('scheduleTitle')}
          description={t('scheduleText')}
          hint={t('scheduleHint')}
          href={calendlyUrl}
          buttonLabel={t('scheduleButton')}
          icon={<CalendarIcon />}
          accent="brand.500"
        />
        <ActionCard
          title={t('clientsTitle')}
          description={t('clientsText')}
          hint={t('clientsHint')}
          href={clientsPanelUrl}
          buttonLabel={t('clientsButton')}
          icon={<ChatIcon />}
          accent="purple.500"
          secondaryCta={{ label: 'Enviar WhatsApp', href: whatsappUrl }}
        />
      </Flex>
    </Stack>
  )
}

function ActionCard({ title, description, hint, href, buttonLabel, icon, accent, secondaryCta }) {
  return (
    <Box
      flex="1"
      bg="white"
      p={6}
      borderRadius="xl"
      border="1px solid"
      borderColor="blackAlpha.100"
      boxShadow="lg"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-40px"
        right="-60px"
        w="160px"
        h="160px"
        bg={accent}
        opacity={0.08}
        rounded="full"
        filter="blur(20px)"
      />

      <Stack spacing={4} position="relative">
        <Badge colorScheme={accent === 'purple.500' ? 'purple' : 'brand'} w="fit-content" px={3} py={1} rounded="full">
          {title}
        </Badge>
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>

        <Flex align="center" gap={3} flexWrap="wrap">
          <Button
            as={Link}
            href={href}
            isExternal
            leftIcon={icon}
            rightIcon={<ExternalLinkIcon />}
            colorScheme={accent === 'purple.500' ? 'purple' : 'brand'}
            variant="solid"
          >
            {buttonLabel}
          </Button>
          {secondaryCta && (
            <Button
              as={Link}
              href={secondaryCta.href}
              isExternal
              variant="ghost"
              colorScheme="purple"
              leftIcon={<ChatIcon />}
            >
              {secondaryCta.label}
            </Button>
          )}
          <Text fontSize="xs" color="gray.500">
            {hint}
          </Text>
        </Flex>
      </Stack>
    </Box>
  )
}
