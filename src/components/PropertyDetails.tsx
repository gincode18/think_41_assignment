import type { Property } from "@/lib/properties"
import Image from "next/image"
import Link from "next/link"

interface PropertyDetailsProps {
  property: Property
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to all properties
      </Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={property.imageUrl || "/placeholder.svg"}
              alt={property.address}
              width={600}
              height={400}
              className="h-full w-full object-cover md:w-96"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{property.address}</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-600">Type</p>
                <p className="font-semibold text-gray-800">{property.type}</p>
              </div>
              <div>
                <p className="text-gray-600">Bedrooms</p>
                <p className="font-semibold text-gray-800">{property.bedrooms}</p>
              </div>
              <div>
                <p className="text-gray-600">Bathrooms</p>
                <p className="font-semibold text-gray-800">{property.bathrooms}</p>
              </div>
              <div>
                <p className="text-gray-600">Rent</p>
                <p className="font-semibold text-gray-800">${property.rent}/month</p>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 mb-2">Status</p>
              <p
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  property.status === "available" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                }`}
              >
                {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
              </p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

