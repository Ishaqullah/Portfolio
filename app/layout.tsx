import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ishaqullah Siddiqui | Portfolio',
  description: 'Created by Ishaqullah Siddiqui',
  // generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
