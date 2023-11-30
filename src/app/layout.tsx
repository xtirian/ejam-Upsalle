import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../sass/globals.scss'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clarifion',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
