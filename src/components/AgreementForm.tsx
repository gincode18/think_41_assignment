"use client"

import { useAgreement } from "@/context/AggrementContext"
import { motion, AnimatePresence } from "framer-motion"
import AgreementDetails from "./AggreementsDetails"
import AgreementTerms from "./AggrementTerms"
import AgreementReview from "./AgrrementReview"
import AgreementSign from "./AggrementSign"

export default function AgreementForm() {
  const { currentStep, progress } = useAgreement()

  const stepComponents = {
    details: AgreementDetails,
    terms: AgreementTerms,
    review: AgreementReview,
    sign: AgreementSign,
  }

  const CurrentStepComponent = stepComponents[currentStep]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-500 text-right">{progress}% Complete</div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <CurrentStepComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

