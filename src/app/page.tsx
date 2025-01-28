import Link from "next/link"
import { properties } from "@/lib/properties"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Property Management</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id} className="mb-4">
            <Link href={`/properties/${property.id}`} className="text-blue-600 hover:underline">
              {property.address}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

