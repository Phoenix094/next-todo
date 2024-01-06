import { Inter } from 'next/font/google'
import './globals.css'
import AppBar from '@components/AppBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo App',
  description: 'to maintain daily tasks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar />
        {children}
      </body>
    </html>
  )
}
