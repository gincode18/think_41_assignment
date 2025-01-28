import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Property Management",
  description: "Manage rental properties, tenants, and rental agreements",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 min-h-screen`}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              PropertyManager
            </Link>
            <div>
              <Link href="/" className="mr-4 hover:underline">
                Home
              </Link>
              <Link href="#" className="hover:underline">
                About
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="container mx-auto text-center">&copy; 2023 PropertyManager. All rights reserved.</div>
        </footer>
      </body>
    </html>
  )
}

