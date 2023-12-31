import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proyecto AUTOMATAS I',
  description: 'Proyecto Unidad III - Automatas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header/>
          {children}
        </body>
    </html>
  )
}
