import { useMemo, useState } from 'react'
import { ArrowForwardIcon, CheckCircleIcon, StarIcon, TimeIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Icon,
  Flex,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const copy = {
  es: {
    brand: 'Nombre de la marca',
    tagline: 'Tagline breve aquí',
    heroKicker: 'Coloca aquí tu mensaje clave',
    heroTitle: 'Titular llamativo para vender tus planes de viaje.',
    heroBody: 'Usa este espacio para escribir una descripción corta que resuma la promesa de tu servicio. Mantén el tono cercano y claro.',
    heroPrimary: 'Reservar ahora',
    heroSecondary: 'Hablar con un asesor',
    trust: 'Sellos o confianza',
    badge1: 'Testimonio breve',
    badge2: 'Garantía',
    badge3: 'Certificaciones',
    blockTitle: 'Bloque visual',
    blockBody: 'Añade imágenes o sliders que muestren la experiencia de viaje.',
    statsTitle: 'Métrica',
    statsBody: 'Describe brevemente qué representa este número.',
    featureSubtitle: 'Ventajas clave',
    featureTitle: 'Lista tus puntos fuertes aquí.',
    featureCta: 'Explorar detalle',
    plansSubtitle: 'Planes o paquetes',
    plansTitle: 'Muestra tus paquetes principales.',
    planCta: 'Elegir este plan',
    processSubtitle: 'Cómo funciona',
    processTitle: 'Explica el proceso en 3 pasos.',
    processNote: 'Dato breve o promesa.',
    finalTitle: 'Cierra con tu CTA final.',
    finalBody: 'Reafirma la promesa principal y añade un recordatorio de por qué deberían elegir tu servicio.',
    finalPrimary: 'Iniciar reserva',
    finalSecondary: 'Solicitar contacto'
  },
  en: {
    brand: 'Brand name',
    tagline: 'Short tagline here',
    heroKicker: 'Drop your key message here',
    heroTitle: 'Bold headline to sell your travel plans.',
    heroBody: 'Use this space for a concise description that sums up your promise. Keep it clear and friendly.',
    heroPrimary: 'Book now',
    heroSecondary: 'Talk to a specialist',
    trust: 'Trust badges',
    badge1: 'Short testimonial',
    badge2: 'Guarantee',
    badge3: 'Certifications',
    blockTitle: 'Visual block',
    blockBody: 'Add imagery or sliders that showcase the travel experience.',
    statsTitle: 'Metric',
    statsBody: 'Briefly describe what this number represents.',
    featureSubtitle: 'Key advantages',
    featureTitle: 'List your strongest points here.',
    featureCta: 'View details',
    plansSubtitle: 'Plans or packages',
    plansTitle: 'Showcase your main packages.',
    planCta: 'Choose this plan',
    processSubtitle: 'How it works',
    processTitle: 'Explain the process in 3 steps.',
    processNote: 'Short promise or detail.',
    finalTitle: 'Close with your main CTA.',
    finalBody: 'Reinforce the core promise and remind them why to choose you.',
    finalPrimary: 'Start booking',
    finalSecondary: 'Request contact'
  }
}

const featureCards = [
  { title: 'Bloque destacado', description: 'Placeholder: beneficio principal de tu servicio.', accent: 'brand.500' },
  { title: 'Ventaja clave', description: 'Placeholder: qué hace único tu plan de viajes.', accent: 'purple.500' },
  { title: 'Resultado esperado', description: 'Placeholder: resultado final para el cliente.', accent: 'blue.500' },
]

const planCards = [
  { title: 'Plan 1', tagline: 'Placeholder: nombre del paquete o experiencia.', accent: 'brand.400' },
  { title: 'Plan 2', tagline: 'Placeholder: otro paquete que quieras resaltar.', accent: 'purple.400' },
  { title: 'Plan 3', tagline: 'Placeholder: propuesta premium o exclusiva.', accent: 'blue.400' },
]

const steps = [
  { title: 'Paso 1', copy: 'Placeholder: explica cómo inicia el proceso.', icon: CheckCircleIcon },
  { title: 'Paso 2', copy: 'Placeholder: fase de planificación o curaduría.', icon: TimeIcon },
  { title: 'Paso 3', copy: 'Placeholder: seguimiento, entrega o soporte.', icon: StarIcon },
]

export function Landing() {
  const [lang, setLang] = useState('es')
  const t = copy[lang]
  const fadeUp = useMemo(() => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }), [])

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-b, #fff7fb 0%, #f3f6ff 100%)"
      color="gray.900"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        bg="radial-gradient(circle at 20% 30%, rgba(230, 82, 115, 0.12), transparent 35%), radial-gradient(circle at 80% 10%, rgba(108, 99, 255, 0.12), transparent 30%), radial-gradient(circle at 70% 70%, rgba(15, 16, 21, 0.02), transparent 25%)"
        pointerEvents="none"
      />

      <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }} pb={{ base: 14, md: 24 }} position="relative" zIndex={1}>
        <Header lang={lang} setLang={setLang} t={t} />
        <Hero t={t} fadeUp={fadeUp} />
        <Stats t={t} fadeUp={fadeUp} />
        <Box borderBottom="1px solid" borderColor="blackAlpha.100" my={12} />
        <FeatureSection t={t} fadeUp={fadeUp} />
        <PlanSection t={t} fadeUp={fadeUp} />
        <ProcessSection t={t} fadeUp={fadeUp} />
        <FinalCta t={t} fadeUp={fadeUp} />
      </Box>
    </Box>
  )
}

function Header({ lang, setLang, t }) {
  return (
    <Flex
      as={motion.header}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      align="center"
      justify="space-between"
      py={5}
      px={{ base: 4, md: 8 }}
      maxW="1200px"
      mx="auto"
      position="sticky"
      top={0}
      zIndex={2}
      backdropFilter="blur(18px)"
      bg="whiteAlpha.900"
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
      rounded="xl"
    >
      <HStack spacing={3}>
        <Box
          w="44px"
          h="44px"
          bg="brand.400"
          rounded="md"
          display="grid"
          placeItems="center"
          fontWeight="800"
          fontSize="lg"
          boxShadow="md"
          color="white"
        >
          L.
        </Box>
        <Box>
          <Heading size="md" letterSpacing="-0.02em">{t.brand}</Heading>
          <Text color="gray.600" fontSize="sm">{t.tagline}</Text>
        </Box>
      </HStack>

      <HStack spacing={{ base: 2, md: 4 }} display={{ base: 'none', md: 'flex' }} align="center">
        <Link href="#planes" color="gray.700" fontWeight="600" _hover={{ color: 'black' }}>Planes</Link>
        <Link href="#ventajas" color="gray.700" fontWeight="600" _hover={{ color: 'black' }}>Ventajas</Link>
        <Link href="#proceso" color="gray.700" fontWeight="600" _hover={{ color: 'black' }}>Proceso</Link>
        <LanguageToggle lang={lang} setLang={setLang} />
        <Button size="sm" rightIcon={<ArrowForwardIcon />} colorScheme="brand">
          {t.heroPrimary}
        </Button>
      </HStack>

      <HStack spacing={2} display={{ base: 'flex', md: 'none' }}>
        <LanguageToggle lang={lang} setLang={setLang} compact />
        <Button size="sm" colorScheme="brand">
          {t.heroPrimary}
        </Button>
      </HStack>
    </Flex>
  )
}

function LanguageToggle({ lang, setLang, compact }) {
  return (
    <Box
      role="group"
      display="inline-flex"
      alignItems="center"
      bg="gray.100"
      border="1px solid"
      borderColor="blackAlpha.100"
      rounded="full"
      px={compact ? 2 : 3}
      py={compact ? 1 : 1.5}
      gap={compact ? 1 : 2}
      cursor="pointer"
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
    >
      <Badge
        rounded="full"
        px={compact ? 2 : 3}
        py={compact ? 1 : 1}
        colorScheme="brand"
        bg={lang === 'es' ? 'brand.500' : 'transparent'}
        color={lang === 'es' ? 'white' : 'gray.700'}
        transition="all 0.2s ease"
      >
        ES
      </Badge>
      <Badge
        rounded="full"
        px={compact ? 2 : 3}
        py={compact ? 1 : 1}
        colorScheme="brand"
        bg={lang === 'en' ? 'brand.500' : 'transparent'}
        color={lang === 'en' ? 'white' : 'gray.700'}
        transition="all 0.2s ease"
      >
        EN
      </Badge>
    </Box>
  )
}

function Hero({ t, fadeUp }) {
  return (
    <Flex
      as={motion.section}
      {...fadeUp}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      gap={{ base: 10, md: 14 }}
      pt={{ base: 10, md: 16 }}
    >
      <Stack spacing={6} flex="1" maxW="620px">
        <Badge
          colorScheme="brand"
          w="fit-content"
          px={4}
          py={2}
          rounded="full"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          {t.heroKicker}
        </Badge>

        <Heading size={{ base: '3xl', md: '4xl' }} lineHeight="1.05" letterSpacing="-0.04em">
          {t.heroTitle}
        </Heading>

        <Text color="gray.700" fontSize={{ base: 'md', md: 'lg' }} maxW="680px">
          {t.heroBody}
        </Text>

        <HStack spacing={3} flexWrap="wrap">
          <Button size="lg" colorScheme="brand" rightIcon={<ArrowForwardIcon />}>
            {t.heroPrimary}
          </Button>
          <Button size="lg" variant="outline" colorScheme="gray">
            {t.heroSecondary}
          </Button>
          <Badge px={3} py={2} rounded="full" colorScheme="green" color="green.800" bg="green.50">
            {t.trust}
          </Badge>
        </HStack>

        <HStack spacing={4} color="gray.700" flexWrap="wrap">
          <PlaceholderChip label={t.badge1} />
          <PlaceholderChip label={t.badge2} />
          <PlaceholderChip label={t.badge3} />
        </HStack>

        <HStack spacing={3} flexWrap="wrap">
          <Button variant="outline" colorScheme="brand">
            Placeholder WhatsApp
          </Button>
          <Button variant="outline" colorScheme="gray">
            Placeholder Email
          </Button>
        </HStack>
      </Stack>

      <Box
        flex="0.9"
        w="100%"
        maxW="520px"
        bg="whiteAlpha.900"
        border="1px solid"
        borderColor="blackAlpha.100"
        rounded="2xl"
        boxShadow="xl"
        p={{ base: 6, md: 7 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(135deg, rgba(230,82,115,0.08), rgba(108,99,255,0.08))"
          opacity={1}
          pointerEvents="none"
        />
        <Stack spacing={5} position="relative">
          <Heading size="lg">{t.blockTitle}</Heading>
          <Text color="gray.700">
            {t.blockBody}
          </Text>
          <VStack spacing={3} align="stretch">
            <InfoRow label="Destino destacado" value="Placeholder: describe el destino" />
            <InfoRow label="Duración" value="Placeholder: número de días" />
            <InfoRow label="Fechas" value="Placeholder: rango de fechas" />
          </VStack>
          <Button variant="solid" colorScheme="brand">
            {t.heroSecondary}
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
}

function Stats({ t, fadeUp }) {
  return (
    <SimpleGrid
      as={motion.section}
      {...fadeUp}
      columns={{ base: 1, md: 3 }}
      spacing={6}
      mt={12}
      id="metricas"
    >
      {['Métrica 1', 'Métrica 2', 'Métrica 3'].map((label, idx) => (
        <Box
          key={label}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          p={5}
          rounded="xl"
          border="1px solid"
          borderColor="blackAlpha.100"
          bg="white"
          boxShadow="md"
        >
          <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.08em" color="gray.500">
            {`${t.statsTitle} ${idx + 1}`}
          </Text>
          <Heading size="xl" mt={2}>
            0{idx + 1}
          </Heading>
          <Text color="gray.600" fontSize="sm" mt={1}>
            {t.statsBody}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  )
}

function FeatureSection({ t, fadeUp }) {
  return (
    <Box
      id="ventajas"
      mt={16}
      as={motion.section}
      {...fadeUp}
      scrollMarginTop="100px"
    >
      <HStack spacing={3} mb={4}>
        <Badge colorScheme="brand" rounded="full" px={3} py={1}>
          {t.featureSubtitle}
        </Badge>
        <Text color="gray.600">Placeholder: texto breve de contexto</Text>
      </HStack>
      <Heading size="2xl" mb={6}>{t.featureTitle}</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {featureCards.map(card => (
          <Box
            key={card.title}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            p={6}
            bg="white"
            border="1px solid"
            borderColor="blackAlpha.100"
            rounded="xl"
            boxShadow="lg"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-60px"
              right="-80px"
              w="180px"
              h="180px"
              bg={card.accent}
              opacity={0.08}
              rounded="full"
              filter="blur(40px)"
            />
            <Stack spacing={3} position="relative">
              <Badge colorScheme="gray" bg="gray.50" color="gray.700" w="fit-content">
                {card.title}
              </Badge>
              <Text color="gray.700">{card.description}</Text>
              <Button size="sm" variant="link" colorScheme="brand">
                {t.featureCta}
              </Button>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function PlanSection({ t, fadeUp }) {
  return (
    <Box
      id="planes"
      mt={18}
      as={motion.section}
      {...fadeUp}
      scrollMarginTop="100px"
    >
      <HStack spacing={3} mb={4}>
        <Badge colorScheme="purple" rounded="full" px={3} py={1}>
          {t.plansSubtitle}
        </Badge>
        <Text color="gray.600">Placeholder: subtítulo para introducir los planes</Text>
      </HStack>
      <Heading size="2xl" mb={6}>{t.plansTitle}</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {planCards.map(card => (
          <Box
            key={card.title}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            p={6}
            bg="white"
            border="1px solid"
            borderColor="blackAlpha.100"
            rounded="xl"
            boxShadow="xl"
          >
            <Badge colorScheme="gray" bg="gray.50" color="gray.700" mb={3}>
              {card.title}
            </Badge>
            <Heading size="md" mb={2}>{card.tagline}</Heading>
            <Text color="gray.600" mb={4}>
              Placeholder: incluye highlights y propuesta de valor.
            </Text>
            <VStack align="stretch" spacing={2}>
              <Text color="gray.700">Detalle destacado 1</Text>
              <Text color="gray.700">Detalle destacado 2</Text>
              <Text color="gray.700">Detalle destacado 3</Text>
            </VStack>
            <Button mt={5} w="full" colorScheme="brand">
              {t.planCta}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function ProcessSection({ t, fadeUp }) {
  return (
    <Box
      id="proceso"
      mt={18}
      as={motion.section}
      {...fadeUp}
      scrollMarginTop="100px"
    >
      <HStack spacing={3} mb={4}>
        <Badge colorScheme="blue" rounded="full" px={3} py={1}>
          {t.processSubtitle}
        </Badge>
        <Text color="gray.600">Placeholder: guía paso a paso</Text>
      </HStack>
      <Heading size="2xl" mb={6}>{t.processTitle}</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        {steps.map((step, index) => (
          <Box
            key={step.title}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            p={6}
            bg="white"
            border="1px solid"
            borderColor="blackAlpha.100"
            rounded="xl"
            boxShadow="lg"
          >
            <HStack spacing={3} mb={3}>
              <Box
                w="36px"
                h="36px"
                rounded="full"
                bg="brand.400"
                display="grid"
                placeItems="center"
                color="white"
                fontWeight="700"
              >
                {index + 1}
              </Box>
              <Heading size="md">{step.title}</Heading>
            </HStack>
            <Text color="gray.700" mb={4}>{step.copy}</Text>
            <HStack spacing={2} color="gray.700">
              <Icon as={step.icon} boxSize={5} color="brand.500" />
              <Text fontSize="sm">{t.processNote}</Text>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function FinalCta({ t, fadeUp }) {
  return (
    <Box
      mt={16}
      p={{ base: 6, md: 10 }}
      bgGradient="linear(to-r, rgba(230,82,115,0.14), rgba(108,99,255,0.14))"
      border="1px solid"
      borderColor="blackAlpha.100"
      rounded="2xl"
      boxShadow="2xl"
      as={motion.section}
      {...fadeUp}
    >
      <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'center' }} gap={6} justify="space-between">
        <Stack spacing={3}>
          <Heading size="xl">{t.finalTitle}</Heading>
          <Text color="gray.700" maxW="640px">
            {t.finalBody}
          </Text>
        </Stack>
        <HStack spacing={3}>
          <Button size="lg" colorScheme="brand" rightIcon={<ArrowForwardIcon />}>
            {t.finalPrimary}
          </Button>
          <Button size="lg" variant="outline" colorScheme="gray">
            {t.finalSecondary}
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

function InfoRow({ label, value }) {
  return (
    <Flex justify="space-between" align="center" bg="gray.50" px={4} py={3} rounded="md" border="1px solid" borderColor="blackAlpha.100">
      <Text color="gray.600">{label}</Text>
      <Text fontWeight="700" color="gray.800">{value}</Text>
    </Flex>
  )
}

function PlaceholderChip({ label }) {
  return (
    <HStack spacing={2} bg="gray.50" px={3} py={2} rounded="full" border="1px dashed" borderColor="blackAlpha.200">
      <Box w="8px" h="8px" bg="brand.400" rounded="full" />
      <Text fontSize="sm" color="gray.700">{label}</Text>
    </HStack>
  )
}
