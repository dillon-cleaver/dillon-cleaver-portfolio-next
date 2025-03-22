import type React from "react"
import type { Metadata } from "next"
import { Bitter } from "next/font/google"
import "./globals.css"

// Initialize the Bitter font
const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-bitter",
})

export const metadata: Metadata = {
  title: "Dillon Cleaver | Developer Portfolio",
  description: "Personal portfolio website for Dillon Cleaver, showcasing projects and skills.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" scroll-behavior="smooth" className={bitter.variable}>
      <body className={bitter.className}>{children}</body>
    </html>
  )
}



import './globals.css'