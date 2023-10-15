import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UseSidebarContext } from './state/sidebar/sidebarContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskMaster',
  description: 'The best platform for cross-functional work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UseSidebarContext>
          {children}
        </UseSidebarContext>
      </body>
    </html>
  )
}
