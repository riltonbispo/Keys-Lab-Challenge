import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import keylabsLogo from '@/assets/logo.png'
import persona from '@/assets/persona.png'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col md:flex-row">
          <header className="flex items-center gap-2 absolute top-10 left-10">
            <Image src={keylabsLogo} alt="logo fox" />
            <span className="text-xl font-bold">Keylab</span>
          </header>
          <div className="bg-blue-600">
            <Image
              src={persona}
              alt="persona"
              className="max-h-80 object-cover md:min-h-screen flex-shrink"
            />
          </div>
          <div className="flex-1 px-6">
            <div className="max-w-96 my-16 mx-auto flex flex-col items-center">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
