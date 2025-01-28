"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"

type AgreementStep = "details" | "terms" | "review" | "sign"

interface AgreementContextType {
  currentStep: AgreementStep
  setCurrentStep: (step: AgreementStep) => void
  agreementData: {
    propertyId: string
    tenantId: string
    startDate: string
    endDate: string
    rentAmount: number
    securityDeposit: number
    terms: string[]
  }
  updateAgreementData: (data: Partial<AgreementContextType["agreementData"]>) => void
  progress: number
}

const AgreementContext = createContext<AgreementContextType | undefined>(undefined)

export const useAgreement = () => {
  const context = useContext(AgreementContext)
  if (!context) {
    throw new Error("useAgreement must be used within an AgreementProvider")
  }
  return context
}

export const AgreementProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<AgreementStep>("details")
  const [agreementData, setAgreementData] = useState<AgreementContextType["agreementData"]>({
    propertyId: "",
    tenantId: "",
    startDate: "",
    endDate: "",
    rentAmount: 0,
    securityDeposit: 0,
    terms: [],
  })

  const updateAgreementData = (data: Partial<typeof agreementData>) => {
    setAgreementData((prev) => ({ ...prev, ...data }))
  }

  const progress = (() => {
    switch (currentStep) {
      case "details":
        return 25
      case "terms":
        return 50
      case "review":
        return 75
      case "sign":
        return 100
      default:
        return 0
    }
  })()

  return (
    <AgreementContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        agreementData,
        updateAgreementData,
        progress,
      }}
    >
      {children}
    </AgreementContext.Provider>
  )
}

