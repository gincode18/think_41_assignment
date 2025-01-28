"use client"

import { useAgreement } from "@/context/AggrementContext"

export default function AgreementReview() {
  const { agreementData, setCurrentStep } = useAgreement()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Review Agreement</h2>
      <div className="space-y-2">
        <p>
          <strong>Property:</strong> {agreementData.propertyId}
        </p>
        <p>
          <strong>Tenant:</strong> {agreementData.tenantId}
        </p>
        <p>
          <strong>Start Date:</strong> {agreementData.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {agreementData.endDate}
        </p>
        <p>
          <strong>Rent Amount:</strong> ${agreementData.rentAmount}
        </p>
        <p>
          <strong>Security Deposit:</strong> ${agreementData.securityDeposit}
        </p>
      </div>
      <div>
        <h3 className="font-semibold mt-4 mb-2">Terms:</h3>
        <ul className="list-disc list-inside">
          {agreementData.terms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep("terms")}
          className="py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={() => setCurrentStep("sign")}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next: Sign
        </button>
      </div>
    </div>
  )
}

