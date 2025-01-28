"use client"

import { useAgreement } from "@/context/AggrementContext"
import { useState } from "react"
import { motion } from "framer-motion"

export default function AgreementSign() {
  const { agreementData } = useAgreement()
  const [signature, setSignature] = useState("")
  const [signed, setSigned] = useState(false)

  const handleSign = () => {
    if (signature.trim()) {
      setSigned(true)
      // Here you would typically send the signed agreement to your backend
      console.log("Agreement signed:", { ...agreementData, signature })
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Sign Agreement</h2>
      {!signed ? (
        <>
          <p>Please review the agreement and sign below:</p>
          <textarea
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="Type your full name to sign"
            className="w-full px-3 py-2 border rounded"
            rows={3}
          />
          <motion.button
            onClick={handleSign}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Agreement
          </motion.button>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-green-600 mb-4">Agreement Signed!</p>
          <p>Thank you for signing the rental agreement.</p>
        </motion.div>
      )}
    </div>
  )
}

