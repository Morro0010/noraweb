import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'es'
    return localStorage.getItem('lang') || 'es'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', language)
    }
  }, [language])

  const value = useMemo(() => {
    const t = key => translations[language][key] ?? key
    return { language, setLanguage, t }
  }, [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
