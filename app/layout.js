import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahmed Hashem | أحمد هاشم',
  description: 'Ahmed Hashem | أحمد هاشم',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcuticon.png',
    apple: '/appleicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
