import Link from "next/link"
import { properties } from "@/lib/properties"

export default function PropertiesList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Properties</h1>
        <Link href="/properties/add" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Property
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Link
            href={`/properties/${property.id}`}
            key={property.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={property.imageUrl || "/placeholder.svg"}
              alt={property.address}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.address}</h2>
              <p className="text-gray-600">
                {property.type} - {property.bedrooms} bed, {property.bathrooms} bath
              </p>
              <p className="text-lg font-bold mt-2 text-blue-600">${property.rent}/month</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

