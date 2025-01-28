import { properties } from "@/lib/properties"
import PropertyDetails from "@/components/PropertyDetails"
import { notFound } from "next/navigation"

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === Number.parseInt(params.id))

  if (!property) {
    notFound()
  }

  return <PropertyDetails property={property} />
}

