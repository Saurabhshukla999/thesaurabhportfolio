import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { personalData } from "@/lib/data"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: `${personalData.name} - ${personalData.title}`,
  description: personalData.summary,
  keywords: "Full Stack Developer, react developer, javascript, typescript, web development, portfolio",
  authors: [{ name: personalData.name }],
  openGraph: {
    title: `${personalData.name} - ${personalData.title}`,
    description: personalData.summary,
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${jetBrainsMono.variable} font-mono`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          value={{ dark: "dark", light: "light-terminal" }}
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
