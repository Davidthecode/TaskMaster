import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UseSidebarContext } from './context/sidebarContext'
import { Toaster } from 'react-hot-toast'
import { UseTasksContext } from './context/tasksContext'

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
          <UseTasksContext>
            {children}
            <Toaster />
          </UseTasksContext>
        </UseSidebarContext>
      </body>
    </html>
  )
}
