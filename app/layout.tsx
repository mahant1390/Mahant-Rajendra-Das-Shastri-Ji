import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mahant Rajendra Das Shastri Ji Puja',
  description: 'For Mahant Rajendra Das Shastri Ji Puja ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
