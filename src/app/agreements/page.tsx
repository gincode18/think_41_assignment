import Link from "next/link"

const agreements = [
  { id: 1, propertyAddress: "123 Main St", tenantName: "John Doe", startDate: "2023-01-01", endDate: "2023-12-31" },
  { id: 2, propertyAddress: "456 Elm St", tenantName: "Jane Smith", startDate: "2023-03-01", endDate: "2024-02-29" },
  // Add more mock data as needed
]

export default function AgreementsList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Rental Agreements</h1>
        <Link href="/agreements/create" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Create Agreement
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Property</th>
              <th className="py-3 px-4 text-left">Tenant</th>
              <th className="py-3 px-4 text-left">Start Date</th>
              <th className="py-3 px-4 text-left">End Date</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agreements.map((agreement) => (
              <tr key={agreement.id} className="border-t">
                <td className="py-3 px-4">{agreement.propertyAddress}</td>
                <td className="py-3 px-4">{agreement.tenantName}</td>
                <td className="py-3 px-4">{agreement.startDate}</td>
                <td className="py-3 px-4">{agreement.endDate}</td>
                <td className="py-3 px-4">
                  <Link href={`/agreements/${agreement.id}`} className="text-blue-500 hover:underline mr-2">
                    View
                  </Link>
                  <Link href={`/agreements/${agreement.id}/edit`} className="text-green-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

