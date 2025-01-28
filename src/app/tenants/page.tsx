import Link from "next/link"

const tenants = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321" },
  // Add more mock data as needed
]

export default function TenantsList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tenants</h1>
        <Link href="/tenants/add" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add Tenant
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id} className="border-t">
                <td className="py-3 px-4">{tenant.name}</td>
                <td className="py-3 px-4">{tenant.email}</td>
                <td className="py-3 px-4">{tenant.phone}</td>
                <td className="py-3 px-4">
                  <Link href={`/tenants/${tenant.id}`} className="text-blue-500 hover:underline mr-2">
                    View
                  </Link>
                  <Link href={`/tenants/${tenant.id}/edit`} className="text-green-500 hover:underline">
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

