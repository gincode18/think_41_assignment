"use client"

import { AgreementProvider } from "@/context/AggrementContext"
import AgreementForm from "@/components/AgreementForm"

export default function CreateAgreementPage() {
  return (
    <AgreementProvider>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Create Rental Agreement</h1>
        <AgreementForm />
      </div>
    </AgreementProvider>
  )
}

