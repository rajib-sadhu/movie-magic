import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Magic',
  description: 'Experience seamless movie magic with our online ticket booking website. Browse the latest films, check show times, and secure your seats with just a few clicks. Enjoy hassle-free access to your favorite theaters, pick your preferred seats, and embrace the cinematic adventure from the comfort of your screen.',
}

export default function RootLayout({ children }) {
  return (
    <html>
      
      <body className={inter.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
