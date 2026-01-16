import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'


const satoshi = localFont({
  variable: '--font-satoshi',
  display: 'swap',
  src: [
    {
      path: '../public/fonts/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Dallas Round Table | Simplilearn',
  description: 'Exclusive Simplilearn Dallas Round Table Event',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased bg-white text-[#0B1F3B]`}>
        {children}
      </body>
    </html>
  )
}
