import Link from "next/link"
import Image from "next/image"
import { properties } from "@/lib/properties"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Property Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Link href={`/properties/${property.id}`} key={property.id} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={property.imageUrl || "/placeholder.svg"}
                alt={property.address}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{property.address}</h2>
                <p className="text-gray-600">
                  {property.type} - {property.bedrooms} bed, {property.bathrooms} bath
                </p>
                <p className="text-lg font-bold mt-2 text-blue-600">${property.rent}/month</p>
                <p
                  className={`mt-2 inline-block px-2 py-1 rounded-full text-sm ${
                    property.status === "available" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                  }`}
                >
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

