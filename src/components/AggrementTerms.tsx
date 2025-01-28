"use client"

import { useAgreement } from "@/context/AggrementContext"
import { useState } from "react"

const defaultTerms = [
  "Rent is due on the 1st of each month",
  "No pets allowed without written permission",
  "Tenant is responsible for utilities",
  "No smoking inside the property",
]

export default function AgreementTerms() {
  const { agreementData, updateAgreementData, setCurrentStep } = useAgreement()
  const [terms, setTerms] = useState(agreementData.terms.length > 0 ? agreementData.terms : defaultTerms)
  const [newTerm, setNewTerm] = useState("")

  const addTerm = () => {
    if (newTerm.trim()) {
      setTerms([...terms, newTerm.trim()])
      setNewTerm("")
    }
  }

  const removeTerm = (index: number) => {
    setTerms(terms.filter((_, i) => i !== index))
  }

  const handleNext = () => {
    updateAgreementData({ terms })
    setCurrentStep("review")
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Agreement Terms</h2>
      <ul className="space-y-2">
        {terms.map((term, index) => (
          <li key={index} className="flex items-center justify-between">
            <span>{term}</span>
            <button onClick={() => removeTerm(index)} className="text-red-500 hover:text-red-700">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newTerm}
          onChange={(e) => setNewTerm(e.target.value)}
          placeholder="Add a new term"
          className="flex-grow px-3 py-2 border rounded"
        />
        <button onClick={addTerm} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Add
        </button>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep("details")}
          className="py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Back
        </button>
        <button onClick={handleNext} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
          Next: Review
        </button>
      </div>
    </div>
  )
}

