'use client'

import { createContext, useContext, type ReactNode } from 'react'

import { localizePath, type Lang } from './locale'
export { alternatePath, hasEnglish, localizePath, type Lang } from './locale'

type LanguageContextValue = {
  lang: Lang
  localize: (href: string) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'ja',
  localize: (href) => href,
})

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ lang, localize: (href) => localizePath(href, lang) }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
