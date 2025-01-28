"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const tenantSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  dateOfBirth: z.string().refine((date) => {
    const eighteenYearsAgo = new Date()
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18)
    return new Date(date) <= eighteenYearsAgo
  }, "Tenant must be at least 18 years old"),
  employmentStatus: z.enum(["employed", "unemployed", "student", "retired"]),
  annualIncome: z.number().min(0, "Annual income cannot be negative"),
})

type TenantFormData = z.infer<typeof tenantSchema>

export default function AddTenantForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TenantFormData>({
    resolver: zodResolver(tenantSchema),
  })

  const onSubmit: SubmitHandler<TenantFormData> = async (data) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-2 font-bold">
          First Name
        </label>
        <input {...register("firstName")} id="firstName" type="text" className="w-full px-3 py-2 border rounded" />
        {errors.firstName && <p className="mt-1 text-red-500">{errors.firstName.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-2 font-bold">
          Last Name
        </label>
        <input {...register("lastName")} id="lastName" type="text" className="w-full px-3 py-2 border rounded" />
        {errors.lastName && <p className="mt-1 text-red-500">{errors.lastName.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-bold">
          Email
        </label>
        <input {...register("email")} id="email" type="email" className="w-full px-3 py-2 border rounded" />
        {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 font-bold">
          Phone
        </label>
        <input {...register("phone")} id="phone" type="tel" className="w-full px-3 py-2 border rounded" />
        {errors.phone && <p className="mt-1 text-red-500">{errors.phone.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block mb-2 font-bold">
          Date of Birth
        </label>
        <input {...register("dateOfBirth")} id="dateOfBirth" type="date" className="w-full px-3 py-2 border rounded" />
        {errors.dateOfBirth && <p className="mt-1 text-red-500">{errors.dateOfBirth.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="employmentStatus" className="block mb-2 font-bold">
          Employment Status
        </label>
        <select {...register("employmentStatus")} id="employmentStatus" className="w-full px-3 py-2 border rounded">
          <option value="employed">Employed</option>
          <option value="unemployed">Unemployed</option>
          <option value="student">Student</option>
          <option value="retired">Retired</option>
        </select>
        {errors.employmentStatus && <p className="mt-1 text-red-500">{errors.employmentStatus.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="annualIncome" className="block mb-2 font-bold">
          Annual Income
        </label>
        <input
          {...register("annualIncome", { valueAsNumber: true })}
          id="annualIncome"
          type="number"
          className="w-full px-3 py-2 border rounded"
        />
        {errors.annualIncome && <p className="mt-1 text-red-500">{errors.annualIncome.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isSubmitting ? "Submitting..." : "Add Tenant"}
      </button>

      {submitSuccess && <p className="mt-4 text-green-500">Tenant added successfully!</p>}
    </form>
  )
}

