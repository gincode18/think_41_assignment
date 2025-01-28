"use client"

import { useAgreement } from "@/context/AggrementContext"
import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const detailsSchema = z.object({
  propertyId: z.string().min(1, "Property is required"),
  tenantId: z.string().min(1, "Tenant is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  rentAmount: z.number().min(0, "Rent amount must be positive"),
  securityDeposit: z.number().min(0, "Security deposit must be positive"),
})

type DetailsFormData = z.infer<typeof detailsSchema>

export default function AgreementDetails() {
  const { agreementData, updateAgreementData, setCurrentStep } = useAgreement()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DetailsFormData>({
    resolver: zodResolver(detailsSchema),
    defaultValues: agreementData,
  })

  const onSubmit: SubmitHandler<DetailsFormData> = (data) => {
    updateAgreementData(data)
    setCurrentStep("terms")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="propertyId" className="block mb-1 font-medium">
          Property
        </label>
        <select {...register("propertyId")} id="propertyId" className="w-full px-3 py-2 border rounded">
          <option value="">Select a property</option>
          <option value="1">123 Main St</option>
          <option value="2">456 Elm St</option>
        </select>
        {errors.propertyId && <p className="mt-1 text-sm text-red-500">{errors.propertyId.message}</p>}
      </div>

      <div>
        <label htmlFor="tenantId" className="block mb-1 font-medium">
          Tenant
        </label>
        <select {...register("tenantId")} id="tenantId" className="w-full px-3 py-2 border rounded">
          <option value="">Select a tenant</option>
          <option value="1">John Doe</option>
          <option value="2">Jane Smith</option>
        </select>
        {errors.tenantId && <p className="mt-1 text-sm text-red-500">{errors.tenantId.message}</p>}
      </div>

      <div>
        <label htmlFor="startDate" className="block mb-1 font-medium">
          Start Date
        </label>
        <input {...register("startDate")} id="startDate" type="date" className="w-full px-3 py-2 border rounded" />
        {errors.startDate && <p className="mt-1 text-sm text-red-500">{errors.startDate.message}</p>}
      </div>

      <div>
        <label htmlFor="endDate" className="block mb-1 font-medium">
          End Date
        </label>
        <input {...register("endDate")} id="endDate" type="date" className="w-full px-3 py-2 border rounded" />
        {errors.endDate && <p className="mt-1 text-sm text-red-500">{errors.endDate.message}</p>}
      </div>

      <div>
        <label htmlFor="rentAmount" className="block mb-1 font-medium">
          Rent Amount
        </label>
        <input
          {...register("rentAmount", { valueAsNumber: true })}
          id="rentAmount"
          type="number"
          className="w-full px-3 py-2 border rounded"
        />
        {errors.rentAmount && <p className="mt-1 text-sm text-red-500">{errors.rentAmount.message}</p>}
      </div>

      <div>
        <label htmlFor="securityDeposit" className="block mb-1 font-medium">
          Security Deposit
        </label>
        <input
          {...register("securityDeposit", { valueAsNumber: true })}
          id="securityDeposit"
          type="number"
          className="w-full px-3 py-2 border rounded"
        />
        {errors.securityDeposit && <p className="mt-1 text-sm text-red-500">{errors.securityDeposit.message}</p>}
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
        Next: Terms
      </button>
    </form>
  )
}

