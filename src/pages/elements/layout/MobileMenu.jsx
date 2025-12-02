import {
  Box,
  Drawer,
  DrawerCloseTrigger,
  Flex,
  IconButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Button,
  Heading,
  HStack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useLanguage } from '../../../i18n/LanguageContext'

export function MobileMenu() {
  const { t } = useLanguage()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      display={{ base: 'flex', md: 'none' }}
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={3}
      bg="black"
      color="white"
    >
      <HStack spacing={3}>
        <Box
          w="40px"
          h="40px"
          bg="brand.400"
          color="white"
          rounded="md"
          display="grid"
          placeItems="center"
          fontWeight="extrabold"
          boxShadow="md"
        >
          L.
        </Box>
        <Box>
          <Heading size="sm" letterSpacing="-0.02em">
            {t('appTitle')}
          </Heading>
          <Text fontSize="xs" color="whiteAlpha.700">
            {t('appSubtitle')}
          </Text>
        </Box>
      </HStack>

      <IconButton
        icon={<HamburgerIcon />}
        onClick={onOpen}
        aria-label="Open menu"
        variant="ghost"
        colorScheme="whiteAlpha"
      />

      <Drawer.Root
        placement="left"
        open={isOpen}
        onOpenChange={({ open }) => (open ? onOpen() : onClose())}
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            bg="gray.900"
            color="white"
            pt={4}
            pb={6}
            px={4}
          >
            <DrawerCloseTrigger position="absolute" top={4} right={4} color="white" />
            <DrawerHeader borderBottomWidth="1px" borderColor="whiteAlpha.200">
              <Flex align="center" justify="space-between">
                <HStack spacing={3}>
                  <Box
                    w="42px"
                    h="42px"
                    bg="brand.400"
                    rounded="md"
                    display="grid"
                    placeItems="center"
                    fontWeight="extrabold"
                  >
                    L.
                  </Box>
                  <Box>
                    <Heading size="md">{t('appTitle')}</Heading>
                  </Box>
                </HStack>
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} align="stretch" mt={6}>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.100' }}
                  onClick={onClose}
                >
                  {t('navSchedule')}
                </Button>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.100' }}
                  onClick={onClose}
                >
                  {t('navClients')}
                </Button>
                <Button
                  variant="ghost"
                  justifyContent="flex-start"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.100' }}
                  onClick={onClose}
                >
                  {t('navDocuments')}
                </Button>
              </VStack>
            </DrawerBody>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}
