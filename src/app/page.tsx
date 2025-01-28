import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Property Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Properties" count={5} link="/properties" bgColor="bg-blue-500" />
        <DashboardCard title="Tenants" count={12} link="/tenants" bgColor="bg-green-500" />
        <DashboardCard title="Agreements" count={8} link="/agreements" bgColor="bg-purple-500" />
      </div>
    </div>
  )
}

function DashboardCard({
  title,
  count,
  link,
  bgColor,
}: {
  title: string
  count: number
  link: string
  bgColor: string
}) {
  return (
    <Link href={link} className={`${bgColor} text-white rounded-lg p-6 hover:opacity-90 transition-opacity`}>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-4xl font-bold">{count}</p>
    </Link>
  )
}

