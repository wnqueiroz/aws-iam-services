import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Services that work with IAM | Comprehensive list of AWS services and their IAM compatibility features',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
