import { properties } from "@/lib/properties"

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === Number.parseInt(params.id))

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <div>
      <h1>Property Details</h1>
      <p>Address: {property.address}</p>
      <p>Type: {property.type}</p>
    </div>
  )
}

