"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddProperty() {
  const router = useRouter()
  const [property, setProperty] = useState({
    address: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    rent: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProperty((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("New property:", property)
    // Redirect to the properties list
    router.push("/properties")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Property</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2 font-bold">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={property.address}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2 font-bold">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={property.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="bedrooms" className="block mb-2 font-bold">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bathrooms" className="block mb-2 font-bold">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rent" className="block mb-2 font-bold">
            Rent (per month)
          </label>
          <input
            type="number"
            id="rent"
            name="rent"
            value={property.rent}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add Property
        </button>
      </form>
    </div>
  )
}

