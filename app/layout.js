import { Inter } from 'next/font/google'
import './ui/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' NextAdmin Dashboard',
  description: 'Next.js Project',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
