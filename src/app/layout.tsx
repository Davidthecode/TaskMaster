import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { UseSidebarContext } from './context/sidebarContext';
import { Toaster } from 'react-hot-toast';
import { UseTasksContext } from './context/tasksContext';
import { UseProjectsContext } from './context/projectsContext';
import { UseProjectMembersContext } from './context/projectMembersContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskMaster | A modern platform for cross-functional work',
  description: 'A modern platform for cross-functional work',
};

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
            <UseProjectsContext>
              <UseProjectMembersContext>
                {children}
                <Toaster />
              </UseProjectMembersContext>
            </UseProjectsContext>
          </UseTasksContext>
        </UseSidebarContext>
      </body>
    </html>
  )
};
