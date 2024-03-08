'use client'
import './globals.css'
import { useState, useEffect } from 'react'
import { Web3Modal } from '@/context/Web3Modal'
import { SWRProvider } from '@/providers/swr'
import { customViewport } from '@/utils'
import { usePathname } from 'next/navigation'

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Set isMounted to true after first render
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Set a custom viewport meta tag in every page for mobile view < 500px
  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return
    customViewport()
  }, [isMounted, path])

  return (
    <html lang='en'>
      <head>
        <title>app</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicons/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/favicons/android-chrome-512x512.png' />

        {/* Primary Meta Tags */}
        <meta name='title' content='app' />
        <meta name='description' content='app description' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://example.app' />
        <meta property='og:title' content='app' />
        <meta property='og:description' content='app description' />
        <meta property='og:image' content='/metaimage.png' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://example.app' />
        <meta property='twitter:title' content='app' />
        <meta property='twitter:description' content='app description' />
        <meta property='twitter:image' content='/metaimage.png' />

        <meta name='theme-color' content='#ffffff' />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body>
        <SWRProvider>
          <Web3Modal>{children}</Web3Modal>
        </SWRProvider>
      </body>
    </html>
  )
}
