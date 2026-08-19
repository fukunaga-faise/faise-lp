'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'ja' | 'en'

type LanguageContextValue = {
  lang: Lang
  toggleLang: () => void
}

const STORAGE_KEY = 'faise-lang'

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'ja',
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ja')

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'ja') setLang(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === 'ja' ? 'en' : 'ja'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
